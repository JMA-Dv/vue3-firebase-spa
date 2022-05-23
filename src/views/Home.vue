<template>
  <div class="home">
    <hr>
    <Items class="mt-10"></Items>
  </div>
</template>

<script>
// @ is an alias to /src
import Items from '@/views/Items.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components:{
    Items
  },
  methods:{
    ...mapActions(['loadHystory'])
  },
  created(){
    this.loadHystory();
  }

}
</script>
