<template>
  <div>
    <div class="CurrencyConverter">
      <img alt="CurrencyConverter logo" src="../assets/CurrencyConverterLogo.png" />
      <h1>Convert into the currency you need!</h1>
    </div>
    <div class="form">
      <div class="form-container">
        <p>Sign up to access our special, secret page. Just create an account and answer a brief survey.</p>
        <p class="error" v-show="showError">type in c</p>
        <form v-on:submit.prevent="getRates">
          <p>
            <label for="base">
              Base Currency
              <input type="text" id="base" v-model="base" />
            </label>
          </p>
          <p>
            <label for="destinationCurrency">
              Destination Currency
              <input
                type="text"
                id="destinationCurrency"
                v-model="destinationCurrency"
              />
            </label>
          </p>

          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
      <div v-if="results">1 {{this.base}} = {{this.results.rates[this.destinationCurrency]}} {{this.destinationCurrency}}</div>

      <div class="success-message" v-show="!showForm">
        <h1>Thank you for signing up!</h1>
        <p>Please take our new member survey. Click here</p>
        <!-- TODO: Link "Click here" to the survey page. -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CurrencyConverter",
  data() {
    return {
      results: null,
      errors: [],
      base: "",
      destinationCurrency: ""
    };
  },
  methods: {
    getRates: function() {
      axios
        .get("https://api.exchangeratesapi.io/latest", {
          params: {
            base: this.base
          }
        })
        .then(response => {
          this.results = response.data;
          console.log(this.results);
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>


<style scoped>
.CurrencyConverter body,
html {
  background: #ecedef;
  margin: 0;
  padding: 0;
}

.containor {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 14px;
  padding-bottom: 20px;
  width: 320px;
}
.display {
  width: 100%;
  height: 60px;
  padding: 40px 0;
  background: #ff0509;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}
.buttons {
  padding: 20px 20px 0 20px;
}
.row {
  width: 280px;
  float: left;
}

.red {
  background: #ff0509 !important;
  color: #ffffff !important;
}
</style>
