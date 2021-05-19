<template>
  <div id="watch-example">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
  <div id="demo">{{ fullName }}</div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      firstName: "Foo",
      lastName: "Bar",
    };
  },
  watch: {
    question(newQuestion, oldQuestion) {
      oldQuestion;
      if (newQuestion.indexOf("?") > -1) {
        this.getAuswer();
      }
    },
  },
  methods: {
    getAuswer() {
      this.answer = "Thinking...";
      this.axios
        .get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = response.data.answer;
        })
        .catch((error) => {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  setup() {},
};
</script>