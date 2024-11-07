<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  }
}
</script>

<template>

<header>
  <div class="container">
    <h1>
      Laravel Boolfolio - API
    </h1>

    <ul>
      <li>
        <router-link :to="{ name: 'home' }" class="nav-link">
          Home
        </router-link>
      </li>
    </ul>
  </div>
</header>

</template>

<style scoped>
header {
  text-align: center;
  padding: 20px 0;
}
</style>
