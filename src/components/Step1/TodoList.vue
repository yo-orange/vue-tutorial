-- https://v3.ja.vuejs.org/guide/introduction.html#%E3%82%B3%E3%83%B3%E3%83%9B%E3%82%9A%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E3%82%88%E3%82%8B%E6%A7%8B%E6%88%90
<template>
  <div id="todo-list-app">
    <ol>
      <!--
      各 todo-item にその内容を表す todo オブジェクトを指定することで、
      内容が動的に変化します。後述する "key" も各コンポーネントに
      指定する必要があります。
    -->
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></todo-item>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
  setup() {},
};
</script>