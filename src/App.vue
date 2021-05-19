<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Counter />
  <hr />
  <AttributeBinding />
  <hr />
  <EventHandling />
  <hr />
  <TwoWayBinding />
  <hr />
  <ConditionalRendering />
  <hr />
  <ListRendering />
  <hr />
  <TodoList />
  <hr />
  Step2.
  <hr />
  <TemplateTutorial />
  <hr />
  <Books />
  <hr />
  <Watch />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Counter from "./components/Step1/Counter.vue";
import AttributeBinding from "./components/Step1/AttributeBinding.vue";
import EventHandling from "./components/Step1/EventHandling.vue";
import TwoWayBinding from "./components/Step1/TwoWayBinding.vue";
import ConditionalRendering from "./components/Step1/ConditionalRendering.vue";
import ListRendering from "./components/Step1/ListRendering.vue";
import TodoList from "./components/Step1/TodoList.vue";

// https://v3.ja.vuejs.org/guide/template-syntax.html#%E5%B1%95%E9%96%8B
import TemplateTutorial from "./components/Step2/TemplateTutorial.vue";

// https://v3.ja.vuejs.org/guide/computed.html#%E7%AE%97%E5%87%BA%E3%83%95%E3%82%9A%E3%83%AD%E3%83%8F%E3%82%9A%E3%83%86%E3%82%A3
import Books from "./components/Step3/Books.vue";
import Watch from "./components/Step3/Watch.vue";

export default {
  name: "App",
  components: {
    Counter,
    AttributeBinding,
    EventHandling,
    TwoWayBinding,
    ConditionalRendering,
    ListRendering,
    TodoList,
    TemplateTutorial,
    Books,
    Watch
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
