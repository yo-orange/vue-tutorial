<template>
  <div id="list-rendering">
    <ol>
      <li v-for="todo in todos" v-bind:key="todo.id">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        { id: 1, text: "Learn JavaScript" },
        { id: 2, text: "Learn Vue" },
        { id: 3, text: "Build something awesome" },
      ],
    };
  },
  setup() {},
};
</script>