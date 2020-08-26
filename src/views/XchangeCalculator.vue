<template>
  <div>
    <div class="CurrencyConverter"><h1>XchangeCalculator</h1>
      <img alt="CurrencyConverter logo" src="../assets/CurrencyConverterLogo.png" />
      </div>
    <div class="form">
      <div class="form-container">
        <p class="error" v-show="showError">type in c</p>
        <form v-on:submit.prevent="getRates">
          <div data-ng-app="any" data-ng-init="quantity=1;price=5">
            <h2>Item Cost Calculator</h2>
            <p>Item Quantity:<input type="number" ng-model="quantity" />
             Price:
            <input type="number" ng-model="price" />
            <label for="itemTotal"> Item Total:<input type="text" id="itemTotal" v-model="itemTotal" /></label></p>
            <div class="itemTotal-container">
              <div v-if="itemTotal">{{this.quantity*this.price}}</div>
            </div>
          </div>
          <h2>Cost Currency Converter</h2>

          <p>
            <label for="multiplier">
              Multiplier
              <input type="text" id="multiplier" v-model="multiplier" />
            </label>
          </p>Type in how much of the currency you want converted?
          <p></p>
          <p>
            <label for="base">
              Base Currency
              <input type="text" id="base" v-model="base" />
            </label>
          </p>
          <p>Type in a 3-Letter Currency (USD, EUR, JPY, etc.)</p>
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
      <spinner v-if="showSpinner"></spinner>
      <div class="results-container">
        <div
          v-if="results"
        >{{this.multiplier}} {{this.base}} = {{this.multiplier*this.results.rates[this.destinationCurrency]}} {{this.destinationCurrency}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
require("vue2-animate/dist/vue2-animate.min.css");
import CubeSpinner from "@/components/CubeSpinner";

export default {
  name: "CurrencyConverter",
  data() {
    return {
      results: null,
      errors: [],
      base: "",
      destinationCurrency: "",
      showSpinner: false,
    };
  },
  components: {
    spinner: CubeSpinner,
  },

  methods: {
    getRates: function () {
      this.showSpinner = true;
      axios
        .get("https://api.exchangeratesapi.io/latest", {
          params: {
            base: this.base,
          },
        })
        .then((response) => {
          this.showSpinner = false;
          this.results = response.data;
          console.log(this.results);
        })
        .catch((error) => {
          this.showSpinner = false;
          this.errors.push(error);
        });
    },
  },
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
