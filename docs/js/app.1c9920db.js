(function(a){function e(e){for(var n,i,r=e[0],s=e[1],u=e[2],p=0,b=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&b.push(l[i][0]),l[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(a[n]=s[n]);v&&v(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],n=!0,r=1;r<t.length;r++){var s=t[r];0!==l[s]&&(n=!1)}n&&(o.splice(e--,1),a=i(i.s=t[0]))}return a}var n={},l={app:0},o=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=n,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)i.d(t,n,function(e){return a[e]}.bind(null,n));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var v=s;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"034f":function(a,e,t){"use strict";var n=t("85ec"),l=t.n(n);l.a},"1bdf":function(a,e,t){},"1c6f":function(a,e,t){},"3c4b":function(a,e,t){a.exports=t.p+"img/CurrencyConverterLogo.5ba6db81.png"},5679:function(a,e){},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[a._v("XchangeCalculator")]),a._v(" | "),t("router-link",{attrs:{to:"/about"}},[a._v("About the App")])],1),t("router-view")],1)},o=[],i=(t("034f"),t("2877")),r={},s=Object(i["a"])(r,l,o,!1,null,null,null),u=s.exports,v=t("8c4f"),p=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[a._m(0),t("div",{staticClass:"form"},[t("div",{staticClass:"form-container"},[t("p",{directives:[{name:"show",rawName:"v-show",value:a.showError,expression:"showError"}],staticClass:"error"},[a._v("Error. Let's try again.")]),t("form",{on:{submit:function(e){return e.preventDefault(),a.getRates(e)}}},[t("div",[t("h2",[a._v("Item Cost Calculator")]),a._l(a.items,(function(e,n){return t("div",{key:n},[a._v(" Item Quantity: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],attrs:{type:"number"},domProps:{value:e.quantity},on:{change:a.getItemTotal,input:function(t){t.target.composing||a.$set(e,"quantity",t.target.value)}}}),a._v(" Price: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],attrs:{type:"number",step:"0.01"},domProps:{value:e.price},on:{change:a.getItemTotal,input:function(t){t.target.composing||a.$set(e,"price",t.target.value)}}}),a._v(" Item Total: "+a._s(e.quantity*e.price)+" "),n+1===a.items.length?t("button",{on:{click:a.addItem}},[a._v("Add Item")]):a._e()])})),t("div",{staticClass:"itemTotal-container"},[a.itemTotal?t("div",[a._v("Item Total: "+a._s(this.itemTotal))]):a._e()])],2),t("h2",[a._v("Cost Currency Converter")]),a.total?t("div",[a._v("Total: "+a._s(this.total))]):a._e(),t("p"),t("div",{staticClass:"container"},[t("div",{staticClass:"currency"},[t("p",[t("label",{attrs:{for:"base"}},[a._v(" Base Currency "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"base"}],attrs:{id:"base"},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.base=e.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"USD",selected:"selected",label:"US dollar"}},[a._v("USD - US dollar")]),t("option",{attrs:{value:"EUR",label:"Euro"}},[a._v("EUR - Euro")]),t("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),t("option",{attrs:{value:"GBP",label:"Pound sterling"}},[a._v("GBP - Pound sterling")]),t("option",{attrs:{disabled:""}},[a._v("──────────")]),t("option",{attrs:{value:"AED",label:"United Arab Emirates dirham"}},[a._v("AED - United Arab Emirates dirham")]),t("option",{attrs:{value:"AFN",label:"Afghan afghani"}},[a._v("AFN - Afghan afghani")]),t("option",{attrs:{value:"ALL",label:"Albanian lek"}},[a._v("ALL - Albanian lek")]),t("option",{attrs:{value:"AMD",label:"Armenian dram"}},[a._v("AMD - Armenian dram")]),t("option",{attrs:{value:"ANG",label:"Netherlands Antillean guilder"}},[a._v("ANG - Netherlands Antillean guilder")]),t("option",{attrs:{value:"AOA",label:"Angolan kwanza"}},[a._v("AOA - Angolan kwanza")]),t("option",{attrs:{value:"ARS",label:"Argentine peso"}},[a._v("ARS - Argentine peso")]),t("option",{attrs:{value:"AUD",label:"Australian dollar"}},[a._v("AUD - Australian dollar")]),t("option",{attrs:{value:"AWG",label:"Aruban florin"}},[a._v("AWG - Aruban florin")]),t("option",{attrs:{value:"AZN",label:"Azerbaijani manat"}},[a._v("AZN - Azerbaijani manat")]),t("option",{attrs:{value:"BAM",label:"Bosnia and Herzegovina convertible mark"}},[a._v("BAM - Bosnia and Herzegovina convertible mark")]),t("option",{attrs:{value:"BBD",label:"Barbadian dollar"}},[a._v("BBD - Barbadian dollar")]),t("option",{attrs:{value:"BDT",label:"Bangladeshi taka"}},[a._v("BDT - Bangladeshi taka")]),t("option",{attrs:{value:"BGN",label:"Bulgarian lev"}},[a._v("BGN - Bulgarian lev")]),t("option",{attrs:{value:"BHD",label:"Bahraini dinar"}},[a._v("BHD - Bahraini dinar")]),t("option",{attrs:{value:"BIF",label:"Burundian franc"}},[a._v("BIF - Burundian franc")]),t("option",{attrs:{value:"BMD",label:"Bermudian dollar"}},[a._v("BMD - Bermudian dollar")]),t("option",{attrs:{value:"BND",label:"Brunei dollar"}},[a._v("BND - Brunei dollar")]),t("option",{attrs:{value:"BOB",label:"Bolivian boliviano"}},[a._v("BOB - Bolivian boliviano")]),t("option",{attrs:{value:"BRL",label:"Brazilian real"}},[a._v("BRL - Brazilian real")]),t("option",{attrs:{value:"BSD",label:"Bahamian dollar"}},[a._v("BSD - Bahamian dollar")]),t("option",{attrs:{value:"BTN",label:"Bhutanese ngultrum"}},[a._v("BTN - Bhutanese ngultrum")]),t("option",{attrs:{value:"BWP",label:"Botswana pula"}},[a._v("BWP - Botswana pula")]),t("option",{attrs:{value:"BYN",label:"Belarusian ruble"}},[a._v("BYN - Belarusian ruble")]),t("option",{attrs:{value:"BZD",label:"Belize dollar"}},[a._v("BZD - Belize dollar")]),t("option",{attrs:{value:"CAD",label:"Canadian dollar"}},[a._v("CAD - Canadian dollar")]),t("option",{attrs:{value:"CDF",label:"Congolese franc"}},[a._v("CDF - Congolese franc")]),t("option",{attrs:{value:"CHF",label:"Swiss franc"}},[a._v("CHF - Swiss franc")]),t("option",{attrs:{value:"CLP",label:"Chilean peso"}},[a._v("CLP - Chilean peso")]),t("option",{attrs:{value:"CNY",label:"Chinese yuan"}},[a._v("CNY - Chinese yuan")]),t("option",{attrs:{value:"COP",label:"Colombian peso"}},[a._v("COP - Colombian peso")]),t("option",{attrs:{value:"CRC",label:"Costa Rican colón"}},[a._v("CRC - Costa Rican colón")]),t("option",{attrs:{value:"CUC",label:"Cuban convertible peso"}},[a._v("CUC - Cuban convertible peso")]),t("option",{attrs:{value:"CUP",label:"Cuban peso"}},[a._v("CUP - Cuban peso")]),t("option",{attrs:{value:"CVE",label:"Cape Verdean escudo"}},[a._v("CVE - Cape Verdean escudo")]),t("option",{attrs:{value:"CZK",label:"Czech koruna"}},[a._v("CZK - Czech koruna")]),t("option",{attrs:{value:"DJF",label:"Djiboutian franc"}},[a._v("DJF - Djiboutian franc")]),t("option",{attrs:{value:"DKK",label:"Danish krone"}},[a._v("DKK - Danish krone")]),t("option",{attrs:{value:"DOP",label:"Dominican peso"}},[a._v("DOP - Dominican peso")]),t("option",{attrs:{value:"DZD",label:"Algerian dinar"}},[a._v("DZD - Algerian dinar")]),t("option",{attrs:{value:"EGP",label:"Egyptian pound"}},[a._v("EGP - Egyptian pound")]),t("option",{attrs:{value:"ERN",label:"Eritrean nakfa"}},[a._v("ERN - Eritrean nakfa")]),t("option",{attrs:{value:"ETB",label:"Ethiopian birr"}},[a._v("ETB - Ethiopian birr")]),t("option",{attrs:{value:"EUR",label:"EURO"}},[a._v("EUR - EURO")]),t("option",{attrs:{value:"FJD",label:"Fijian dollar"}},[a._v("FJD - Fijian dollar")]),t("option",{attrs:{value:"FKP",label:"Falkland Islands pound"}},[a._v("FKP - Falkland Islands pound")]),t("option",{attrs:{value:"GBP",label:"British pound"}},[a._v("GBP - British pound")]),t("option",{attrs:{value:"GEL",label:"Georgian lari"}},[a._v("GEL - Georgian lari")]),t("option",{attrs:{value:"GGP",label:"Guernsey pound"}},[a._v("GGP - Guernsey pound")]),t("option",{attrs:{value:"GHS",label:"Ghanaian cedi"}},[a._v("GHS - Ghanaian cedi")]),t("option",{attrs:{value:"GIP",label:"Gibraltar pound"}},[a._v("GIP - Gibraltar pound")]),t("option",{attrs:{value:"GMD",label:"Gambian dalasi"}},[a._v("GMD - Gambian dalasi")]),t("option",{attrs:{value:"GNF",label:"Guinean franc"}},[a._v("GNF - Guinean franc")]),t("option",{attrs:{value:"GTQ",label:"Guatemalan quetzal"}},[a._v("GTQ - Guatemalan quetzal")]),t("option",{attrs:{value:"GYD",label:"Guyanese dollar"}},[a._v("GYD - Guyanese dollar")]),t("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),t("option",{attrs:{value:"HNL",label:"Honduran lempira"}},[a._v("HNL - Honduran lempira")]),t("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),t("option",{attrs:{value:"HRK",label:"Croatian kuna"}},[a._v("HRK - Croatian kuna")]),t("option",{attrs:{value:"HTG",label:"Haitian gourde"}},[a._v("HTG - Haitian gourde")]),t("option",{attrs:{value:"HUF",label:"Hungarian forint"}},[a._v("HUF - Hungarian forint")]),t("option",{attrs:{value:"IDR",label:"Indonesian rupiah"}},[a._v("IDR - Indonesian rupiah")]),t("option",{attrs:{value:"ILS",label:"Israeli new shekel"}},[a._v("ILS - Israeli new shekel")]),t("option",{attrs:{value:"IMP",label:"Manx pound"}},[a._v("IMP - Manx pound")]),t("option",{attrs:{value:"INR",label:"Indian rupee"}},[a._v("INR - Indian rupee")]),t("option",{attrs:{value:"IQD",label:"Iraqi dinar"}},[a._v("IQD - Iraqi dinar")]),t("option",{attrs:{value:"IRR",label:"Iranian rial"}},[a._v("IRR - Iranian rial")]),t("option",{attrs:{value:"ISK",label:"Icelandic króna"}},[a._v("ISK - Icelandic króna")]),t("option",{attrs:{value:"JEP",label:"Jersey pound"}},[a._v("JEP - Jersey pound")]),t("option",{attrs:{value:"JMD",label:"Jamaican dollar"}},[a._v("JMD - Jamaican dollar")]),t("option",{attrs:{value:"JOD",label:"Jordanian dinar"}},[a._v("JOD - Jordanian dinar")]),t("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),t("option",{attrs:{value:"KES",label:"Kenyan shilling"}},[a._v("KES - Kenyan shilling")]),t("option",{attrs:{value:"KGS",label:"Kyrgyzstani som"}},[a._v("KGS - Kyrgyzstani som")]),t("option",{attrs:{value:"KHR",label:"Cambodian riel"}},[a._v("KHR - Cambodian riel")]),t("option",{attrs:{value:"KID",label:"Kiribati dollar"}},[a._v("KID - Kiribati dollar")]),t("option",{attrs:{value:"KMF",label:"Comorian franc"}},[a._v("KMF - Comorian franc")]),t("option",{attrs:{value:"KPW",label:"North Korean won"}},[a._v("KPW - North Korean won")]),t("option",{attrs:{value:"KRW",label:"South Korean won"}},[a._v("KRW - South Korean won")]),t("option",{attrs:{value:"KWD",label:"Kuwaiti dinar"}},[a._v("KWD - Kuwaiti dinar")]),t("option",{attrs:{value:"KYD",label:"Cayman Islands dollar"}},[a._v("KYD - Cayman Islands dollar")]),t("option",{attrs:{value:"KZT",label:"Kazakhstani tenge"}},[a._v("KZT - Kazakhstani tenge")]),t("option",{attrs:{value:"LAK",label:"Lao kip"}},[a._v("LAK - Lao kip")]),t("option",{attrs:{value:"LBP",label:"Lebanese pound"}},[a._v("LBP - Lebanese pound")]),t("option",{attrs:{value:"LKR",label:"Sri Lankan rupee"}},[a._v("LKR - Sri Lankan rupee")]),t("option",{attrs:{value:"LRD",label:"Liberian dollar"}},[a._v("LRD - Liberian dollar")]),t("option",{attrs:{value:"LSL",label:"Lesotho loti"}},[a._v("LSL - Lesotho loti")]),t("option",{attrs:{value:"LYD",label:"Libyan dinar"}},[a._v("LYD - Libyan dinar")]),t("option",{attrs:{value:"MAD",label:"Moroccan dirham"}},[a._v("MAD - Moroccan dirham")]),t("option",{attrs:{value:"MDL",label:"Moldovan leu"}},[a._v("MDL - Moldovan leu")]),t("option",{attrs:{value:"MGA",label:"Malagasy ariary"}},[a._v("MGA - Malagasy ariary")]),t("option",{attrs:{value:"MKD",label:"Macedonian denar"}},[a._v("MKD - Macedonian denar")]),t("option",{attrs:{value:"MMK",label:"Burmese kyat"}},[a._v("MMK - Burmese kyat")]),t("option",{attrs:{value:"MNT",label:"Mongolian tögrög"}},[a._v("MNT - Mongolian tögrög")]),t("option",{attrs:{value:"MOP",label:"Macanese pataca"}},[a._v("MOP - Macanese pataca")]),t("option",{attrs:{value:"MRU",label:"Mauritanian ouguiya"}},[a._v("MRU - Mauritanian ouguiya")]),t("option",{attrs:{value:"MUR",label:"Mauritian rupee"}},[a._v("MUR - Mauritian rupee")]),t("option",{attrs:{value:"MVR",label:"Maldivian rufiyaa"}},[a._v("MVR - Maldivian rufiyaa")]),t("option",{attrs:{value:"MWK",label:"Malawian kwacha"}},[a._v("MWK - Malawian kwacha")]),t("option",{attrs:{value:"MXN",label:"Mexican peso"}},[a._v("MXN - Mexican peso")]),t("option",{attrs:{value:"MYR",label:"Malaysian ringgit"}},[a._v("MYR - Malaysian ringgit")]),t("option",{attrs:{value:"MZN",label:"Mozambican metical"}},[a._v("MZN - Mozambican metical")]),t("option",{attrs:{value:"NAD",label:"Namibian dollar"}},[a._v("NAD - Namibian dollar")]),t("option",{attrs:{value:"NGN",label:"Nigerian naira"}},[a._v("NGN - Nigerian naira")]),t("option",{attrs:{value:"NIO",label:"Nicaraguan córdoba"}},[a._v("NIO - Nicaraguan córdoba")]),t("option",{attrs:{value:"NOK",label:"Norwegian krone"}},[a._v("NOK - Norwegian krone")]),t("option",{attrs:{value:"NPR",label:"Nepalese rupee"}},[a._v("NPR - Nepalese rupee")]),t("option",{attrs:{value:"NZD",label:"New Zealand dollar"}},[a._v("NZD - New Zealand dollar")]),t("option",{attrs:{value:"OMR",label:"Omani rial"}},[a._v("OMR - Omani rial")]),t("option",{attrs:{value:"PAB",label:"Panamanian balboa"}},[a._v("PAB - Panamanian balboa")]),t("option",{attrs:{value:"PEN",label:"Peruvian sol"}},[a._v("PEN - Peruvian sol")]),t("option",{attrs:{value:"PGK",label:"Papua New Guinean kina"}},[a._v("PGK - Papua New Guinean kina")]),t("option",{attrs:{value:"PHP",label:"Philippine peso"}},[a._v("PHP - Philippine peso")]),t("option",{attrs:{value:"PKR",label:"Pakistani rupee"}},[a._v("PKR - Pakistani rupee")]),t("option",{attrs:{value:"PLN",label:"Polish złoty"}},[a._v("PLN - Polish złoty")]),t("option",{attrs:{value:"PRB",label:"Transnistrian ruble"}},[a._v("PRB - Transnistrian ruble")]),t("option",{attrs:{value:"PYG",label:"Paraguayan guaraní"}},[a._v("PYG - Paraguayan guaraní")]),t("option",{attrs:{value:"QAR",label:"Qatari riyal"}},[a._v("QAR - Qatari riyal")]),t("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),t("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),t("option",{attrs:{value:"RSD",label:"Serbian dinar"}},[a._v("RSD - Serbian dinar")]),t("option",{attrs:{value:"RUB",label:"Russian ruble"}},[a._v("RUB - Russian ruble")]),t("option",{attrs:{value:"RWF",label:"Rwandan franc"}},[a._v("RWF - Rwandan franc")]),t("option",{attrs:{value:"SAR",label:"Saudi riyal"}},[a._v("SAR - Saudi riyal")]),t("option",{attrs:{value:"SEK",label:"Swedish krona"}},[a._v("SEK - Swedish krona")]),t("option",{attrs:{value:"SGD",label:"Singapore dollar"}},[a._v("SGD - Singapore dollar")]),t("option",{attrs:{value:"SHP",label:"Saint Helena pound"}},[a._v("SHP - Saint Helena pound")]),t("option",{attrs:{value:"SLL",label:"Sierra Leonean leone"}},[a._v("SLL - Sierra Leonean leone")]),t("option",{attrs:{value:"SLS",label:"Somaliland shilling"}},[a._v("SLS - Somaliland shilling")]),t("option",{attrs:{value:"SOS",label:"Somali shilling"}},[a._v("SOS - Somali shilling")]),t("option",{attrs:{value:"SRD",label:"Surinamese dollar"}},[a._v("SRD - Surinamese dollar")]),t("option",{attrs:{value:"SSP",label:"South Sudanese pound"}},[a._v("SSP - South Sudanese pound")]),t("option",{attrs:{value:"STN",label:"São Tomé and Príncipe dobra"}},[a._v("STN - São Tomé and Príncipe dobra")]),t("option",{attrs:{value:"SYP",label:"Syrian pound"}},[a._v("SYP - Syrian pound")]),t("option",{attrs:{value:"SZL",label:"Swazi lilangeni"}},[a._v("SZL - Swazi lilangeni")]),t("option",{attrs:{value:"THB",label:"Thai baht"}},[a._v("THB - Thai baht")]),t("option",{attrs:{value:"TJS",label:"Tajikistani somoni"}},[a._v("TJS - Tajikistani somoni")]),t("option",{attrs:{value:"TMT",label:"Turkmenistan manat"}},[a._v("TMT - Turkmenistan manat")]),t("option",{attrs:{value:"TND",label:"Tunisian dinar"}},[a._v("TND - Tunisian dinar")]),t("option",{attrs:{value:"TOP",label:"Tongan paʻanga"}},[a._v("TOP - Tongan paʻanga")]),t("option",{attrs:{value:"TRY",label:"Turkish lira"}},[a._v("TRY - Turkish lira")]),t("option",{attrs:{value:"TTD",label:"Trinidad and Tobago dollar"}},[a._v("TTD - Trinidad and Tobago dollar")]),t("option",{attrs:{value:"TVD",label:"Tuvaluan dollar"}},[a._v("TVD - Tuvaluan dollar")]),t("option",{attrs:{value:"TWD",label:"New Taiwan dollar"}},[a._v("TWD - New Taiwan dollar")]),t("option",{attrs:{value:"TZS",label:"Tanzanian shilling"}},[a._v("TZS - Tanzanian shilling")]),t("option",{attrs:{value:"UAH",label:"Ukrainian hryvnia"}},[a._v("UAH - Ukrainian hryvnia")]),t("option",{attrs:{value:"UGX",label:"Ugandan shilling"}},[a._v("UGX - Ugandan shilling")]),t("option",{attrs:{value:"USD",label:"United States dollar"}},[a._v("USD - United States dollar")]),t("option",{attrs:{value:"UYU",label:"Uruguayan peso"}},[a._v("UYU - Uruguayan peso")]),t("option",{attrs:{value:"UZS",label:"Uzbekistani soʻm"}},[a._v("UZS - Uzbekistani soʻm")]),t("option",{attrs:{value:"VES",label:"Venezuelan bolívar soberano"}},[a._v("VES - Venezuelan bolívar soberano")]),t("option",{attrs:{value:"VND",label:"Vietnamese đồng"}},[a._v("VND - Vietnamese đồng")]),t("option",{attrs:{value:"VUV",label:"Vanuatu vatu"}},[a._v("VUV - Vanuatu vatu")]),t("option",{attrs:{value:"WST",label:"Samoan tālā"}},[a._v("WST - Samoan tālā")]),t("option",{attrs:{value:"XAF",label:"Central African CFA franc"}},[a._v("XAF - Central African CFA franc")]),t("option",{attrs:{value:"XCD",label:"Eastern Caribbean dollar"}},[a._v("XCD - Eastern Caribbean dollar")]),t("option",{attrs:{value:"XOF",label:"West African CFA franc"}},[a._v("XOF - West African CFA franc")]),t("option",{attrs:{value:"XPF",label:"CFP franc"}},[a._v("XPF - CFP franc")]),t("option",{attrs:{value:"ZAR",label:"South African rand"}},[a._v("ZAR - South African rand")]),t("option",{attrs:{value:"ZMW",label:"Zambian kwacha"}},[a._v("ZMW - Zambian kwacha")]),t("option",{attrs:{value:"ZWB",label:"Zimbabwean bonds"}},[a._v("ZWB - Zimbabwean bonds")])]),t("label",{attrs:{for:"base"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"base"}],attrs:{type:"text",id:"base"},domProps:{value:a.base},on:{input:function(e){e.target.composing||(a.base=e.target.value)}}})])])])])]),t("div",{staticClass:"container"},[t("div",{staticClass:"currency"},[t("p",[t("label",{attrs:{for:"destinationCurrency"}},[a._v(" Destination Currency "),t("select",{directives:[{name:"model",rawName:"v-model",value:a.destinationCurrency,expression:"destinationCurrency"}],attrs:{id:"destinationCurrency"},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.destinationCurrency=e.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"USD",selected:"selected",label:"US dollar"}},[a._v("USD - US dollar")]),t("option",{attrs:{value:"EUR",label:"Euro"}},[a._v("EUR - Euro")]),t("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),t("option",{attrs:{value:"GBP",label:"Pound sterling"}},[a._v("GBP - Pound sterling")]),t("option",{attrs:{disabled:""}},[a._v("──────────")]),t("option",{attrs:{value:"AED",label:"United Arab Emirates dirham"}},[a._v("AED - United Arab Emirates dirham")]),t("option",{attrs:{value:"AFN",label:"Afghan afghani"}},[a._v("AFN - Afghan afghani")]),t("option",{attrs:{value:"ALL",label:"Albanian lek"}},[a._v("ALL - Albanian lek")]),t("option",{attrs:{value:"AMD",label:"Armenian dram"}},[a._v("AMD - Armenian dram")]),t("option",{attrs:{value:"ANG",label:"Netherlands Antillean guilder"}},[a._v("ANG - Netherlands Antillean guilder")]),t("option",{attrs:{value:"AOA",label:"Angolan kwanza"}},[a._v("AOA - Angolan kwanza")]),t("option",{attrs:{value:"ARS",label:"Argentine peso"}},[a._v("ARS - Argentine peso")]),t("option",{attrs:{value:"AUD",label:"Australian dollar"}},[a._v("AUD - Australian dollar")]),t("option",{attrs:{value:"AWG",label:"Aruban florin"}},[a._v("AWG - Aruban florin")]),t("option",{attrs:{value:"AZN",label:"Azerbaijani manat"}},[a._v("AZN - Azerbaijani manat")]),t("option",{attrs:{value:"BAM",label:"Bosnia and Herzegovina convertible mark"}},[a._v("BAM - Bosnia and Herzegovina convertible mark")]),t("option",{attrs:{value:"BBD",label:"Barbadian dollar"}},[a._v("BBD - Barbadian dollar")]),t("option",{attrs:{value:"BDT",label:"Bangladeshi taka"}},[a._v("BDT - Bangladeshi taka")]),t("option",{attrs:{value:"BGN",label:"Bulgarian lev"}},[a._v("BGN - Bulgarian lev")]),t("option",{attrs:{value:"BHD",label:"Bahraini dinar"}},[a._v("BHD - Bahraini dinar")]),t("option",{attrs:{value:"BIF",label:"Burundian franc"}},[a._v("BIF - Burundian franc")]),t("option",{attrs:{value:"BMD",label:"Bermudian dollar"}},[a._v("BMD - Bermudian dollar")]),t("option",{attrs:{value:"BND",label:"Brunei dollar"}},[a._v("BND - Brunei dollar")]),t("option",{attrs:{value:"BOB",label:"Bolivian boliviano"}},[a._v("BOB - Bolivian boliviano")]),t("option",{attrs:{value:"BRL",label:"Brazilian real"}},[a._v("BRL - Brazilian real")]),t("option",{attrs:{value:"BSD",label:"Bahamian dollar"}},[a._v("BSD - Bahamian dollar")]),t("option",{attrs:{value:"BTN",label:"Bhutanese ngultrum"}},[a._v("BTN - Bhutanese ngultrum")]),t("option",{attrs:{value:"BWP",label:"Botswana pula"}},[a._v("BWP - Botswana pula")]),t("option",{attrs:{value:"BYN",label:"Belarusian ruble"}},[a._v("BYN - Belarusian ruble")]),t("option",{attrs:{value:"BZD",label:"Belize dollar"}},[a._v("BZD - Belize dollar")]),t("option",{attrs:{value:"CAD",label:"Canadian dollar"}},[a._v("CAD - Canadian dollar")]),t("option",{attrs:{value:"CDF",label:"Congolese franc"}},[a._v("CDF - Congolese franc")]),t("option",{attrs:{value:"CHF",label:"Swiss franc"}},[a._v("CHF - Swiss franc")]),t("option",{attrs:{value:"CLP",label:"Chilean peso"}},[a._v("CLP - Chilean peso")]),t("option",{attrs:{value:"CNY",label:"Chinese yuan"}},[a._v("CNY - Chinese yuan")]),t("option",{attrs:{value:"COP",label:"Colombian peso"}},[a._v("COP - Colombian peso")]),t("option",{attrs:{value:"CRC",label:"Costa Rican colón"}},[a._v("CRC - Costa Rican colón")]),t("option",{attrs:{value:"CUC",label:"Cuban convertible peso"}},[a._v("CUC - Cuban convertible peso")]),t("option",{attrs:{value:"CUP",label:"Cuban peso"}},[a._v("CUP - Cuban peso")]),t("option",{attrs:{value:"CVE",label:"Cape Verdean escudo"}},[a._v("CVE - Cape Verdean escudo")]),t("option",{attrs:{value:"CZK",label:"Czech koruna"}},[a._v("CZK - Czech koruna")]),t("option",{attrs:{value:"DJF",label:"Djiboutian franc"}},[a._v("DJF - Djiboutian franc")]),t("option",{attrs:{value:"DKK",label:"Danish krone"}},[a._v("DKK - Danish krone")]),t("option",{attrs:{value:"DOP",label:"Dominican peso"}},[a._v("DOP - Dominican peso")]),t("option",{attrs:{value:"DZD",label:"Algerian dinar"}},[a._v("DZD - Algerian dinar")]),t("option",{attrs:{value:"EGP",label:"Egyptian pound"}},[a._v("EGP - Egyptian pound")]),t("option",{attrs:{value:"ERN",label:"Eritrean nakfa"}},[a._v("ERN - Eritrean nakfa")]),t("option",{attrs:{value:"ETB",label:"Ethiopian birr"}},[a._v("ETB - Ethiopian birr")]),t("option",{attrs:{value:"EUR",label:"EURO"}},[a._v("EUR - EURO")]),t("option",{attrs:{value:"FJD",label:"Fijian dollar"}},[a._v("FJD - Fijian dollar")]),t("option",{attrs:{value:"FKP",label:"Falkland Islands pound"}},[a._v("FKP - Falkland Islands pound")]),t("option",{attrs:{value:"GBP",label:"British pound"}},[a._v("GBP - British pound")]),t("option",{attrs:{value:"GEL",label:"Georgian lari"}},[a._v("GEL - Georgian lari")]),t("option",{attrs:{value:"GGP",label:"Guernsey pound"}},[a._v("GGP - Guernsey pound")]),t("option",{attrs:{value:"GHS",label:"Ghanaian cedi"}},[a._v("GHS - Ghanaian cedi")]),t("option",{attrs:{value:"GIP",label:"Gibraltar pound"}},[a._v("GIP - Gibraltar pound")]),t("option",{attrs:{value:"GMD",label:"Gambian dalasi"}},[a._v("GMD - Gambian dalasi")]),t("option",{attrs:{value:"GNF",label:"Guinean franc"}},[a._v("GNF - Guinean franc")]),t("option",{attrs:{value:"GTQ",label:"Guatemalan quetzal"}},[a._v("GTQ - Guatemalan quetzal")]),t("option",{attrs:{value:"GYD",label:"Guyanese dollar"}},[a._v("GYD - Guyanese dollar")]),t("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),t("option",{attrs:{value:"HNL",label:"Honduran lempira"}},[a._v("HNL - Honduran lempira")]),t("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),t("option",{attrs:{value:"HRK",label:"Croatian kuna"}},[a._v("HRK - Croatian kuna")]),t("option",{attrs:{value:"HTG",label:"Haitian gourde"}},[a._v("HTG - Haitian gourde")]),t("option",{attrs:{value:"HUF",label:"Hungarian forint"}},[a._v("HUF - Hungarian forint")]),t("option",{attrs:{value:"IDR",label:"Indonesian rupiah"}},[a._v("IDR - Indonesian rupiah")]),t("option",{attrs:{value:"ILS",label:"Israeli new shekel"}},[a._v("ILS - Israeli new shekel")]),t("option",{attrs:{value:"IMP",label:"Manx pound"}},[a._v("IMP - Manx pound")]),t("option",{attrs:{value:"INR",label:"Indian rupee"}},[a._v("INR - Indian rupee")]),t("option",{attrs:{value:"IQD",label:"Iraqi dinar"}},[a._v("IQD - Iraqi dinar")]),t("option",{attrs:{value:"IRR",label:"Iranian rial"}},[a._v("IRR - Iranian rial")]),t("option",{attrs:{value:"ISK",label:"Icelandic króna"}},[a._v("ISK - Icelandic króna")]),t("option",{attrs:{value:"JEP",label:"Jersey pound"}},[a._v("JEP - Jersey pound")]),t("option",{attrs:{value:"JMD",label:"Jamaican dollar"}},[a._v("JMD - Jamaican dollar")]),t("option",{attrs:{value:"JOD",label:"Jordanian dinar"}},[a._v("JOD - Jordanian dinar")]),t("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),t("option",{attrs:{value:"KES",label:"Kenyan shilling"}},[a._v("KES - Kenyan shilling")]),t("option",{attrs:{value:"KGS",label:"Kyrgyzstani som"}},[a._v("KGS - Kyrgyzstani som")]),t("option",{attrs:{value:"KHR",label:"Cambodian riel"}},[a._v("KHR - Cambodian riel")]),t("option",{attrs:{value:"KID",label:"Kiribati dollar"}},[a._v("KID - Kiribati dollar")]),t("option",{attrs:{value:"KMF",label:"Comorian franc"}},[a._v("KMF - Comorian franc")]),t("option",{attrs:{value:"KPW",label:"North Korean won"}},[a._v("KPW - North Korean won")]),t("option",{attrs:{value:"KRW",label:"South Korean won"}},[a._v("KRW - South Korean won")]),t("option",{attrs:{value:"KWD",label:"Kuwaiti dinar"}},[a._v("KWD - Kuwaiti dinar")]),t("option",{attrs:{value:"KYD",label:"Cayman Islands dollar"}},[a._v("KYD - Cayman Islands dollar")]),t("option",{attrs:{value:"KZT",label:"Kazakhstani tenge"}},[a._v("KZT - Kazakhstani tenge")]),t("option",{attrs:{value:"LAK",label:"Lao kip"}},[a._v("LAK - Lao kip")]),t("option",{attrs:{value:"LBP",label:"Lebanese pound"}},[a._v("LBP - Lebanese pound")]),t("option",{attrs:{value:"LKR",label:"Sri Lankan rupee"}},[a._v("LKR - Sri Lankan rupee")]),t("option",{attrs:{value:"LRD",label:"Liberian dollar"}},[a._v("LRD - Liberian dollar")]),t("option",{attrs:{value:"LSL",label:"Lesotho loti"}},[a._v("LSL - Lesotho loti")]),t("option",{attrs:{value:"LYD",label:"Libyan dinar"}},[a._v("LYD - Libyan dinar")]),t("option",{attrs:{value:"MAD",label:"Moroccan dirham"}},[a._v("MAD - Moroccan dirham")]),t("option",{attrs:{value:"MDL",label:"Moldovan leu"}},[a._v("MDL - Moldovan leu")]),t("option",{attrs:{value:"MGA",label:"Malagasy ariary"}},[a._v("MGA - Malagasy ariary")]),t("option",{attrs:{value:"MKD",label:"Macedonian denar"}},[a._v("MKD - Macedonian denar")]),t("option",{attrs:{value:"MMK",label:"Burmese kyat"}},[a._v("MMK - Burmese kyat")]),t("option",{attrs:{value:"MNT",label:"Mongolian tögrög"}},[a._v("MNT - Mongolian tögrög")]),t("option",{attrs:{value:"MOP",label:"Macanese pataca"}},[a._v("MOP - Macanese pataca")]),t("option",{attrs:{value:"MRU",label:"Mauritanian ouguiya"}},[a._v("MRU - Mauritanian ouguiya")]),t("option",{attrs:{value:"MUR",label:"Mauritian rupee"}},[a._v("MUR - Mauritian rupee")]),t("option",{attrs:{value:"MVR",label:"Maldivian rufiyaa"}},[a._v("MVR - Maldivian rufiyaa")]),t("option",{attrs:{value:"MWK",label:"Malawian kwacha"}},[a._v("MWK - Malawian kwacha")]),t("option",{attrs:{value:"MXN",label:"Mexican peso"}},[a._v("MXN - Mexican peso")]),t("option",{attrs:{value:"MYR",label:"Malaysian ringgit"}},[a._v("MYR - Malaysian ringgit")]),t("option",{attrs:{value:"MZN",label:"Mozambican metical"}},[a._v("MZN - Mozambican metical")]),t("option",{attrs:{value:"NAD",label:"Namibian dollar"}},[a._v("NAD - Namibian dollar")]),t("option",{attrs:{value:"NGN",label:"Nigerian naira"}},[a._v("NGN - Nigerian naira")]),t("option",{attrs:{value:"NIO",label:"Nicaraguan córdoba"}},[a._v("NIO - Nicaraguan córdoba")]),t("option",{attrs:{value:"NOK",label:"Norwegian krone"}},[a._v("NOK - Norwegian krone")]),t("option",{attrs:{value:"NPR",label:"Nepalese rupee"}},[a._v("NPR - Nepalese rupee")]),t("option",{attrs:{value:"NZD",label:"New Zealand dollar"}},[a._v("NZD - New Zealand dollar")]),t("option",{attrs:{value:"OMR",label:"Omani rial"}},[a._v("OMR - Omani rial")]),t("option",{attrs:{value:"PAB",label:"Panamanian balboa"}},[a._v("PAB - Panamanian balboa")]),t("option",{attrs:{value:"PEN",label:"Peruvian sol"}},[a._v("PEN - Peruvian sol")]),t("option",{attrs:{value:"PGK",label:"Papua New Guinean kina"}},[a._v("PGK - Papua New Guinean kina")]),t("option",{attrs:{value:"PHP",label:"Philippine peso"}},[a._v("PHP - Philippine peso")]),t("option",{attrs:{value:"PKR",label:"Pakistani rupee"}},[a._v("PKR - Pakistani rupee")]),t("option",{attrs:{value:"PLN",label:"Polish złoty"}},[a._v("PLN - Polish złoty")]),t("option",{attrs:{value:"PRB",label:"Transnistrian ruble"}},[a._v("PRB - Transnistrian ruble")]),t("option",{attrs:{value:"PYG",label:"Paraguayan guaraní"}},[a._v("PYG - Paraguayan guaraní")]),t("option",{attrs:{value:"QAR",label:"Qatari riyal"}},[a._v("QAR - Qatari riyal")]),t("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),t("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),t("option",{attrs:{value:"RSD",label:"Serbian dinar"}},[a._v("RSD - Serbian dinar")]),t("option",{attrs:{value:"RUB",label:"Russian ruble"}},[a._v("RUB - Russian ruble")]),t("option",{attrs:{value:"RWF",label:"Rwandan franc"}},[a._v("RWF - Rwandan franc")]),t("option",{attrs:{value:"SAR",label:"Saudi riyal"}},[a._v("SAR - Saudi riyal")]),t("option",{attrs:{value:"SEK",label:"Swedish krona"}},[a._v("SEK - Swedish krona")]),t("option",{attrs:{value:"SGD",label:"Singapore dollar"}},[a._v("SGD - Singapore dollar")]),t("option",{attrs:{value:"SHP",label:"Saint Helena pound"}},[a._v("SHP - Saint Helena pound")]),t("option",{attrs:{value:"SLL",label:"Sierra Leonean leone"}},[a._v("SLL - Sierra Leonean leone")]),t("option",{attrs:{value:"SLS",label:"Somaliland shilling"}},[a._v("SLS - Somaliland shilling")]),t("option",{attrs:{value:"SOS",label:"Somali shilling"}},[a._v("SOS - Somali shilling")]),t("option",{attrs:{value:"SRD",label:"Surinamese dollar"}},[a._v("SRD - Surinamese dollar")]),t("option",{attrs:{value:"SSP",label:"South Sudanese pound"}},[a._v("SSP - South Sudanese pound")]),t("option",{attrs:{value:"STN",label:"São Tomé and Príncipe dobra"}},[a._v("STN - São Tomé and Príncipe dobra")]),t("option",{attrs:{value:"SYP",label:"Syrian pound"}},[a._v("SYP - Syrian pound")]),t("option",{attrs:{value:"SZL",label:"Swazi lilangeni"}},[a._v("SZL - Swazi lilangeni")]),t("option",{attrs:{value:"THB",label:"Thai baht"}},[a._v("THB - Thai baht")]),t("option",{attrs:{value:"TJS",label:"Tajikistani somoni"}},[a._v("TJS - Tajikistani somoni")]),t("option",{attrs:{value:"TMT",label:"Turkmenistan manat"}},[a._v("TMT - Turkmenistan manat")]),t("option",{attrs:{value:"TND",label:"Tunisian dinar"}},[a._v("TND - Tunisian dinar")]),t("option",{attrs:{value:"TOP",label:"Tongan paʻanga"}},[a._v("TOP - Tongan paʻanga")]),t("option",{attrs:{value:"TRY",label:"Turkish lira"}},[a._v("TRY - Turkish lira")]),t("option",{attrs:{value:"TTD",label:"Trinidad and Tobago dollar"}},[a._v("TTD - Trinidad and Tobago dollar")]),t("option",{attrs:{value:"TVD",label:"Tuvaluan dollar"}},[a._v("TVD - Tuvaluan dollar")]),t("option",{attrs:{value:"TWD",label:"New Taiwan dollar"}},[a._v("TWD - New Taiwan dollar")]),t("option",{attrs:{value:"TZS",label:"Tanzanian shilling"}},[a._v("TZS - Tanzanian shilling")]),t("option",{attrs:{value:"UAH",label:"Ukrainian hryvnia"}},[a._v("UAH - Ukrainian hryvnia")]),t("option",{attrs:{value:"UGX",label:"Ugandan shilling"}},[a._v("UGX - Ugandan shilling")]),t("option",{attrs:{value:"USD",label:"United States dollar"}},[a._v("USD - United States dollar")]),t("option",{attrs:{value:"UYU",label:"Uruguayan peso"}},[a._v("UYU - Uruguayan peso")]),t("option",{attrs:{value:"UZS",label:"Uzbekistani soʻm"}},[a._v("UZS - Uzbekistani soʻm")]),t("option",{attrs:{value:"VES",label:"Venezuelan bolívar soberano"}},[a._v("VES - Venezuelan bolívar soberano")]),t("option",{attrs:{value:"VND",label:"Vietnamese đồng"}},[a._v("VND - Vietnamese đồng")]),t("option",{attrs:{value:"VUV",label:"Vanuatu vatu"}},[a._v("VUV - Vanuatu vatu")]),t("option",{attrs:{value:"WST",label:"Samoan tālā"}},[a._v("WST - Samoan tālā")]),t("option",{attrs:{value:"XAF",label:"Central African CFA franc"}},[a._v("XAF - Central African CFA franc")]),t("option",{attrs:{value:"XCD",label:"Eastern Caribbean dollar"}},[a._v("XCD - Eastern Caribbean dollar")]),t("option",{attrs:{value:"XOF",label:"West African CFA franc"}},[a._v("XOF - West African CFA franc")]),t("option",{attrs:{value:"XPF",label:"CFP franc"}},[a._v("XPF - CFP franc")]),t("option",{attrs:{value:"ZAR",label:"South African rand"}},[a._v("ZAR - South African rand")]),t("option",{attrs:{value:"ZMW",label:"Zambian kwacha"}},[a._v("ZMW - Zambian kwacha")]),t("option",{attrs:{value:"ZWB",label:"Zimbabwean bonds"}},[a._v("ZWB - Zimbabwean bonds")])]),t("label",{attrs:{for:"destinationCurrency"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.destinationCurrency,expression:"destinationCurrency"}],attrs:{type:"text",id:"destinationCurrency"},domProps:{value:a.destinationCurrency},on:{input:function(e){e.target.composing||(a.destinationCurrency=e.target.value)}}})])])])])]),a._m(1)])]),a.showSpinner?t("spinner"):a._e(),t("div",{staticClass:"results-container"},[a.results?t("div",[a._v(a._s(this.total)+" "+a._s(this.base)+" = "+a._s(this.total*this.results.rates[this.destinationCurrency])+" "+a._s(this.destinationCurrency))]):a._e()])],1)])},b=[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"CurrencyConverter"},[n("h1",[a._v("XchangeCalculator")]),n("img",{attrs:{alt:"CurrencyConverter logo",src:t("3c4b")}})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",[t("input",{attrs:{type:"submit",value:"Submit"}})])}],d=t("bc3a"),_=t.n(d),c=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},m=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("h2",[a._v("Loading...")]),t("div",{staticClass:"sk-folding-cube"},[t("div",{staticClass:"sk-cube1 sk-cube"}),t("div",{staticClass:"sk-cube2 sk-cube"}),t("div",{staticClass:"sk-cube4 sk-cube"}),t("div",{staticClass:"sk-cube3 sk-cube"})])])}],g={name:"CubeSpinner"},h=g,S=(t("9d0d"),Object(i["a"])(h,c,m,!1,null,"8de00f74",null)),D=S.exports;t("9ddc");var f={name:"CurrencyConverter",data:function(){return{results:null,errors:[],base:"",destinationCurrency:"",showSpinner:!1,itemTotal:null,total:0,items:[{quantity:"",price:""}]}},components:{spinner:D},methods:{getRates:function(){var a=this;this.showSpinner=!0,_.a.get("https://api.exchangeratesapi.io/latest",{params:{base:this.base}}).then((function(e){a.showSpinner=!1,a.results=e.data,console.log(a.results)})).catch((function(e){a.showSpinner=!1,a.errors.push(e)}))},getItemTotal:function(){this.total=0;for(var a=0;a<this.items.length;a++)this.total=this.total+this.items[a].quantity*this.items[a].price},addItem:function(){this.items.push({quantity:"",price:""})}}},C=f,P=(t("8a70"),Object(i["a"])(C,p,b,!1,null,"6a37c244",null)),B=P.exports,A=t("f820"),N=t("3f08");n["a"].use(N["a"]),n["a"].use(v["a"]);var y=[{path:"/",name:"XchangeCalculator",component:B},{path:"/about",name:"About",component:A["default"]}],M=new v["a"]({routes:y}),R=M,T=t("c16e"),K=t.n(T),G={namespace:"weather__"};n["a"].use(K.a,G),n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(a){return a(u)}}).$mount("#app")},6109:function(a,e,t){"use strict";var n=t("5679"),l=t.n(n);e["default"]=l.a},8029:function(a,e,t){},"85ec":function(a,e,t){},"8a70":function(a,e,t){"use strict";var n=t("1bdf"),l=t.n(n);l.a},"9d0d":function(a,e,t){"use strict";var n=t("8029"),l=t.n(n);l.a},e652:function(a,e,t){"use strict";var n=t("1c6f"),l=t.n(n);l.a},f1ca:function(a,e,t){"use strict";t.d(e,"a",(function(){return n})),t.d(e,"b",(function(){return l}));var n=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("fragment",[n("img",{attrs:{alt:"CurrencyConverter logo",src:t("3c4b")}}),n("h1",[a._v("About the XchangeCalculator")]),n("div",{staticClass:"container"},[n("p",[a._v("This app is designed to provide point-of-sale convenience. Wherever in the world you might need it.")]),n("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"https://github.com/AARosemond/Xchange-Calculator"}},[n("i",{staticClass:"fab fa-github"})])])])},l=[]},f820:function(a,e,t){"use strict";var n=t("f1ca"),l=t("6109"),o=(t("e652"),t("2877")),i=Object(o["a"])(l["default"],n["a"],n["b"],!1,null,"5f2188f3",null);e["default"]=i.exports}});
//# sourceMappingURL=app.1c9920db.js.map