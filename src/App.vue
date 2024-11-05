<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  data() {
    return {

    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {

  }
}
</script>

<template>

  <AppHeader />
  
  <AppMain />
  
  <AppFooter />

</template>

<style scoped>
header {
  color: red;
}

main {
  color: blue;
}

footer {
  color: green;
}
</style>
