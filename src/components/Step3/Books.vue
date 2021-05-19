<template>
  <div id="computed-basics">
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>
    <ol>
      <li v-for="book in author.books" v-bind:key="book.id">
        {{ book.title }}
      </li>
    </ol>
    <span>{{ publishedBooksMessage }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: [
          { id: 1, title: "Vue 2 - Advanced Guide" },
          { id: 2, title: "Vue 3 - Basic Guide" },
          { id: 3, title: "Vue 4 - The Mystery" },
        ],
      },
    };
  },
  computed: {
      publishedBooksMessage() {
          return this.author.books.length > 0 ? 'Yes' : 'No'
      }
  },
  setup() {},
};
</script>