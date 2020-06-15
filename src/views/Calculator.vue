<template>

  <fragment>
    <img alt="CurrencyConverter logo" src="../assets/CurrencyConverterLogo.png">
      <h1>CurrencyConverter Calculator</h1>
    <div class="container">      
      <form class="form-container">
        <div class="display">
          <input type="text" placeholder="0" name="displayResult" />
        </div>
        <fragment>
          <div class="buttons">
            <div class="row">
              <input type="button" name="b7" value="7" onclick="calcNumbers(b7.value)" />
              <input type="button" name="b8" value="8" onclick="calcNumbers(b8.value)" />
              <input type="button" name="b9" value="9" onclick="calcNumbers(b9.value)" />
              <input type="button" name="addb" value="+" onclick="calcNumbers(addb.value)" />
            </div>
          </div>
        </fragment>

        <div class="row">
          <input type="button" name="b4" value="4" onclick="calcNumbers(b4.value)" />
          <input type="button" name="b5" value="5" onclick="calcNumbers(b5.value)" />
          <input type="button" name="b6" value="6" onclick="calcNumbers(b6.value)" />
          <input type="button" name="subb" value="-" onclick="calcNumbers(subb.value)" />
        </div>

        <div class="row">
          <input type="button" name="b1" value="1" onclick="calcNumbers(b1.value)" />
          <input type="button" name="b2" value="2" onclick="calcNumbers(b2.value)" />
          <input type="button" name="b3" value="3" onclick="calcNumbers(b3.value)" />
          <input type="button" name="mulb" value="*" onclick="calcNumbers(mulb.value)" />
        </div>

        <div class="row">
          <input type="button" name="b0" value="0" onclick="calcNumbers(b0.value)" />
          <input type="button" name="potb" value="." onclick="calcNumbers(potb.value)" />
          <input type="button" name="divb" value="/" onclick="calcNumbers(divb.value)" />
          <input
            type="button"
            class="red"
            value="="
            onclick="displayResult.value=eval(displayResult.value)"
          />
        </div>
      </form>
    </div>
  </fragment>
</template>

<script>
/*function calcNumbers(result) {
  form.displayResult.value = form.displayResult.value + result;
}*/
</script>

<style scoped>
.Calculator body,
html {
  background: #ecedef;
  margin: 0;
  padding: 0;
}

.contain0r {
  position: float;
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
input[type="button"] {
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
  color: #5e5858;
  cursor: pointer;
}
input[type="text"] {
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
  background: #ff0509 !important;
  color: #ffffff !important;
}
</style>

 