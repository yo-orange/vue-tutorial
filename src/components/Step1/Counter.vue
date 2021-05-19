-- https://v3.ja.vuejs.org/guide/introduction.html#%E5%AE%A3%E8%A8%80%E7%9A%84%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%99%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%99
<template>
  <div id="counter">Counter: {{ counter }}</div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};
</script>