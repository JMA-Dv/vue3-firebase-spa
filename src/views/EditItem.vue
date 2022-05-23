<template>
  <form @submit.prevent="updateItem">
    <input-item :item="item"></input-item>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import InputItem from "../components/InputItem.vue";
export default {
  components: {
    InputItem,
  },
  mounted() {
    this.setCurrentItem(this.$route.params.id);
  },
  computed: {
    ...mapState(["item"]),
  },
  methods: {
    ...mapActions(["update", "setCurrentItem"]),

    updateItem() {
        this.update(this.item);
    },
  },
};
</script>