<template>
  <div class="CurrencyConverter">
    <img alt="CurrencyConverter logo" src="../assets/CurrencyConverterLogo.png">
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


<style scoped>
.CurrencyConverter
body, html {
	background: #ECEDEF;
	margin: 0;
	padding: 0;
}
 
.container {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.2);
	border-radius: 14px;
	padding-bottom: 20px;
	width: 320px;
	
}
.display {
	width: 100%;
	height: 60px;
	padding: 40px 0;
	background: #FF0509;
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
input[type=button] {
	width: 60px;
	height: 60px;
	float: left;
	padding: 0;
	margin: 5px;
	box-sizing: border-box;
	background: #ecedef;
	border: none;
	font-size: 30px;
	line-height: 30px;
	border-radius: 50%;
	font-weight: 700;
	color: #5E5858;
	cursor: pointer;
	
}
input[type=text] {
	width: 270px;
	height: 60px;
	float: left;
	padding: 0;
	box-sizing: border-box;
	border: none;
	background: none;
	color: #ffffff;
	text-align: right;
	font-weight: 700;
	font-size: 60px;
	line-height: 60px;
	margin: 0 25px;
	
}
.red {
	background: #FF0509 !important;
	color: #ffffff !important;
	
}
</style>
