(function(a){function e(e){for(var t,i,r=e[0],s=e[1],u=e[2],p=0,b=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&b.push(l[i][0]),l[i]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(a[t]=s[t]);v&&v(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var a,e=0;e<o.length;e++){for(var n=o[e],t=!0,r=1;r<n.length;r++){var s=n[r];0!==l[s]&&(t=!1)}t&&(o.splice(e--,1),a=i(i.s=n[0]))}return a}var t={},l={app:0},o=[];function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return a[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=a,i.c=t,i.d=function(a,e,n){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)i.d(n,t,function(e){return a[e]}.bind(null,t));return n},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var v=s;o.push([0,"chunk-vendors"]),n()})({0:function(a,e,n){a.exports=n("56d7")},"034f":function(a,e,n){"use strict";var t=n("85ec"),l=n.n(t);l.a},"1c6f":function(a,e,n){},"3c4b":function(a,e,n){a.exports=n.p+"img/CurrencyConverterLogo.5ba6db81.png"},5679:function(a,e){},"56d7":function(a,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var t=n("2b0e"),l=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[a._v("XchangeCalculator")]),a._v(" | "),n("router-link",{attrs:{to:"/about"}},[a._v("About the App")])],1),n("router-view")],1)},o=[],i=(n("034f"),n("2877")),r={},s=Object(i["a"])(r,l,o,!1,null,null,null),u=s.exports,v=n("8c4f"),p=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",[a._m(0),n("div",{staticClass:"form"},[n("div",{staticClass:"form-container"},[n("p",{directives:[{name:"show",rawName:"v-show",value:a.showError,expression:"showError"}],staticClass:"error"},[a._v("type in c")]),n("form",{on:{submit:function(e){return e.preventDefault(),a.getRates(e)}}},[n("div",{attrs:{"data-ng-app":"any","data-ng-init":"quantity=1;price=5;itemTotal="}},[n("h2",[a._v("Item Cost Calculator")]),a._v(" Item Quantity: "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:a.quantity},on:{change:a.getItemTotal,input:function(e){e.target.composing||(a.quantity=e.target.value)}}}),a._v(" Price: "),n("input",{directives:[{name:"model",rawName:"v-model",value:a.price,expression:"price"}],attrs:{type:"number",step:"0.01"},domProps:{value:a.price},on:{change:a.getItemTotal,input:function(e){e.target.composing||(a.price=e.target.value)}}}),n("div",{staticClass:"itemTotal-container"},[a.itemTotal?n("div",[a._v("Item Total: "+a._s(this.itemTotal))]):a._e()])]),n("h2",[a._v("Cost Currency Converter")]),a.total?n("div",[a._v(" Total: "+a._s(this.total))]):a._e(),n("p"),n("div",{staticClass:"container"},[n("div",{staticClass:"currency"},[n("p",[n("label",{attrs:{for:"base"}},[a._v(" Base Currency "),n("select",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"base"}],attrs:{id:"base"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.base=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"USD",selected:"selected",label:"US dollar"}},[a._v("USD - US dollar")]),n("option",{attrs:{value:"EUR",label:"Euro"}},[a._v("EUR - Euro")]),n("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),n("option",{attrs:{value:"GBP",label:"Pound sterling"}},[a._v("GBP - Pound sterling")]),n("option",{attrs:{disabled:""}},[a._v("──────────")]),n("option",{attrs:{value:"AED",label:"United Arab Emirates dirham"}},[a._v("AED - United Arab Emirates dirham")]),n("option",{attrs:{value:"AFN",label:"Afghan afghani"}},[a._v("AFN - Afghan afghani")]),n("option",{attrs:{value:"ALL",label:"Albanian lek"}},[a._v("ALL - Albanian lek")]),n("option",{attrs:{value:"AMD",label:"Armenian dram"}},[a._v("AMD - Armenian dram")]),n("option",{attrs:{value:"ANG",label:"Netherlands Antillean guilder"}},[a._v("ANG - Netherlands Antillean guilder")]),n("option",{attrs:{value:"AOA",label:"Angolan kwanza"}},[a._v("AOA - Angolan kwanza")]),n("option",{attrs:{value:"ARS",label:"Argentine peso"}},[a._v("ARS - Argentine peso")]),n("option",{attrs:{value:"AUD",label:"Australian dollar"}},[a._v("AUD - Australian dollar")]),n("option",{attrs:{value:"AWG",label:"Aruban florin"}},[a._v("AWG - Aruban florin")]),n("option",{attrs:{value:"AZN",label:"Azerbaijani manat"}},[a._v("AZN - Azerbaijani manat")]),n("option",{attrs:{value:"BAM",label:"Bosnia and Herzegovina convertible mark"}},[a._v("BAM - Bosnia and Herzegovina convertible mark")]),n("option",{attrs:{value:"BBD",label:"Barbadian dollar"}},[a._v("BBD - Barbadian dollar")]),n("option",{attrs:{value:"BDT",label:"Bangladeshi taka"}},[a._v("BDT - Bangladeshi taka")]),n("option",{attrs:{value:"BGN",label:"Bulgarian lev"}},[a._v("BGN - Bulgarian lev")]),n("option",{attrs:{value:"BHD",label:"Bahraini dinar"}},[a._v("BHD - Bahraini dinar")]),n("option",{attrs:{value:"BIF",label:"Burundian franc"}},[a._v("BIF - Burundian franc")]),n("option",{attrs:{value:"BMD",label:"Bermudian dollar"}},[a._v("BMD - Bermudian dollar")]),n("option",{attrs:{value:"BND",label:"Brunei dollar"}},[a._v("BND - Brunei dollar")]),n("option",{attrs:{value:"BOB",label:"Bolivian boliviano"}},[a._v("BOB - Bolivian boliviano")]),n("option",{attrs:{value:"BRL",label:"Brazilian real"}},[a._v("BRL - Brazilian real")]),n("option",{attrs:{value:"BSD",label:"Bahamian dollar"}},[a._v("BSD - Bahamian dollar")]),n("option",{attrs:{value:"BTN",label:"Bhutanese ngultrum"}},[a._v("BTN - Bhutanese ngultrum")]),n("option",{attrs:{value:"BWP",label:"Botswana pula"}},[a._v("BWP - Botswana pula")]),n("option",{attrs:{value:"BYN",label:"Belarusian ruble"}},[a._v("BYN - Belarusian ruble")]),n("option",{attrs:{value:"BZD",label:"Belize dollar"}},[a._v("BZD - Belize dollar")]),n("option",{attrs:{value:"CAD",label:"Canadian dollar"}},[a._v("CAD - Canadian dollar")]),n("option",{attrs:{value:"CDF",label:"Congolese franc"}},[a._v("CDF - Congolese franc")]),n("option",{attrs:{value:"CHF",label:"Swiss franc"}},[a._v("CHF - Swiss franc")]),n("option",{attrs:{value:"CLP",label:"Chilean peso"}},[a._v("CLP - Chilean peso")]),n("option",{attrs:{value:"CNY",label:"Chinese yuan"}},[a._v("CNY - Chinese yuan")]),n("option",{attrs:{value:"COP",label:"Colombian peso"}},[a._v("COP - Colombian peso")]),n("option",{attrs:{value:"CRC",label:"Costa Rican colón"}},[a._v("CRC - Costa Rican colón")]),n("option",{attrs:{value:"CUC",label:"Cuban convertible peso"}},[a._v("CUC - Cuban convertible peso")]),n("option",{attrs:{value:"CUP",label:"Cuban peso"}},[a._v("CUP - Cuban peso")]),n("option",{attrs:{value:"CVE",label:"Cape Verdean escudo"}},[a._v("CVE - Cape Verdean escudo")]),n("option",{attrs:{value:"CZK",label:"Czech koruna"}},[a._v("CZK - Czech koruna")]),n("option",{attrs:{value:"DJF",label:"Djiboutian franc"}},[a._v("DJF - Djiboutian franc")]),n("option",{attrs:{value:"DKK",label:"Danish krone"}},[a._v("DKK - Danish krone")]),n("option",{attrs:{value:"DOP",label:"Dominican peso"}},[a._v("DOP - Dominican peso")]),n("option",{attrs:{value:"DZD",label:"Algerian dinar"}},[a._v("DZD - Algerian dinar")]),n("option",{attrs:{value:"EGP",label:"Egyptian pound"}},[a._v("EGP - Egyptian pound")]),n("option",{attrs:{value:"ERN",label:"Eritrean nakfa"}},[a._v("ERN - Eritrean nakfa")]),n("option",{attrs:{value:"ETB",label:"Ethiopian birr"}},[a._v("ETB - Ethiopian birr")]),n("option",{attrs:{value:"EUR",label:"EURO"}},[a._v("EUR - EURO")]),n("option",{attrs:{value:"FJD",label:"Fijian dollar"}},[a._v("FJD - Fijian dollar")]),n("option",{attrs:{value:"FKP",label:"Falkland Islands pound"}},[a._v("FKP - Falkland Islands pound")]),n("option",{attrs:{value:"GBP",label:"British pound"}},[a._v("GBP - British pound")]),n("option",{attrs:{value:"GEL",label:"Georgian lari"}},[a._v("GEL - Georgian lari")]),n("option",{attrs:{value:"GGP",label:"Guernsey pound"}},[a._v("GGP - Guernsey pound")]),n("option",{attrs:{value:"GHS",label:"Ghanaian cedi"}},[a._v("GHS - Ghanaian cedi")]),n("option",{attrs:{value:"GIP",label:"Gibraltar pound"}},[a._v("GIP - Gibraltar pound")]),n("option",{attrs:{value:"GMD",label:"Gambian dalasi"}},[a._v("GMD - Gambian dalasi")]),n("option",{attrs:{value:"GNF",label:"Guinean franc"}},[a._v("GNF - Guinean franc")]),n("option",{attrs:{value:"GTQ",label:"Guatemalan quetzal"}},[a._v("GTQ - Guatemalan quetzal")]),n("option",{attrs:{value:"GYD",label:"Guyanese dollar"}},[a._v("GYD - Guyanese dollar")]),n("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),n("option",{attrs:{value:"HNL",label:"Honduran lempira"}},[a._v("HNL - Honduran lempira")]),n("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),n("option",{attrs:{value:"HRK",label:"Croatian kuna"}},[a._v("HRK - Croatian kuna")]),n("option",{attrs:{value:"HTG",label:"Haitian gourde"}},[a._v("HTG - Haitian gourde")]),n("option",{attrs:{value:"HUF",label:"Hungarian forint"}},[a._v("HUF - Hungarian forint")]),n("option",{attrs:{value:"IDR",label:"Indonesian rupiah"}},[a._v("IDR - Indonesian rupiah")]),n("option",{attrs:{value:"ILS",label:"Israeli new shekel"}},[a._v("ILS - Israeli new shekel")]),n("option",{attrs:{value:"IMP",label:"Manx pound"}},[a._v("IMP - Manx pound")]),n("option",{attrs:{value:"INR",label:"Indian rupee"}},[a._v("INR - Indian rupee")]),n("option",{attrs:{value:"IQD",label:"Iraqi dinar"}},[a._v("IQD - Iraqi dinar")]),n("option",{attrs:{value:"IRR",label:"Iranian rial"}},[a._v("IRR - Iranian rial")]),n("option",{attrs:{value:"ISK",label:"Icelandic króna"}},[a._v("ISK - Icelandic króna")]),n("option",{attrs:{value:"JEP",label:"Jersey pound"}},[a._v("JEP - Jersey pound")]),n("option",{attrs:{value:"JMD",label:"Jamaican dollar"}},[a._v("JMD - Jamaican dollar")]),n("option",{attrs:{value:"JOD",label:"Jordanian dinar"}},[a._v("JOD - Jordanian dinar")]),n("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),n("option",{attrs:{value:"KES",label:"Kenyan shilling"}},[a._v("KES - Kenyan shilling")]),n("option",{attrs:{value:"KGS",label:"Kyrgyzstani som"}},[a._v("KGS - Kyrgyzstani som")]),n("option",{attrs:{value:"KHR",label:"Cambodian riel"}},[a._v("KHR - Cambodian riel")]),n("option",{attrs:{value:"KID",label:"Kiribati dollar"}},[a._v("KID - Kiribati dollar")]),n("option",{attrs:{value:"KMF",label:"Comorian franc"}},[a._v("KMF - Comorian franc")]),n("option",{attrs:{value:"KPW",label:"North Korean won"}},[a._v("KPW - North Korean won")]),n("option",{attrs:{value:"KRW",label:"South Korean won"}},[a._v("KRW - South Korean won")]),n("option",{attrs:{value:"KWD",label:"Kuwaiti dinar"}},[a._v("KWD - Kuwaiti dinar")]),n("option",{attrs:{value:"KYD",label:"Cayman Islands dollar"}},[a._v("KYD - Cayman Islands dollar")]),n("option",{attrs:{value:"KZT",label:"Kazakhstani tenge"}},[a._v("KZT - Kazakhstani tenge")]),n("option",{attrs:{value:"LAK",label:"Lao kip"}},[a._v("LAK - Lao kip")]),n("option",{attrs:{value:"LBP",label:"Lebanese pound"}},[a._v("LBP - Lebanese pound")]),n("option",{attrs:{value:"LKR",label:"Sri Lankan rupee"}},[a._v("LKR - Sri Lankan rupee")]),n("option",{attrs:{value:"LRD",label:"Liberian dollar"}},[a._v("LRD - Liberian dollar")]),n("option",{attrs:{value:"LSL",label:"Lesotho loti"}},[a._v("LSL - Lesotho loti")]),n("option",{attrs:{value:"LYD",label:"Libyan dinar"}},[a._v("LYD - Libyan dinar")]),n("option",{attrs:{value:"MAD",label:"Moroccan dirham"}},[a._v("MAD - Moroccan dirham")]),n("option",{attrs:{value:"MDL",label:"Moldovan leu"}},[a._v("MDL - Moldovan leu")]),n("option",{attrs:{value:"MGA",label:"Malagasy ariary"}},[a._v("MGA - Malagasy ariary")]),n("option",{attrs:{value:"MKD",label:"Macedonian denar"}},[a._v("MKD - Macedonian denar")]),n("option",{attrs:{value:"MMK",label:"Burmese kyat"}},[a._v("MMK - Burmese kyat")]),n("option",{attrs:{value:"MNT",label:"Mongolian tögrög"}},[a._v("MNT - Mongolian tögrög")]),n("option",{attrs:{value:"MOP",label:"Macanese pataca"}},[a._v("MOP - Macanese pataca")]),n("option",{attrs:{value:"MRU",label:"Mauritanian ouguiya"}},[a._v("MRU - Mauritanian ouguiya")]),n("option",{attrs:{value:"MUR",label:"Mauritian rupee"}},[a._v("MUR - Mauritian rupee")]),n("option",{attrs:{value:"MVR",label:"Maldivian rufiyaa"}},[a._v("MVR - Maldivian rufiyaa")]),n("option",{attrs:{value:"MWK",label:"Malawian kwacha"}},[a._v("MWK - Malawian kwacha")]),n("option",{attrs:{value:"MXN",label:"Mexican peso"}},[a._v("MXN - Mexican peso")]),n("option",{attrs:{value:"MYR",label:"Malaysian ringgit"}},[a._v("MYR - Malaysian ringgit")]),n("option",{attrs:{value:"MZN",label:"Mozambican metical"}},[a._v("MZN - Mozambican metical")]),n("option",{attrs:{value:"NAD",label:"Namibian dollar"}},[a._v("NAD - Namibian dollar")]),n("option",{attrs:{value:"NGN",label:"Nigerian naira"}},[a._v("NGN - Nigerian naira")]),n("option",{attrs:{value:"NIO",label:"Nicaraguan córdoba"}},[a._v("NIO - Nicaraguan córdoba")]),n("option",{attrs:{value:"NOK",label:"Norwegian krone"}},[a._v("NOK - Norwegian krone")]),n("option",{attrs:{value:"NPR",label:"Nepalese rupee"}},[a._v("NPR - Nepalese rupee")]),n("option",{attrs:{value:"NZD",label:"New Zealand dollar"}},[a._v("NZD - New Zealand dollar")]),n("option",{attrs:{value:"OMR",label:"Omani rial"}},[a._v("OMR - Omani rial")]),n("option",{attrs:{value:"PAB",label:"Panamanian balboa"}},[a._v("PAB - Panamanian balboa")]),n("option",{attrs:{value:"PEN",label:"Peruvian sol"}},[a._v("PEN - Peruvian sol")]),n("option",{attrs:{value:"PGK",label:"Papua New Guinean kina"}},[a._v("PGK - Papua New Guinean kina")]),n("option",{attrs:{value:"PHP",label:"Philippine peso"}},[a._v("PHP - Philippine peso")]),n("option",{attrs:{value:"PKR",label:"Pakistani rupee"}},[a._v("PKR - Pakistani rupee")]),n("option",{attrs:{value:"PLN",label:"Polish złoty"}},[a._v("PLN - Polish złoty")]),n("option",{attrs:{value:"PRB",label:"Transnistrian ruble"}},[a._v("PRB - Transnistrian ruble")]),n("option",{attrs:{value:"PYG",label:"Paraguayan guaraní"}},[a._v("PYG - Paraguayan guaraní")]),n("option",{attrs:{value:"QAR",label:"Qatari riyal"}},[a._v("QAR - Qatari riyal")]),n("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),n("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),n("option",{attrs:{value:"RSD",label:"Serbian dinar"}},[a._v("RSD - Serbian dinar")]),n("option",{attrs:{value:"RUB",label:"Russian ruble"}},[a._v("RUB - Russian ruble")]),n("option",{attrs:{value:"RWF",label:"Rwandan franc"}},[a._v("RWF - Rwandan franc")]),n("option",{attrs:{value:"SAR",label:"Saudi riyal"}},[a._v("SAR - Saudi riyal")]),n("option",{attrs:{value:"SEK",label:"Swedish krona"}},[a._v("SEK - Swedish krona")]),n("option",{attrs:{value:"SGD",label:"Singapore dollar"}},[a._v("SGD - Singapore dollar")]),n("option",{attrs:{value:"SHP",label:"Saint Helena pound"}},[a._v("SHP - Saint Helena pound")]),n("option",{attrs:{value:"SLL",label:"Sierra Leonean leone"}},[a._v("SLL - Sierra Leonean leone")]),n("option",{attrs:{value:"SLS",label:"Somaliland shilling"}},[a._v("SLS - Somaliland shilling")]),n("option",{attrs:{value:"SOS",label:"Somali shilling"}},[a._v("SOS - Somali shilling")]),n("option",{attrs:{value:"SRD",label:"Surinamese dollar"}},[a._v("SRD - Surinamese dollar")]),n("option",{attrs:{value:"SSP",label:"South Sudanese pound"}},[a._v("SSP - South Sudanese pound")]),n("option",{attrs:{value:"STN",label:"São Tomé and Príncipe dobra"}},[a._v("STN - São Tomé and Príncipe dobra")]),n("option",{attrs:{value:"SYP",label:"Syrian pound"}},[a._v("SYP - Syrian pound")]),n("option",{attrs:{value:"SZL",label:"Swazi lilangeni"}},[a._v("SZL - Swazi lilangeni")]),n("option",{attrs:{value:"THB",label:"Thai baht"}},[a._v("THB - Thai baht")]),n("option",{attrs:{value:"TJS",label:"Tajikistani somoni"}},[a._v("TJS - Tajikistani somoni")]),n("option",{attrs:{value:"TMT",label:"Turkmenistan manat"}},[a._v("TMT - Turkmenistan manat")]),n("option",{attrs:{value:"TND",label:"Tunisian dinar"}},[a._v("TND - Tunisian dinar")]),n("option",{attrs:{value:"TOP",label:"Tongan paʻanga"}},[a._v("TOP - Tongan paʻanga")]),n("option",{attrs:{value:"TRY",label:"Turkish lira"}},[a._v("TRY - Turkish lira")]),n("option",{attrs:{value:"TTD",label:"Trinidad and Tobago dollar"}},[a._v("TTD - Trinidad and Tobago dollar")]),n("option",{attrs:{value:"TVD",label:"Tuvaluan dollar"}},[a._v("TVD - Tuvaluan dollar")]),n("option",{attrs:{value:"TWD",label:"New Taiwan dollar"}},[a._v("TWD - New Taiwan dollar")]),n("option",{attrs:{value:"TZS",label:"Tanzanian shilling"}},[a._v("TZS - Tanzanian shilling")]),n("option",{attrs:{value:"UAH",label:"Ukrainian hryvnia"}},[a._v("UAH - Ukrainian hryvnia")]),n("option",{attrs:{value:"UGX",label:"Ugandan shilling"}},[a._v("UGX - Ugandan shilling")]),n("option",{attrs:{value:"USD",label:"United States dollar"}},[a._v("USD - United States dollar")]),n("option",{attrs:{value:"UYU",label:"Uruguayan peso"}},[a._v("UYU - Uruguayan peso")]),n("option",{attrs:{value:"UZS",label:"Uzbekistani soʻm"}},[a._v("UZS - Uzbekistani soʻm")]),n("option",{attrs:{value:"VES",label:"Venezuelan bolívar soberano"}},[a._v("VES - Venezuelan bolívar soberano")]),n("option",{attrs:{value:"VND",label:"Vietnamese đồng"}},[a._v("VND - Vietnamese đồng")]),n("option",{attrs:{value:"VUV",label:"Vanuatu vatu"}},[a._v("VUV - Vanuatu vatu")]),n("option",{attrs:{value:"WST",label:"Samoan tālā"}},[a._v("WST - Samoan tālā")]),n("option",{attrs:{value:"XAF",label:"Central African CFA franc"}},[a._v("XAF - Central African CFA franc")]),n("option",{attrs:{value:"XCD",label:"Eastern Caribbean dollar"}},[a._v("XCD - Eastern Caribbean dollar")]),n("option",{attrs:{value:"XOF",label:"West African CFA franc"}},[a._v("XOF - West African CFA franc")]),n("option",{attrs:{value:"XPF",label:"CFP franc"}},[a._v("XPF - CFP franc")]),n("option",{attrs:{value:"ZAR",label:"South African rand"}},[a._v("ZAR - South African rand")]),n("option",{attrs:{value:"ZMW",label:"Zambian kwacha"}},[a._v("ZMW - Zambian kwacha")]),n("option",{attrs:{value:"ZWB",label:"Zimbabwean bonds"}},[a._v("ZWB - Zimbabwean bonds")])]),n("label",{attrs:{for:"base"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"base"}],attrs:{type:"text",id:"base"},domProps:{value:a.base},on:{input:function(e){e.target.composing||(a.base=e.target.value)}}})])])])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"currency"},[n("p",[n("label",{attrs:{for:"destinationCurrency"}},[a._v(" Destination Currency "),n("select",{directives:[{name:"model",rawName:"v-model",value:a.destinationCurrency,expression:"destinationCurrency"}],attrs:{id:"destinationCurrency"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.destinationCurrency=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"USD",selected:"selected",label:"US dollar"}},[a._v("USD - US dollar")]),n("option",{attrs:{value:"EUR",label:"Euro"}},[a._v("EUR - Euro")]),n("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),n("option",{attrs:{value:"GBP",label:"Pound sterling"}},[a._v("GBP - Pound sterling")]),n("option",{attrs:{disabled:""}},[a._v("──────────")]),n("option",{attrs:{value:"AED",label:"United Arab Emirates dirham"}},[a._v("AED - United Arab Emirates dirham")]),n("option",{attrs:{value:"AFN",label:"Afghan afghani"}},[a._v("AFN - Afghan afghani")]),n("option",{attrs:{value:"ALL",label:"Albanian lek"}},[a._v("ALL - Albanian lek")]),n("option",{attrs:{value:"AMD",label:"Armenian dram"}},[a._v("AMD - Armenian dram")]),n("option",{attrs:{value:"ANG",label:"Netherlands Antillean guilder"}},[a._v("ANG - Netherlands Antillean guilder")]),n("option",{attrs:{value:"AOA",label:"Angolan kwanza"}},[a._v("AOA - Angolan kwanza")]),n("option",{attrs:{value:"ARS",label:"Argentine peso"}},[a._v("ARS - Argentine peso")]),n("option",{attrs:{value:"AUD",label:"Australian dollar"}},[a._v("AUD - Australian dollar")]),n("option",{attrs:{value:"AWG",label:"Aruban florin"}},[a._v("AWG - Aruban florin")]),n("option",{attrs:{value:"AZN",label:"Azerbaijani manat"}},[a._v("AZN - Azerbaijani manat")]),n("option",{attrs:{value:"BAM",label:"Bosnia and Herzegovina convertible mark"}},[a._v("BAM - Bosnia and Herzegovina convertible mark")]),n("option",{attrs:{value:"BBD",label:"Barbadian dollar"}},[a._v("BBD - Barbadian dollar")]),n("option",{attrs:{value:"BDT",label:"Bangladeshi taka"}},[a._v("BDT - Bangladeshi taka")]),n("option",{attrs:{value:"BGN",label:"Bulgarian lev"}},[a._v("BGN - Bulgarian lev")]),n("option",{attrs:{value:"BHD",label:"Bahraini dinar"}},[a._v("BHD - Bahraini dinar")]),n("option",{attrs:{value:"BIF",label:"Burundian franc"}},[a._v("BIF - Burundian franc")]),n("option",{attrs:{value:"BMD",label:"Bermudian dollar"}},[a._v("BMD - Bermudian dollar")]),n("option",{attrs:{value:"BND",label:"Brunei dollar"}},[a._v("BND - Brunei dollar")]),n("option",{attrs:{value:"BOB",label:"Bolivian boliviano"}},[a._v("BOB - Bolivian boliviano")]),n("option",{attrs:{value:"BRL",label:"Brazilian real"}},[a._v("BRL - Brazilian real")]),n("option",{attrs:{value:"BSD",label:"Bahamian dollar"}},[a._v("BSD - Bahamian dollar")]),n("option",{attrs:{value:"BTN",label:"Bhutanese ngultrum"}},[a._v("BTN - Bhutanese ngultrum")]),n("option",{attrs:{value:"BWP",label:"Botswana pula"}},[a._v("BWP - Botswana pula")]),n("option",{attrs:{value:"BYN",label:"Belarusian ruble"}},[a._v("BYN - Belarusian ruble")]),n("option",{attrs:{value:"BZD",label:"Belize dollar"}},[a._v("BZD - Belize dollar")]),n("option",{attrs:{value:"CAD",label:"Canadian dollar"}},[a._v("CAD - Canadian dollar")]),n("option",{attrs:{value:"CDF",label:"Congolese franc"}},[a._v("CDF - Congolese franc")]),n("option",{attrs:{value:"CHF",label:"Swiss franc"}},[a._v("CHF - Swiss franc")]),n("option",{attrs:{value:"CLP",label:"Chilean peso"}},[a._v("CLP - Chilean peso")]),n("option",{attrs:{value:"CNY",label:"Chinese yuan"}},[a._v("CNY - Chinese yuan")]),n("option",{attrs:{value:"COP",label:"Colombian peso"}},[a._v("COP - Colombian peso")]),n("option",{attrs:{value:"CRC",label:"Costa Rican colón"}},[a._v("CRC - Costa Rican colón")]),n("option",{attrs:{value:"CUC",label:"Cuban convertible peso"}},[a._v("CUC - Cuban convertible peso")]),n("option",{attrs:{value:"CUP",label:"Cuban peso"}},[a._v("CUP - Cuban peso")]),n("option",{attrs:{value:"CVE",label:"Cape Verdean escudo"}},[a._v("CVE - Cape Verdean escudo")]),n("option",{attrs:{value:"CZK",label:"Czech koruna"}},[a._v("CZK - Czech koruna")]),n("option",{attrs:{value:"DJF",label:"Djiboutian franc"}},[a._v("DJF - Djiboutian franc")]),n("option",{attrs:{value:"DKK",label:"Danish krone"}},[a._v("DKK - Danish krone")]),n("option",{attrs:{value:"DOP",label:"Dominican peso"}},[a._v("DOP - Dominican peso")]),n("option",{attrs:{value:"DZD",label:"Algerian dinar"}},[a._v("DZD - Algerian dinar")]),n("option",{attrs:{value:"EGP",label:"Egyptian pound"}},[a._v("EGP - Egyptian pound")]),n("option",{attrs:{value:"ERN",label:"Eritrean nakfa"}},[a._v("ERN - Eritrean nakfa")]),n("option",{attrs:{value:"ETB",label:"Ethiopian birr"}},[a._v("ETB - Ethiopian birr")]),n("option",{attrs:{value:"EUR",label:"EURO"}},[a._v("EUR - EURO")]),n("option",{attrs:{value:"FJD",label:"Fijian dollar"}},[a._v("FJD - Fijian dollar")]),n("option",{attrs:{value:"FKP",label:"Falkland Islands pound"}},[a._v("FKP - Falkland Islands pound")]),n("option",{attrs:{value:"GBP",label:"British pound"}},[a._v("GBP - British pound")]),n("option",{attrs:{value:"GEL",label:"Georgian lari"}},[a._v("GEL - Georgian lari")]),n("option",{attrs:{value:"GGP",label:"Guernsey pound"}},[a._v("GGP - Guernsey pound")]),n("option",{attrs:{value:"GHS",label:"Ghanaian cedi"}},[a._v("GHS - Ghanaian cedi")]),n("option",{attrs:{value:"GIP",label:"Gibraltar pound"}},[a._v("GIP - Gibraltar pound")]),n("option",{attrs:{value:"GMD",label:"Gambian dalasi"}},[a._v("GMD - Gambian dalasi")]),n("option",{attrs:{value:"GNF",label:"Guinean franc"}},[a._v("GNF - Guinean franc")]),n("option",{attrs:{value:"GTQ",label:"Guatemalan quetzal"}},[a._v("GTQ - Guatemalan quetzal")]),n("option",{attrs:{value:"GYD",label:"Guyanese dollar"}},[a._v("GYD - Guyanese dollar")]),n("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),n("option",{attrs:{value:"HNL",label:"Honduran lempira"}},[a._v("HNL - Honduran lempira")]),n("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),n("option",{attrs:{value:"HRK",label:"Croatian kuna"}},[a._v("HRK - Croatian kuna")]),n("option",{attrs:{value:"HTG",label:"Haitian gourde"}},[a._v("HTG - Haitian gourde")]),n("option",{attrs:{value:"HUF",label:"Hungarian forint"}},[a._v("HUF - Hungarian forint")]),n("option",{attrs:{value:"IDR",label:"Indonesian rupiah"}},[a._v("IDR - Indonesian rupiah")]),n("option",{attrs:{value:"ILS",label:"Israeli new shekel"}},[a._v("ILS - Israeli new shekel")]),n("option",{attrs:{value:"IMP",label:"Manx pound"}},[a._v("IMP - Manx pound")]),n("option",{attrs:{value:"INR",label:"Indian rupee"}},[a._v("INR - Indian rupee")]),n("option",{attrs:{value:"IQD",label:"Iraqi dinar"}},[a._v("IQD - Iraqi dinar")]),n("option",{attrs:{value:"IRR",label:"Iranian rial"}},[a._v("IRR - Iranian rial")]),n("option",{attrs:{value:"ISK",label:"Icelandic króna"}},[a._v("ISK - Icelandic króna")]),n("option",{attrs:{value:"JEP",label:"Jersey pound"}},[a._v("JEP - Jersey pound")]),n("option",{attrs:{value:"JMD",label:"Jamaican dollar"}},[a._v("JMD - Jamaican dollar")]),n("option",{attrs:{value:"JOD",label:"Jordanian dinar"}},[a._v("JOD - Jordanian dinar")]),n("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),n("option",{attrs:{value:"KES",label:"Kenyan shilling"}},[a._v("KES - Kenyan shilling")]),n("option",{attrs:{value:"KGS",label:"Kyrgyzstani som"}},[a._v("KGS - Kyrgyzstani som")]),n("option",{attrs:{value:"KHR",label:"Cambodian riel"}},[a._v("KHR - Cambodian riel")]),n("option",{attrs:{value:"KID",label:"Kiribati dollar"}},[a._v("KID - Kiribati dollar")]),n("option",{attrs:{value:"KMF",label:"Comorian franc"}},[a._v("KMF - Comorian franc")]),n("option",{attrs:{value:"KPW",label:"North Korean won"}},[a._v("KPW - North Korean won")]),n("option",{attrs:{value:"KRW",label:"South Korean won"}},[a._v("KRW - South Korean won")]),n("option",{attrs:{value:"KWD",label:"Kuwaiti dinar"}},[a._v("KWD - Kuwaiti dinar")]),n("option",{attrs:{value:"KYD",label:"Cayman Islands dollar"}},[a._v("KYD - Cayman Islands dollar")]),n("option",{attrs:{value:"KZT",label:"Kazakhstani tenge"}},[a._v("KZT - Kazakhstani tenge")]),n("option",{attrs:{value:"LAK",label:"Lao kip"}},[a._v("LAK - Lao kip")]),n("option",{attrs:{value:"LBP",label:"Lebanese pound"}},[a._v("LBP - Lebanese pound")]),n("option",{attrs:{value:"LKR",label:"Sri Lankan rupee"}},[a._v("LKR - Sri Lankan rupee")]),n("option",{attrs:{value:"LRD",label:"Liberian dollar"}},[a._v("LRD - Liberian dollar")]),n("option",{attrs:{value:"LSL",label:"Lesotho loti"}},[a._v("LSL - Lesotho loti")]),n("option",{attrs:{value:"LYD",label:"Libyan dinar"}},[a._v("LYD - Libyan dinar")]),n("option",{attrs:{value:"MAD",label:"Moroccan dirham"}},[a._v("MAD - Moroccan dirham")]),n("option",{attrs:{value:"MDL",label:"Moldovan leu"}},[a._v("MDL - Moldovan leu")]),n("option",{attrs:{value:"MGA",label:"Malagasy ariary"}},[a._v("MGA - Malagasy ariary")]),n("option",{attrs:{value:"MKD",label:"Macedonian denar"}},[a._v("MKD - Macedonian denar")]),n("option",{attrs:{value:"MMK",label:"Burmese kyat"}},[a._v("MMK - Burmese kyat")]),n("option",{attrs:{value:"MNT",label:"Mongolian tögrög"}},[a._v("MNT - Mongolian tögrög")]),n("option",{attrs:{value:"MOP",label:"Macanese pataca"}},[a._v("MOP - Macanese pataca")]),n("option",{attrs:{value:"MRU",label:"Mauritanian ouguiya"}},[a._v("MRU - Mauritanian ouguiya")]),n("option",{attrs:{value:"MUR",label:"Mauritian rupee"}},[a._v("MUR - Mauritian rupee")]),n("option",{attrs:{value:"MVR",label:"Maldivian rufiyaa"}},[a._v("MVR - Maldivian rufiyaa")]),n("option",{attrs:{value:"MWK",label:"Malawian kwacha"}},[a._v("MWK - Malawian kwacha")]),n("option",{attrs:{value:"MXN",label:"Mexican peso"}},[a._v("MXN - Mexican peso")]),n("option",{attrs:{value:"MYR",label:"Malaysian ringgit"}},[a._v("MYR - Malaysian ringgit")]),n("option",{attrs:{value:"MZN",label:"Mozambican metical"}},[a._v("MZN - Mozambican metical")]),n("option",{attrs:{value:"NAD",label:"Namibian dollar"}},[a._v("NAD - Namibian dollar")]),n("option",{attrs:{value:"NGN",label:"Nigerian naira"}},[a._v("NGN - Nigerian naira")]),n("option",{attrs:{value:"NIO",label:"Nicaraguan córdoba"}},[a._v("NIO - Nicaraguan córdoba")]),n("option",{attrs:{value:"NOK",label:"Norwegian krone"}},[a._v("NOK - Norwegian krone")]),n("option",{attrs:{value:"NPR",label:"Nepalese rupee"}},[a._v("NPR - Nepalese rupee")]),n("option",{attrs:{value:"NZD",label:"New Zealand dollar"}},[a._v("NZD - New Zealand dollar")]),n("option",{attrs:{value:"OMR",label:"Omani rial"}},[a._v("OMR - Omani rial")]),n("option",{attrs:{value:"PAB",label:"Panamanian balboa"}},[a._v("PAB - Panamanian balboa")]),n("option",{attrs:{value:"PEN",label:"Peruvian sol"}},[a._v("PEN - Peruvian sol")]),n("option",{attrs:{value:"PGK",label:"Papua New Guinean kina"}},[a._v("PGK - Papua New Guinean kina")]),n("option",{attrs:{value:"PHP",label:"Philippine peso"}},[a._v("PHP - Philippine peso")]),n("option",{attrs:{value:"PKR",label:"Pakistani rupee"}},[a._v("PKR - Pakistani rupee")]),n("option",{attrs:{value:"PLN",label:"Polish złoty"}},[a._v("PLN - Polish złoty")]),n("option",{attrs:{value:"PRB",label:"Transnistrian ruble"}},[a._v("PRB - Transnistrian ruble")]),n("option",{attrs:{value:"PYG",label:"Paraguayan guaraní"}},[a._v("PYG - Paraguayan guaraní")]),n("option",{attrs:{value:"QAR",label:"Qatari riyal"}},[a._v("QAR - Qatari riyal")]),n("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),n("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),n("option",{attrs:{value:"RSD",label:"Serbian dinar"}},[a._v("RSD - Serbian dinar")]),n("option",{attrs:{value:"RUB",label:"Russian ruble"}},[a._v("RUB - Russian ruble")]),n("option",{attrs:{value:"RWF",label:"Rwandan franc"}},[a._v("RWF - Rwandan franc")]),n("option",{attrs:{value:"SAR",label:"Saudi riyal"}},[a._v("SAR - Saudi riyal")]),n("option",{attrs:{value:"SEK",label:"Swedish krona"}},[a._v("SEK - Swedish krona")]),n("option",{attrs:{value:"SGD",label:"Singapore dollar"}},[a._v("SGD - Singapore dollar")]),n("option",{attrs:{value:"SHP",label:"Saint Helena pound"}},[a._v("SHP - Saint Helena pound")]),n("option",{attrs:{value:"SLL",label:"Sierra Leonean leone"}},[a._v("SLL - Sierra Leonean leone")]),n("option",{attrs:{value:"SLS",label:"Somaliland shilling"}},[a._v("SLS - Somaliland shilling")]),n("option",{attrs:{value:"SOS",label:"Somali shilling"}},[a._v("SOS - Somali shilling")]),n("option",{attrs:{value:"SRD",label:"Surinamese dollar"}},[a._v("SRD - Surinamese dollar")]),n("option",{attrs:{value:"SSP",label:"South Sudanese pound"}},[a._v("SSP - South Sudanese pound")]),n("option",{attrs:{value:"STN",label:"São Tomé and Príncipe dobra"}},[a._v("STN - São Tomé and Príncipe dobra")]),n("option",{attrs:{value:"SYP",label:"Syrian pound"}},[a._v("SYP - Syrian pound")]),n("option",{attrs:{value:"SZL",label:"Swazi lilangeni"}},[a._v("SZL - Swazi lilangeni")]),n("option",{attrs:{value:"THB",label:"Thai baht"}},[a._v("THB - Thai baht")]),n("option",{attrs:{value:"TJS",label:"Tajikistani somoni"}},[a._v("TJS - Tajikistani somoni")]),n("option",{attrs:{value:"TMT",label:"Turkmenistan manat"}},[a._v("TMT - Turkmenistan manat")]),n("option",{attrs:{value:"TND",label:"Tunisian dinar"}},[a._v("TND - Tunisian dinar")]),n("option",{attrs:{value:"TOP",label:"Tongan paʻanga"}},[a._v("TOP - Tongan paʻanga")]),n("option",{attrs:{value:"TRY",label:"Turkish lira"}},[a._v("TRY - Turkish lira")]),n("option",{attrs:{value:"TTD",label:"Trinidad and Tobago dollar"}},[a._v("TTD - Trinidad and Tobago dollar")]),n("option",{attrs:{value:"TVD",label:"Tuvaluan dollar"}},[a._v("TVD - Tuvaluan dollar")]),n("option",{attrs:{value:"TWD",label:"New Taiwan dollar"}},[a._v("TWD - New Taiwan dollar")]),n("option",{attrs:{value:"TZS",label:"Tanzanian shilling"}},[a._v("TZS - Tanzanian shilling")]),n("option",{attrs:{value:"UAH",label:"Ukrainian hryvnia"}},[a._v("UAH - Ukrainian hryvnia")]),n("option",{attrs:{value:"UGX",label:"Ugandan shilling"}},[a._v("UGX - Ugandan shilling")]),n("option",{attrs:{value:"USD",label:"United States dollar"}},[a._v("USD - United States dollar")]),n("option",{attrs:{value:"UYU",label:"Uruguayan peso"}},[a._v("UYU - Uruguayan peso")]),n("option",{attrs:{value:"UZS",label:"Uzbekistani soʻm"}},[a._v("UZS - Uzbekistani soʻm")]),n("option",{attrs:{value:"VES",label:"Venezuelan bolívar soberano"}},[a._v("VES - Venezuelan bolívar soberano")]),n("option",{attrs:{value:"VND",label:"Vietnamese đồng"}},[a._v("VND - Vietnamese đồng")]),n("option",{attrs:{value:"VUV",label:"Vanuatu vatu"}},[a._v("VUV - Vanuatu vatu")]),n("option",{attrs:{value:"WST",label:"Samoan tālā"}},[a._v("WST - Samoan tālā")]),n("option",{attrs:{value:"XAF",label:"Central African CFA franc"}},[a._v("XAF - Central African CFA franc")]),n("option",{attrs:{value:"XCD",label:"Eastern Caribbean dollar"}},[a._v("XCD - Eastern Caribbean dollar")]),n("option",{attrs:{value:"XOF",label:"West African CFA franc"}},[a._v("XOF - West African CFA franc")]),n("option",{attrs:{value:"XPF",label:"CFP franc"}},[a._v("XPF - CFP franc")]),n("option",{attrs:{value:"ZAR",label:"South African rand"}},[a._v("ZAR - South African rand")]),n("option",{attrs:{value:"ZMW",label:"Zambian kwacha"}},[a._v("ZMW - Zambian kwacha")]),n("option",{attrs:{value:"ZWB",label:"Zimbabwean bonds"}},[a._v("ZWB - Zimbabwean bonds")])]),n("label",{attrs:{for:"destinationCurrency"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.destinationCurrency,expression:"destinationCurrency"}],attrs:{type:"text",id:"destinationCurrency"},domProps:{value:a.destinationCurrency},on:{input:function(e){e.target.composing||(a.destinationCurrency=e.target.value)}}})])])])])]),a._m(1)])]),a.showSpinner?n("spinner"):a._e(),n("div",{staticClass:"results-container"},[a.results?n("div",[a._v(a._s(this.total)+" "+a._s(this.base)+" = "+a._s(this.total*this.results.rates[this.destinationCurrency])+" "+a._s(this.destinationCurrency))]):a._e()])],1)])},b=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"CurrencyConverter"},[t("h1",[a._v("XchangeCalculator")]),t("img",{attrs:{alt:"CurrencyConverter logo",src:n("3c4b")}})])},function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("p",[n("input",{attrs:{type:"submit",value:"Submit"}})])}],d=n("bc3a"),_=n.n(d),c=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},m=[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",[n("h2",[a._v("Loading...")]),n("div",{staticClass:"sk-folding-cube"},[n("div",{staticClass:"sk-cube1 sk-cube"}),n("div",{staticClass:"sk-cube2 sk-cube"}),n("div",{staticClass:"sk-cube4 sk-cube"}),n("div",{staticClass:"sk-cube3 sk-cube"})])])}],g={name:"CubeSpinner"},h=g,S=(n("9d0d"),Object(i["a"])(h,c,m,!1,null,"8de00f74",null)),D=S.exports;n("9ddc");var f={name:"CurrencyConverter",data:function(){return{results:null,errors:[],base:"",destinationCurrency:"",showSpinner:!1,itemTotal:null,total:0}},components:{spinner:D},methods:{getRates:function(){var a=this;this.showSpinner=!0,_.a.get("https://api.exchangeratesapi.io/latest",{params:{base:this.base}}).then((function(e){a.showSpinner=!1,a.results=e.data,console.log(a.results)})).catch((function(e){a.showSpinner=!1,a.errors.push(e)}))},getItemTotal:function(){this.itemTotal=this.quantity*this.price,this.total=this.itemTotal}}},C=f,P=(n("de48"),Object(i["a"])(C,p,b,!1,null,"453026e8",null)),B=P.exports,A=n("f820"),N=n("3f08");t["a"].use(N["a"]),t["a"].use(v["a"]);var y=[{path:"/",name:"XchangeCalculator",component:B},{path:"/about",name:"About",component:A["default"]}],M=new v["a"]({routes:y}),R=M,T=n("c16e"),K=n.n(T),G={namespace:"weather__"};t["a"].use(K.a,G),t["a"].config.productionTip=!1,new t["a"]({router:R,render:function(a){return a(u)}}).$mount("#app")},6109:function(a,e,n){"use strict";var t=n("5679"),l=n.n(t);e["default"]=l.a},7503:function(a,e,n){},8029:function(a,e,n){},"85ec":function(a,e,n){},"9d0d":function(a,e,n){"use strict";var t=n("8029"),l=n.n(t);l.a},de48:function(a,e,n){"use strict";var t=n("7503"),l=n.n(t);l.a},e652:function(a,e,n){"use strict";var t=n("1c6f"),l=n.n(t);l.a},f1ca:function(a,e,n){"use strict";n.d(e,"a",(function(){return t})),n.d(e,"b",(function(){return l}));var t=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("fragment",[t("img",{attrs:{alt:"CurrencyConverter logo",src:n("3c4b")}}),t("h1",[a._v("About the XchangeCalculator")]),t("div",{staticClass:"container"},[t("p",[a._v("This app is designed to provide point-of-sale convenience. Wherever in the world you might need it.")]),t("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"https://github.com/AARosemond/Xchange-Calculator"}},[t("i",{staticClass:"fab fa-github"})])])])},l=[]},f820:function(a,e,n){"use strict";var t=n("f1ca"),l=n("6109"),o=(n("e652"),n("2877")),i=Object(o["a"])(l["default"],t["a"],t["b"],!1,null,"5f2188f3",null);e["default"]=i.exports}});
//# sourceMappingURL=app.d5cc53ea.js.map