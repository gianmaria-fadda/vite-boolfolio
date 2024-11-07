<script>
export default {
  data() {
    return {
      text: 'Sono Giacco'
    };
  },
  methods: {

  }
}
</script>

<template>

  <div class="container">
    <h1>
      Chi Siamo
    </h1>

    <p>
      {{ text }}
    </p>
  </div>

</template>

<style scoped>
.container h1 {
  text-align: center;
  border: 5px solid purple;
  border-radius: 100px;
  padding: 10px 0;
  margin-bottom: 30px;
  background-color: blueviolet;
}

.container p {
  text-align: center;
  border: 5px solid purple;
  border-radius: 10px;
  padding: 100px 0;
  margin-bottom: 30px;
  background-color: blueviolet;
}
</style>
