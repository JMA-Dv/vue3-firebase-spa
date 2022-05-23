import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    myHistory: [],
    item: {}
  },
  mutations: {
    set(state, payload) {
      if (!state.myHistory.find(i => i === payload.id)) {
        state.myHistory.push(payload)
        router.push('/');
      }
    },
    loadData(state, payload) {
      state.myHistory = payload

    },
    setCurrent(state, payload) {
      state.item = state.myHistory.find(i => i.id === payload);
    },
    updateItem(state, payload) {
      state.myHistory = state.myHistory.map(i => i.id === payload.id ? payload : i);
      router.push('/');
    },
    deleteItem(state, id) {
      state.myHistory = state.myHistory.filter(i => i.id !== id);
    },
    updateLocalStorage(state) {
      localStorage.setItem('history', JSON.stringify(state.myHistory))
    }
  },
  actions: {
    async delete({ commit }, id) {
      try {
        const res = fetch(`https://vue-api-8a3ed-default-rtdb.firebaseio.com/history/${id}.json`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        commit('deleteItem', id);

      } catch (error) {
        console.error(error)
      }
    },
    async update({ commit }, payload) {
      try {
        const res = fetch(`https://vue-api-8a3ed-default-rtdb.firebaseio.com/history/${payload.id}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const data = await (await res).json();
        commit('updateItem', data);
      } catch (error) {
        console.error(error)
      }
    },
    setCurrentItem({ commit }, payload) {
      commit('setCurrent', payload);
    },
    async setItem({ commit }, payload) {
      try {
        const res = fetch(`https://vue-api-8a3ed-default-rtdb.firebaseio.com/history/${payload.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        
        if(!(await res).ok){
          throw new Error(`Status error ${(await res).status}`)
        }

        const data = await (await res).json();
        commit('set', data);

      } catch (error) {
        console.error(error);
      }

      
      // commit('updateLocalStorage');

    },
    async loadHystory({ commit }) {
      try {
        const res = fetch("https://vue-api-8a3ed-default-rtdb.firebaseio.com/history.json", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        const data =  await (await res).json();
        // it throws an error with await res.json()

        const arrayData = Object.keys(data).map(i => {
          return data[i];
        })
        console.log("Data trandformed ", arrayData);

        commit('loadData', arrayData);

      } catch (error) {
        console.error(error);
      }

      // if(localStorage.getItem('history')){
      //   const history = JSON.parse(localStorage.getItem('history'));
      //   commit('loadData',history);
      //   return;
      // }

      // localStorage.setItem('history',JSON.stringify([]))
    }
  },
  modules: {
  }
})