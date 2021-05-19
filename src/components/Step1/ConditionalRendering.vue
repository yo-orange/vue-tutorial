<template>
  <div id="conditional-rendering">
    <p v-if="seen">Now you see me</p>
    <button v-on:click="toggle">toggle seen</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
    };
  },
  methods: {
    toggle() {
      this.seen = !this.seen;
    },
  },
  setup() {},
};
</script>