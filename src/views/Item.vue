<template>
  <form @submit.prevent="updateItem">
    <input-item :item="item"></input-item>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import InputItem from "../components/InputItem.vue";
const shortId = require('shortid')
export default {
  components: { InputItem },
  data() {
    return {
      item: {
        id: "",
        specialist: "",
        description: "",
        title:"",
        date:""
      },
    };
  },

  methods: {
    ...mapActions(['setItem']),
    updateItem() {
      if(this.item.specialist.trim() === ""){
        console.log("Empty Specialist");
        return
      }
      this.item.id = shortId.generate();
      this.item.date = new Date();
      console.log("Saving...");
      this.setItem(this.item);
    },
  },
};
</script>

<style>
</style>