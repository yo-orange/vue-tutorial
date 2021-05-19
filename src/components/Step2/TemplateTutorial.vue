<template>
  <span>Message: {{ msg }}</span>
  <span v-once>This will never change: {{ msg }}</span>
  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</template>

<script>
export default {
  data() {
    return {
        msg: "Hello.",
        rawHtml: '<span style="color: red">This should be red.</span>'
    };
  },
  setup() {},
};
</script>