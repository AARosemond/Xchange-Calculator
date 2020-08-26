<template>
  <div>
    <div class="CurrencyConverter">
      <h1>XchangeCalculator</h1>
      <img alt="CurrencyConverter logo" src="../assets/CurrencyConverterLogo.png" />
    </div>
    <div class="form">
      <div class="form-container">
        <p class="error" v-show="showError">type in c</p>
        <form v-on:submit.prevent="getRates">
          <div data-ng-app="any" data-ng-init="quantity=1;price=5">
            <h2>Item Cost Calculator</h2>
            <p>
              Item Quantity:
              <input type="number" ng-model="quantity" />
              Price:
              <input type="number" ng-model="price" />
              <label for="itemTotal">
                Item Total:
                <input type="text" id="itemTotal" v-model="itemTotal" />
              </label>
            </p>
            <div class="itemTotal-container">
              <div v-if="itemTotal">{{this.quantity * this.price}}</div>
            </div>
          </div>
          <h2>Cost Currency Converter</h2>

          <p>
            <label for="multiplier">
              Total
              <input type="text" id="multiplier" v-model="multiplier" />
            </label>
          </p>
          <div class="container">
            <div class="currency">
              <p>
                <label for="base">
                  Base Currency
                  <select id="base" v-model="base">
                    <option value="USD" selected="selected" label="US dollar">USD - US dollar</option>
                    <option value="EUR" label="Euro">EUR - Euro</option>
                    <option value="JPY" label="Japanese yen">JPY - Japanese yen</option>
                    <option value="GBP" label="Pound sterling">GBP - Pound sterling</option>
                    <option disabled>──────────</option>
                    <option
                      value="AED"
                      label="United Arab Emirates dirham"
                    >AED - United Arab Emirates dirham</option>
                    <option value="AFN" label="Afghan afghani">AFN - Afghan afghani</option>
                    <option value="ALL" label="Albanian lek">ALL - Albanian lek</option>
                    <option value="AMD" label="Armenian dram">AMD - Armenian dram</option>
                    <option
                      value="ANG"
                      label="Netherlands Antillean guilder"
                    >ANG - Netherlands Antillean guilder</option>
                    <option value="AOA" label="Angolan kwanza">AOA - Angolan kwanza</option>
                    <option value="ARS" label="Argentine peso">ARS - Argentine peso</option>
                    <option value="AUD" label="Australian dollar">AUD - Australian dollar</option>
                    <option value="AWG" label="Aruban florin">AWG - Aruban florin</option>
                    <option value="AZN" label="Azerbaijani manat">AZN - Azerbaijani manat</option>
                    <option
                      value="BAM"
                      label="Bosnia and Herzegovina convertible mark"
                    >BAM - Bosnia and Herzegovina convertible mark</option>
                    <option value="BBD" label="Barbadian dollar">BBD - Barbadian dollar</option>
                    <option value="BDT" label="Bangladeshi taka">BDT - Bangladeshi taka</option>
                    <option value="BGN" label="Bulgarian lev">BGN - Bulgarian lev</option>
                    <option value="BHD" label="Bahraini dinar">BHD - Bahraini dinar</option>
                    <option value="BIF" label="Burundian franc">BIF - Burundian franc</option>
                    <option value="BMD" label="Bermudian dollar">BMD - Bermudian dollar</option>
                    <option value="BND" label="Brunei dollar">BND - Brunei dollar</option>
                    <option value="BOB" label="Bolivian boliviano">BOB - Bolivian boliviano</option>
                    <option value="BRL" label="Brazilian real">BRL - Brazilian real</option>
                    <option value="BSD" label="Bahamian dollar">BSD - Bahamian dollar</option>
                    <option value="BTN" label="Bhutanese ngultrum">BTN - Bhutanese ngultrum</option>
                    <option value="BWP" label="Botswana pula">BWP - Botswana pula</option>
                    <option value="BYN" label="Belarusian ruble">BYN - Belarusian ruble</option>
                    <option value="BZD" label="Belize dollar">BZD - Belize dollar</option>
                    <option value="CAD" label="Canadian dollar">CAD - Canadian dollar</option>
                    <option value="CDF" label="Congolese franc">CDF - Congolese franc</option>
                    <option value="CHF" label="Swiss franc">CHF - Swiss franc</option>
                    <option value="CLP" label="Chilean peso">CLP - Chilean peso</option>
                    <option value="CNY" label="Chinese yuan">CNY - Chinese yuan</option>
                    <option value="COP" label="Colombian peso">COP - Colombian peso</option>
                    <option value="CRC" label="Costa Rican colón">CRC - Costa Rican colón</option>
                    <option value="CUC" label="Cuban convertible peso">CUC - Cuban convertible peso</option>
                    <option value="CUP" label="Cuban peso">CUP - Cuban peso</option>
                    <option value="CVE" label="Cape Verdean escudo">CVE - Cape Verdean escudo</option>
                    <option value="CZK" label="Czech koruna">CZK - Czech koruna</option>
                    <option value="DJF" label="Djiboutian franc">DJF - Djiboutian franc</option>
                    <option value="DKK" label="Danish krone">DKK - Danish krone</option>
                    <option value="DOP" label="Dominican peso">DOP - Dominican peso</option>
                    <option value="DZD" label="Algerian dinar">DZD - Algerian dinar</option>
                    <option value="EGP" label="Egyptian pound">EGP - Egyptian pound</option>
                    <option value="ERN" label="Eritrean nakfa">ERN - Eritrean nakfa</option>
                    <option value="ETB" label="Ethiopian birr">ETB - Ethiopian birr</option>
                    <option value="EUR" label="EURO">EUR - EURO</option>
                    <option value="FJD" label="Fijian dollar">FJD - Fijian dollar</option>
                    <option value="FKP" label="Falkland Islands pound">FKP - Falkland Islands pound</option>
                    <option value="GBP" label="British pound">GBP - British pound</option>
                    <option value="GEL" label="Georgian lari">GEL - Georgian lari</option>
                    <option value="GGP" label="Guernsey pound">GGP - Guernsey pound</option>
                    <option value="GHS" label="Ghanaian cedi">GHS - Ghanaian cedi</option>
                    <option value="GIP" label="Gibraltar pound">GIP - Gibraltar pound</option>
                    <option value="GMD" label="Gambian dalasi">GMD - Gambian dalasi</option>
                    <option value="GNF" label="Guinean franc">GNF - Guinean franc</option>
                    <option value="GTQ" label="Guatemalan quetzal">GTQ - Guatemalan quetzal</option>
                    <option value="GYD" label="Guyanese dollar">GYD - Guyanese dollar</option>
                    <option value="HKD" label="Hong Kong dollar">HKD - Hong Kong dollar</option>
                    <option value="HNL" label="Honduran lempira">HNL - Honduran lempira</option>
                    <option value="HKD" label="Hong Kong dollar">HKD - Hong Kong dollar</option>
                    <option value="HRK" label="Croatian kuna">HRK - Croatian kuna</option>
                    <option value="HTG" label="Haitian gourde">HTG - Haitian gourde</option>
                    <option value="HUF" label="Hungarian forint">HUF - Hungarian forint</option>
                    <option value="IDR" label="Indonesian rupiah">IDR - Indonesian rupiah</option>
                    <option value="ILS" label="Israeli new shekel">ILS - Israeli new shekel</option>
                    <option value="IMP" label="Manx pound">IMP - Manx pound</option>
                    <option value="INR" label="Indian rupee">INR - Indian rupee</option>
                    <option value="IQD" label="Iraqi dinar">IQD - Iraqi dinar</option>
                    <option value="IRR" label="Iranian rial">IRR - Iranian rial</option>
                    <option value="ISK" label="Icelandic króna">ISK - Icelandic króna</option>
                    <option value="JEP" label="Jersey pound">JEP - Jersey pound</option>
                    <option value="JMD" label="Jamaican dollar">JMD - Jamaican dollar</option>
                    <option value="JOD" label="Jordanian dinar">JOD - Jordanian dinar</option>
                    <option value="JPY" label="Japanese yen">JPY - Japanese yen</option>
                    <option value="KES" label="Kenyan shilling">KES - Kenyan shilling</option>
                    <option value="KGS" label="Kyrgyzstani som">KGS - Kyrgyzstani som</option>
                    <option value="KHR" label="Cambodian riel">KHR - Cambodian riel</option>
                    <option value="KID" label="Kiribati dollar">KID - Kiribati dollar</option>
                    <option value="KMF" label="Comorian franc">KMF - Comorian franc</option>
                    <option value="KPW" label="North Korean won">KPW - North Korean won</option>
                    <option value="KRW" label="South Korean won">KRW - South Korean won</option>
                    <option value="KWD" label="Kuwaiti dinar">KWD - Kuwaiti dinar</option>
                    <option value="KYD" label="Cayman Islands dollar">KYD - Cayman Islands dollar</option>
                    <option value="KZT" label="Kazakhstani tenge">KZT - Kazakhstani tenge</option>
                    <option value="LAK" label="Lao kip">LAK - Lao kip</option>
                    <option value="LBP" label="Lebanese pound">LBP - Lebanese pound</option>
                    <option value="LKR" label="Sri Lankan rupee">LKR - Sri Lankan rupee</option>
                    <option value="LRD" label="Liberian dollar">LRD - Liberian dollar</option>
                    <option value="LSL" label="Lesotho loti">LSL - Lesotho loti</option>
                    <option value="LYD" label="Libyan dinar">LYD - Libyan dinar</option>
                    <option value="MAD" label="Moroccan dirham">MAD - Moroccan dirham</option>
                    <option value="MDL" label="Moldovan leu">MDL - Moldovan leu</option>
                    <option value="MGA" label="Malagasy ariary">MGA - Malagasy ariary</option>
                    <option value="MKD" label="Macedonian denar">MKD - Macedonian denar</option>
                    <option value="MMK" label="Burmese kyat">MMK - Burmese kyat</option>
                    <option value="MNT" label="Mongolian tögrög">MNT - Mongolian tögrög</option>
                    <option value="MOP" label="Macanese pataca">MOP - Macanese pataca</option>
                    <option value="MRU" label="Mauritanian ouguiya">MRU - Mauritanian ouguiya</option>
                    <option value="MUR" label="Mauritian rupee">MUR - Mauritian rupee</option>
                    <option value="MVR" label="Maldivian rufiyaa">MVR - Maldivian rufiyaa</option>
                    <option value="MWK" label="Malawian kwacha">MWK - Malawian kwacha</option>
                    <option value="MXN" label="Mexican peso">MXN - Mexican peso</option>
                    <option value="MYR" label="Malaysian ringgit">MYR - Malaysian ringgit</option>
                    <option value="MZN" label="Mozambican metical">MZN - Mozambican metical</option>
                    <option value="NAD" label="Namibian dollar">NAD - Namibian dollar</option>
                    <option value="NGN" label="Nigerian naira">NGN - Nigerian naira</option>
                    <option value="NIO" label="Nicaraguan córdoba">NIO - Nicaraguan córdoba</option>
                    <option value="NOK" label="Norwegian krone">NOK - Norwegian krone</option>
                    <option value="NPR" label="Nepalese rupee">NPR - Nepalese rupee</option>
                    <option value="NZD" label="New Zealand dollar">NZD - New Zealand dollar</option>
                    <option value="OMR" label="Omani rial">OMR - Omani rial</option>
                    <option value="PAB" label="Panamanian balboa">PAB - Panamanian balboa</option>
                    <option value="PEN" label="Peruvian sol">PEN - Peruvian sol</option>
                    <option value="PGK" label="Papua New Guinean kina">PGK - Papua New Guinean kina</option>
                    <option value="PHP" label="Philippine peso">PHP - Philippine peso</option>
                    <option value="PKR" label="Pakistani rupee">PKR - Pakistani rupee</option>
                    <option value="PLN" label="Polish złoty">PLN - Polish złoty</option>
                    <option value="PRB" label="Transnistrian ruble">PRB - Transnistrian ruble</option>
                    <option value="PYG" label="Paraguayan guaraní">PYG - Paraguayan guaraní</option>
                    <option value="QAR" label="Qatari riyal">QAR - Qatari riyal</option>
                    <option value="RON" label="Romanian leu">RON - Romanian leu</option>
                    <option value="RON" label="Romanian leu">RON - Romanian leu</option>
                    <option value="RSD" label="Serbian dinar">RSD - Serbian dinar</option>
                    <option value="RUB" label="Russian ruble">RUB - Russian ruble</option>
                    <option value="RWF" label="Rwandan franc">RWF - Rwandan franc</option>
                    <option value="SAR" label="Saudi riyal">SAR - Saudi riyal</option>
                    <option value="SEK" label="Swedish krona">SEK - Swedish krona</option>
                    <option value="SGD" label="Singapore dollar">SGD - Singapore dollar</option>
                    <option value="SHP" label="Saint Helena pound">SHP - Saint Helena pound</option>
                    <option value="SLL" label="Sierra Leonean leone">SLL - Sierra Leonean leone</option>
                    <option value="SLS" label="Somaliland shilling">SLS - Somaliland shilling</option>
                    <option value="SOS" label="Somali shilling">SOS - Somali shilling</option>
                    <option value="SRD" label="Surinamese dollar">SRD - Surinamese dollar</option>
                    <option value="SSP" label="South Sudanese pound">SSP - South Sudanese pound</option>
                    <option
                      value="STN"
                      label="São Tomé and Príncipe dobra"
                    >STN - São Tomé and Príncipe dobra</option>
                    <option value="SYP" label="Syrian pound">SYP - Syrian pound</option>
                    <option value="SZL" label="Swazi lilangeni">SZL - Swazi lilangeni</option>
                    <option value="THB" label="Thai baht">THB - Thai baht</option>
                    <option value="TJS" label="Tajikistani somoni">TJS - Tajikistani somoni</option>
                    <option value="TMT" label="Turkmenistan manat">TMT - Turkmenistan manat</option>
                    <option value="TND" label="Tunisian dinar">TND - Tunisian dinar</option>
                    <option value="TOP" label="Tongan paʻanga">TOP - Tongan paʻanga</option>
                    <option value="TRY" label="Turkish lira">TRY - Turkish lira</option>
                    <option
                      value="TTD"
                      label="Trinidad and Tobago dollar"
                    >TTD - Trinidad and Tobago dollar</option>
                    <option value="TVD" label="Tuvaluan dollar">TVD - Tuvaluan dollar</option>
                    <option value="TWD" label="New Taiwan dollar">TWD - New Taiwan dollar</option>
                    <option value="TZS" label="Tanzanian shilling">TZS - Tanzanian shilling</option>
                    <option value="UAH" label="Ukrainian hryvnia">UAH - Ukrainian hryvnia</option>
                    <option value="UGX" label="Ugandan shilling">UGX - Ugandan shilling</option>
                    <option value="USD" label="United States dollar">USD - United States dollar</option>
                    <option value="UYU" label="Uruguayan peso">UYU - Uruguayan peso</option>
                    <option value="UZS" label="Uzbekistani soʻm">UZS - Uzbekistani soʻm</option>
                    <option
                      value="VES"
                      label="Venezuelan bolívar soberano"
                    >VES - Venezuelan bolívar soberano</option>
                    <option value="VND" label="Vietnamese đồng">VND - Vietnamese đồng</option>
                    <option value="VUV" label="Vanuatu vatu">VUV - Vanuatu vatu</option>
                    <option value="WST" label="Samoan tālā">WST - Samoan tālā</option>
                    <option
                      value="XAF"
                      label="Central African CFA franc"
                    >XAF - Central African CFA franc</option>
                    <option
                      value="XCD"
                      label="Eastern Caribbean dollar"
                    >XCD - Eastern Caribbean dollar</option>
                    <option value="XOF" label="West African CFA franc">XOF - West African CFA franc</option>
                    <option value="XPF" label="CFP franc">XPF - CFP franc</option>
                    <option value="ZAR" label="South African rand">ZAR - South African rand</option>
                    <option value="ZMW" label="Zambian kwacha">ZMW - Zambian kwacha</option>
                    <option value="ZWB" label="Zimbabwean bonds">ZWB - Zimbabwean bonds</option>
                  </select>
                  <label for="base">
                    <input type="text" id="base" v-model="base" />
                  </label>
                </label>
              </p>
            </div>
          </div>

          <div class="container">
            <div class="currency">
              <p>
                <label for="destinationCurrency">
                  Destination Currency
                  <select
                    id="destinationCurrency"
                    v-model="destinationCurrency"
                  >
                    <option value="USD" selected="selected" label="US dollar">USD - US dollar</option>
                    <option value="EUR" label="Euro">EUR - Euro</option>
                    <option value="JPY" label="Japanese yen">JPY - Japanese yen</option>
                    <option value="GBP" label="Pound sterling">GBP - Pound sterling</option>
                    <option disabled>──────────</option>
                    <option
                      value="AED"
                      label="United Arab Emirates dirham"
                    >AED - United Arab Emirates dirham</option>
                    <option value="AFN" label="Afghan afghani">AFN - Afghan afghani</option>
                    <option value="ALL" label="Albanian lek">ALL - Albanian lek</option>
                    <option value="AMD" label="Armenian dram">AMD - Armenian dram</option>
                    <option
                      value="ANG"
                      label="Netherlands Antillean guilder"
                    >ANG - Netherlands Antillean guilder</option>
                    <option value="AOA" label="Angolan kwanza">AOA - Angolan kwanza</option>
                    <option value="ARS" label="Argentine peso">ARS - Argentine peso</option>
                    <option value="AUD" label="Australian dollar">AUD - Australian dollar</option>
                    <option value="AWG" label="Aruban florin">AWG - Aruban florin</option>
                    <option value="AZN" label="Azerbaijani manat">AZN - Azerbaijani manat</option>
                    <option
                      value="BAM"
                      label="Bosnia and Herzegovina convertible mark"
                    >BAM - Bosnia and Herzegovina convertible mark</option>
                    <option value="BBD" label="Barbadian dollar">BBD - Barbadian dollar</option>
                    <option value="BDT" label="Bangladeshi taka">BDT - Bangladeshi taka</option>
                    <option value="BGN" label="Bulgarian lev">BGN - Bulgarian lev</option>
                    <option value="BHD" label="Bahraini dinar">BHD - Bahraini dinar</option>
                    <option value="BIF" label="Burundian franc">BIF - Burundian franc</option>
                    <option value="BMD" label="Bermudian dollar">BMD - Bermudian dollar</option>
                    <option value="BND" label="Brunei dollar">BND - Brunei dollar</option>
                    <option value="BOB" label="Bolivian boliviano">BOB - Bolivian boliviano</option>
                    <option value="BRL" label="Brazilian real">BRL - Brazilian real</option>
                    <option value="BSD" label="Bahamian dollar">BSD - Bahamian dollar</option>
                    <option value="BTN" label="Bhutanese ngultrum">BTN - Bhutanese ngultrum</option>
                    <option value="BWP" label="Botswana pula">BWP - Botswana pula</option>
                    <option value="BYN" label="Belarusian ruble">BYN - Belarusian ruble</option>
                    <option value="BZD" label="Belize dollar">BZD - Belize dollar</option>
                    <option value="CAD" label="Canadian dollar">CAD - Canadian dollar</option>
                    <option value="CDF" label="Congolese franc">CDF - Congolese franc</option>
                    <option value="CHF" label="Swiss franc">CHF - Swiss franc</option>
                    <option value="CLP" label="Chilean peso">CLP - Chilean peso</option>
                    <option value="CNY" label="Chinese yuan">CNY - Chinese yuan</option>
                    <option value="COP" label="Colombian peso">COP - Colombian peso</option>
                    <option value="CRC" label="Costa Rican colón">CRC - Costa Rican colón</option>
                    <option value="CUC" label="Cuban convertible peso">CUC - Cuban convertible peso</option>
                    <option value="CUP" label="Cuban peso">CUP - Cuban peso</option>
                    <option value="CVE" label="Cape Verdean escudo">CVE - Cape Verdean escudo</option>
                    <option value="CZK" label="Czech koruna">CZK - Czech koruna</option>
                    <option value="DJF" label="Djiboutian franc">DJF - Djiboutian franc</option>
                    <option value="DKK" label="Danish krone">DKK - Danish krone</option>
                    <option value="DOP" label="Dominican peso">DOP - Dominican peso</option>
                    <option value="DZD" label="Algerian dinar">DZD - Algerian dinar</option>
                    <option value="EGP" label="Egyptian pound">EGP - Egyptian pound</option>
                    <option value="ERN" label="Eritrean nakfa">ERN - Eritrean nakfa</option>
                    <option value="ETB" label="Ethiopian birr">ETB - Ethiopian birr</option>
                    <option value="EUR" label="EURO">EUR - EURO</option>
                    <option value="FJD" label="Fijian dollar">FJD - Fijian dollar</option>
                    <option value="FKP" label="Falkland Islands pound">FKP - Falkland Islands pound</option>
                    <option value="GBP" label="British pound">GBP - British pound</option>
                    <option value="GEL" label="Georgian lari">GEL - Georgian lari</option>
                    <option value="GGP" label="Guernsey pound">GGP - Guernsey pound</option>
                    <option value="GHS" label="Ghanaian cedi">GHS - Ghanaian cedi</option>
                    <option value="GIP" label="Gibraltar pound">GIP - Gibraltar pound</option>
                    <option value="GMD" label="Gambian dalasi">GMD - Gambian dalasi</option>
                    <option value="GNF" label="Guinean franc">GNF - Guinean franc</option>
                    <option value="GTQ" label="Guatemalan quetzal">GTQ - Guatemalan quetzal</option>
                    <option value="GYD" label="Guyanese dollar">GYD - Guyanese dollar</option>
                    <option value="HKD" label="Hong Kong dollar">HKD - Hong Kong dollar</option>
                    <option value="HNL" label="Honduran lempira">HNL - Honduran lempira</option>
                    <option value="HKD" label="Hong Kong dollar">HKD - Hong Kong dollar</option>
                    <option value="HRK" label="Croatian kuna">HRK - Croatian kuna</option>
                    <option value="HTG" label="Haitian gourde">HTG - Haitian gourde</option>
                    <option value="HUF" label="Hungarian forint">HUF - Hungarian forint</option>
                    <option value="IDR" label="Indonesian rupiah">IDR - Indonesian rupiah</option>
                    <option value="ILS" label="Israeli new shekel">ILS - Israeli new shekel</option>
                    <option value="IMP" label="Manx pound">IMP - Manx pound</option>
                    <option value="INR" label="Indian rupee">INR - Indian rupee</option>
                    <option value="IQD" label="Iraqi dinar">IQD - Iraqi dinar</option>
                    <option value="IRR" label="Iranian rial">IRR - Iranian rial</option>
                    <option value="ISK" label="Icelandic króna">ISK - Icelandic króna</option>
                    <option value="JEP" label="Jersey pound">JEP - Jersey pound</option>
                    <option value="JMD" label="Jamaican dollar">JMD - Jamaican dollar</option>
                    <option value="JOD" label="Jordanian dinar">JOD - Jordanian dinar</option>
                    <option value="JPY" label="Japanese yen">JPY - Japanese yen</option>
                    <option value="KES" label="Kenyan shilling">KES - Kenyan shilling</option>
                    <option value="KGS" label="Kyrgyzstani som">KGS - Kyrgyzstani som</option>
                    <option value="KHR" label="Cambodian riel">KHR - Cambodian riel</option>
                    <option value="KID" label="Kiribati dollar">KID - Kiribati dollar</option>
                    <option value="KMF" label="Comorian franc">KMF - Comorian franc</option>
                    <option value="KPW" label="North Korean won">KPW - North Korean won</option>
                    <option value="KRW" label="South Korean won">KRW - South Korean won</option>
                    <option value="KWD" label="Kuwaiti dinar">KWD - Kuwaiti dinar</option>
                    <option value="KYD" label="Cayman Islands dollar">KYD - Cayman Islands dollar</option>
                    <option value="KZT" label="Kazakhstani tenge">KZT - Kazakhstani tenge</option>
                    <option value="LAK" label="Lao kip">LAK - Lao kip</option>
                    <option value="LBP" label="Lebanese pound">LBP - Lebanese pound</option>
                    <option value="LKR" label="Sri Lankan rupee">LKR - Sri Lankan rupee</option>
                    <option value="LRD" label="Liberian dollar">LRD - Liberian dollar</option>
                    <option value="LSL" label="Lesotho loti">LSL - Lesotho loti</option>
                    <option value="LYD" label="Libyan dinar">LYD - Libyan dinar</option>
                    <option value="MAD" label="Moroccan dirham">MAD - Moroccan dirham</option>
                    <option value="MDL" label="Moldovan leu">MDL - Moldovan leu</option>
                    <option value="MGA" label="Malagasy ariary">MGA - Malagasy ariary</option>
                    <option value="MKD" label="Macedonian denar">MKD - Macedonian denar</option>
                    <option value="MMK" label="Burmese kyat">MMK - Burmese kyat</option>
                    <option value="MNT" label="Mongolian tögrög">MNT - Mongolian tögrög</option>
                    <option value="MOP" label="Macanese pataca">MOP - Macanese pataca</option>
                    <option value="MRU" label="Mauritanian ouguiya">MRU - Mauritanian ouguiya</option>
                    <option value="MUR" label="Mauritian rupee">MUR - Mauritian rupee</option>
                    <option value="MVR" label="Maldivian rufiyaa">MVR - Maldivian rufiyaa</option>
                    <option value="MWK" label="Malawian kwacha">MWK - Malawian kwacha</option>
                    <option value="MXN" label="Mexican peso">MXN - Mexican peso</option>
                    <option value="MYR" label="Malaysian ringgit">MYR - Malaysian ringgit</option>
                    <option value="MZN" label="Mozambican metical">MZN - Mozambican metical</option>
                    <option value="NAD" label="Namibian dollar">NAD - Namibian dollar</option>
                    <option value="NGN" label="Nigerian naira">NGN - Nigerian naira</option>
                    <option value="NIO" label="Nicaraguan córdoba">NIO - Nicaraguan córdoba</option>
                    <option value="NOK" label="Norwegian krone">NOK - Norwegian krone</option>
                    <option value="NPR" label="Nepalese rupee">NPR - Nepalese rupee</option>
                    <option value="NZD" label="New Zealand dollar">NZD - New Zealand dollar</option>
                    <option value="OMR" label="Omani rial">OMR - Omani rial</option>
                    <option value="PAB" label="Panamanian balboa">PAB - Panamanian balboa</option>
                    <option value="PEN" label="Peruvian sol">PEN - Peruvian sol</option>
                    <option value="PGK" label="Papua New Guinean kina">PGK - Papua New Guinean kina</option>
                    <option value="PHP" label="Philippine peso">PHP - Philippine peso</option>
                    <option value="PKR" label="Pakistani rupee">PKR - Pakistani rupee</option>
                    <option value="PLN" label="Polish złoty">PLN - Polish złoty</option>
                    <option value="PRB" label="Transnistrian ruble">PRB - Transnistrian ruble</option>
                    <option value="PYG" label="Paraguayan guaraní">PYG - Paraguayan guaraní</option>
                    <option value="QAR" label="Qatari riyal">QAR - Qatari riyal</option>
                    <option value="RON" label="Romanian leu">RON - Romanian leu</option>
                    <option value="RON" label="Romanian leu">RON - Romanian leu</option>
                    <option value="RSD" label="Serbian dinar">RSD - Serbian dinar</option>
                    <option value="RUB" label="Russian ruble">RUB - Russian ruble</option>
                    <option value="RWF" label="Rwandan franc">RWF - Rwandan franc</option>
                    <option value="SAR" label="Saudi riyal">SAR - Saudi riyal</option>
                    <option value="SEK" label="Swedish krona">SEK - Swedish krona</option>
                    <option value="SGD" label="Singapore dollar">SGD - Singapore dollar</option>
                    <option value="SHP" label="Saint Helena pound">SHP - Saint Helena pound</option>
                    <option value="SLL" label="Sierra Leonean leone">SLL - Sierra Leonean leone</option>
                    <option value="SLS" label="Somaliland shilling">SLS - Somaliland shilling</option>
                    <option value="SOS" label="Somali shilling">SOS - Somali shilling</option>
                    <option value="SRD" label="Surinamese dollar">SRD - Surinamese dollar</option>
                    <option value="SSP" label="South Sudanese pound">SSP - South Sudanese pound</option>
                    <option
                      value="STN"
                      label="São Tomé and Príncipe dobra"
                    >STN - São Tomé and Príncipe dobra</option>
                    <option value="SYP" label="Syrian pound">SYP - Syrian pound</option>
                    <option value="SZL" label="Swazi lilangeni">SZL - Swazi lilangeni</option>
                    <option value="THB" label="Thai baht">THB - Thai baht</option>
                    <option value="TJS" label="Tajikistani somoni">TJS - Tajikistani somoni</option>
                    <option value="TMT" label="Turkmenistan manat">TMT - Turkmenistan manat</option>
                    <option value="TND" label="Tunisian dinar">TND - Tunisian dinar</option>
                    <option value="TOP" label="Tongan paʻanga">TOP - Tongan paʻanga</option>
                    <option value="TRY" label="Turkish lira">TRY - Turkish lira</option>
                    <option
                      value="TTD"
                      label="Trinidad and Tobago dollar"
                    >TTD - Trinidad and Tobago dollar</option>
                    <option value="TVD" label="Tuvaluan dollar">TVD - Tuvaluan dollar</option>
                    <option value="TWD" label="New Taiwan dollar">TWD - New Taiwan dollar</option>
                    <option value="TZS" label="Tanzanian shilling">TZS - Tanzanian shilling</option>
                    <option value="UAH" label="Ukrainian hryvnia">UAH - Ukrainian hryvnia</option>
                    <option value="UGX" label="Ugandan shilling">UGX - Ugandan shilling</option>
                    <option value="USD" label="United States dollar">USD - United States dollar</option>
                    <option value="UYU" label="Uruguayan peso">UYU - Uruguayan peso</option>
                    <option value="UZS" label="Uzbekistani soʻm">UZS - Uzbekistani soʻm</option>
                    <option
                      value="VES"
                      label="Venezuelan bolívar soberano"
                    >VES - Venezuelan bolívar soberano</option>
                    <option value="VND" label="Vietnamese đồng">VND - Vietnamese đồng</option>
                    <option value="VUV" label="Vanuatu vatu">VUV - Vanuatu vatu</option>
                    <option value="WST" label="Samoan tālā">WST - Samoan tālā</option>
                    <option
                      value="XAF"
                      label="Central African CFA franc"
                    >XAF - Central African CFA franc</option>
                    <option
                      value="XCD"
                      label="Eastern Caribbean dollar"
                    >XCD - Eastern Caribbean dollar</option>
                    <option value="XOF" label="West African CFA franc">XOF - West African CFA franc</option>
                    <option value="XPF" label="CFP franc">XPF - CFP franc</option>
                    <option value="ZAR" label="South African rand">ZAR - South African rand</option>
                    <option value="ZMW" label="Zambian kwacha">ZMW - Zambian kwacha</option>
                    <option value="ZWB" label="Zimbabwean bonds">ZWB - Zimbabwean bonds</option>
                  </select>
                  <label for="destinationCurrency">
                    <input type="text" id="destinationCurrency" v-model="destinationCurrency" />
                  </label>
                </label>
              </p>
            </div>
          </div>
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
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
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
