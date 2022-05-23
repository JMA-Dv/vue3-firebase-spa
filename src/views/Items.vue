<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Specialist</th>
        <th scope="col">Datetime</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in myHistory" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.specialist }}</td>
        <td>{{ item.date }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteItem(item.id)">Delete</button>
          <router-link class="btn btn-success btn-sm mx-2" :to="{
            name:'EditItem',
            params:{
              id:item.id
            }
          }">Update</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["myHistory"]),
  },
  methods:{
    ...mapActions(['delete']),
    deleteItem(id){
      this.delete(id);

    }
  }
};
</script>

