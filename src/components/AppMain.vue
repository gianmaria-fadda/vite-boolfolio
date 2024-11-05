<script>
import axios from 'axios';

export default {
  data() {
    return {

    };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios
        .get('http://127.0.0.1:8000/api/projects')
        .then((res) => {
          console.log(res.data);
        });
    }
  }
}
</script>

<template>

<main>
  <div class="container">
    main
  </div>
</main>

</template>

<style scoped>
main {
  color: blue;
}
</style>
