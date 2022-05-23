<template>

    <div class="form-group">
      <label for="exampleFormControlInput1">Title reason</label>
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="Title"
        v-model="item.title"
      />
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>

      <select class="form-control" id="exampleFormControlSelect1" v-model="item.specialist">
        <option v-for="(item, index) in categories" :key="index" >
          {{ item.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="item.description"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-dark btn-block">Save</button>
</template>

<script>
export default {
  props:{
    item:Object
  },
  data() {
    return {

      categories: [
        { name: "Anaesthetist", value: "Anaesthetist" },
        { name: "Cardiologist", value: "Cardiologist" },
        { name: "Clinical radiologist", value: "Clinical-radiologist" },
        { name: "Neurologist", value: "Clinical-Neurologist" },
        { name: "Ophthalmologist", value: "Ophthalmologist" },
      ],
    };
  },
};
</script>

<style>
</style>