<template>
  <div class="CurrencyConverter">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'CurrencyConverter',
  data() {
    return {
      results: null,
      errors: [],
      phrase: "",
      rhyme: ""
    };
  }, 
  methods: {
    findWords: function() {
      axios
        .get("https://api.exchangeratesapi.io/latest HTTP/1.1", {
          params: {
            ml: this.phrase,
            rel_rhy: this.rhyme
          }
        })
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }

};
</script>
