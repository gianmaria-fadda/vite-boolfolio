<script>
export default {
  data() {
    return {
      text: 'Sono Giacco e adesso vi parleto un pò di me: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ut quod! Quisquam dolorum doloribus voluptatem qui, quidem, nesciunt facere eveniet nam sequi, laudantium dicta aperiam assumenda excepturi quae asperiores molestiae odio fugit facilis alias rem? Sunt ex, fuga, repellat libero praesentium corrupti qui voluptas veniam, et placeat vitae. Rem, asperiores.'
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
