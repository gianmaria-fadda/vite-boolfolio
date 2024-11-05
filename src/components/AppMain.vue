<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: []
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
          this.projects = res.data.data.projects.data;
          console.log(this.projects);
        });
    }
  }
}
</script>

<template>

<main>
  <div class="container">
    <div class="project-container">
      <div v-for="project in projects" :key="project.id">
        <h3>
           {{ project.title }}
        </h3>
      </div>
    </div>
  </div>
</main>

</template>

<style scoped>
.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.project-container > * {
  width: 30%;
  border: 2px solid red;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
