(function(a){function e(e){for(var n,i,r=e[0],s=e[1],u=e[2],p=0,b=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&b.push(t[i][0]),t[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(a[n]=s[n]);v&&v(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),l()}function l(){for(var a,e=0;e<o.length;e++){for(var l=o[e],n=!0,r=1;r<l.length;r++){var s=l[r];0!==t[s]&&(n=!1)}n&&(o.splice(e--,1),a=i(i.s=l[0]))}return a}var n={},t={app:0},o=[];function i(e){if(n[e])return n[e].exports;var l=n[e]={i:e,l:!1,exports:{}};return a[e].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=a,i.c=n,i.d=function(a,e,l){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:l})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)i.d(l,n,function(e){return a[e]}.bind(null,n));return l},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var v=s;o.push([0,"chunk-vendors"]),l()})({0:function(a,e,l){a.exports=l("56d7")},"034f":function(a,e,l){"use strict";var n=l("85ec"),t=l.n(n);t.a},"1c6f":function(a,e,l){},"3c4b":function(a,e,l){a.exports=l.p+"img/CurrencyConverterLogo.5ba6db81.png"},"44f6":function(a,e,l){},5103:function(a,e,l){"use strict";var n=l("44f6"),t=l.n(n);t.a},5679:function(a,e){},"56d7":function(a,e,l){"use strict";l.r(e);l("e260"),l("e6cf"),l("cca6"),l("a79d");var n=l("2b0e"),t=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{attrs:{id:"app"}},[l("div",{attrs:{id:"nav"}},[l("router-link",{attrs:{to:"/"}},[a._v("XchangeCalculator")]),a._v(" | "),l("router-link",{attrs:{to:"/about"}},[a._v("About the App")])],1),l("router-view")],1)},o=[],i=(l("034f"),l("2877")),r={},s=Object(i["a"])(r,t,o,!1,null,null,null),u=s.exports,v=l("8c4f"),p=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",[a._m(0),l("div",{staticClass:"form"},[l("div",{staticClass:"form-container"},[l("p",{directives:[{name:"show",rawName:"v-show",value:a.showError,expression:"showError"}],staticClass:"error"},[a._v("type in c")]),l("form",{on:{submit:function(e){return e.preventDefault(),a.getRates(e)}}},[l("div",{attrs:{"data-ng-app":"any","data-ng-init":"quantity=1;price=5"}},[l("h2",[a._v("Item Cost Calculator")]),l("p",[a._v(" Item Quantity: "),l("input",{attrs:{type:"number","ng-model":"quantity"}}),a._v(" Price: "),l("input",{attrs:{type:"number","ng-model":"price"}}),l("label",{attrs:{for:"itemTotal"}},[a._v(" Item Total: "),l("input",{directives:[{name:"model",rawName:"v-model",value:a.itemTotal,expression:"itemTotal"}],attrs:{type:"text",id:"itemTotal"},domProps:{value:a.itemTotal},on:{input:function(e){e.target.composing||(a.itemTotal=e.target.value)}}})])]),l("div",{staticClass:"itemTotal-container"},[a.itemTotal?l("div",[a._v(a._s(this.quantity*this.price))]):a._e()])]),l("h2",[a._v("Cost Currency Converter")]),l("p",[l("label",{attrs:{for:"multiplier"}},[a._v(" Total "),l("input",{directives:[{name:"model",rawName:"v-model",value:a.multiplier,expression:"multiplier"}],attrs:{type:"text",id:"multiplier"},domProps:{value:a.multiplier},on:{input:function(e){e.target.composing||(a.multiplier=e.target.value)}}})])]),l("div",{staticClass:"container"},[l("div",{staticClass:"currency"},[l("p",[l("label",{attrs:{for:"base"}},[a._v(" Base Currency "),l("select",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"base"}],attrs:{id:"base"},on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.base=e.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"USD",selected:"selected",label:"US dollar"}},[a._v("USD - US dollar")]),l("option",{attrs:{value:"EUR",label:"Euro"}},[a._v("EUR - Euro")]),l("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),l("option",{attrs:{value:"GBP",label:"Pound sterling"}},[a._v("GBP - Pound sterling")]),l("option",{attrs:{disabled:""}},[a._v("──────────")]),l("option",{attrs:{value:"AED",label:"United Arab Emirates dirham"}},[a._v("AED - United Arab Emirates dirham")]),l("option",{attrs:{value:"AFN",label:"Afghan afghani"}},[a._v("AFN - Afghan afghani")]),l("option",{attrs:{value:"ALL",label:"Albanian lek"}},[a._v("ALL - Albanian lek")]),l("option",{attrs:{value:"AMD",label:"Armenian dram"}},[a._v("AMD - Armenian dram")]),l("option",{attrs:{value:"ANG",label:"Netherlands Antillean guilder"}},[a._v("ANG - Netherlands Antillean guilder")]),l("option",{attrs:{value:"AOA",label:"Angolan kwanza"}},[a._v("AOA - Angolan kwanza")]),l("option",{attrs:{value:"ARS",label:"Argentine peso"}},[a._v("ARS - Argentine peso")]),l("option",{attrs:{value:"AUD",label:"Australian dollar"}},[a._v("AUD - Australian dollar")]),l("option",{attrs:{value:"AWG",label:"Aruban florin"}},[a._v("AWG - Aruban florin")]),l("option",{attrs:{value:"AZN",label:"Azerbaijani manat"}},[a._v("AZN - Azerbaijani manat")]),l("option",{attrs:{value:"BAM",label:"Bosnia and Herzegovina convertible mark"}},[a._v("BAM - Bosnia and Herzegovina convertible mark")]),l("option",{attrs:{value:"BBD",label:"Barbadian dollar"}},[a._v("BBD - Barbadian dollar")]),l("option",{attrs:{value:"BDT",label:"Bangladeshi taka"}},[a._v("BDT - Bangladeshi taka")]),l("option",{attrs:{value:"BGN",label:"Bulgarian lev"}},[a._v("BGN - Bulgarian lev")]),l("option",{attrs:{value:"BHD",label:"Bahraini dinar"}},[a._v("BHD - Bahraini dinar")]),l("option",{attrs:{value:"BIF",label:"Burundian franc"}},[a._v("BIF - Burundian franc")]),l("option",{attrs:{value:"BMD",label:"Bermudian dollar"}},[a._v("BMD - Bermudian dollar")]),l("option",{attrs:{value:"BND",label:"Brunei dollar"}},[a._v("BND - Brunei dollar")]),l("option",{attrs:{value:"BOB",label:"Bolivian boliviano"}},[a._v("BOB - Bolivian boliviano")]),l("option",{attrs:{value:"BRL",label:"Brazilian real"}},[a._v("BRL - Brazilian real")]),l("option",{attrs:{value:"BSD",label:"Bahamian dollar"}},[a._v("BSD - Bahamian dollar")]),l("option",{attrs:{value:"BTN",label:"Bhutanese ngultrum"}},[a._v("BTN - Bhutanese ngultrum")]),l("option",{attrs:{value:"BWP",label:"Botswana pula"}},[a._v("BWP - Botswana pula")]),l("option",{attrs:{value:"BYN",label:"Belarusian ruble"}},[a._v("BYN - Belarusian ruble")]),l("option",{attrs:{value:"BZD",label:"Belize dollar"}},[a._v("BZD - Belize dollar")]),l("option",{attrs:{value:"CAD",label:"Canadian dollar"}},[a._v("CAD - Canadian dollar")]),l("option",{attrs:{value:"CDF",label:"Congolese franc"}},[a._v("CDF - Congolese franc")]),l("option",{attrs:{value:"CHF",label:"Swiss franc"}},[a._v("CHF - Swiss franc")]),l("option",{attrs:{value:"CLP",label:"Chilean peso"}},[a._v("CLP - Chilean peso")]),l("option",{attrs:{value:"CNY",label:"Chinese yuan"}},[a._v("CNY - Chinese yuan")]),l("option",{attrs:{value:"COP",label:"Colombian peso"}},[a._v("COP - Colombian peso")]),l("option",{attrs:{value:"CRC",label:"Costa Rican colón"}},[a._v("CRC - Costa Rican colón")]),l("option",{attrs:{value:"CUC",label:"Cuban convertible peso"}},[a._v("CUC - Cuban convertible peso")]),l("option",{attrs:{value:"CUP",label:"Cuban peso"}},[a._v("CUP - Cuban peso")]),l("option",{attrs:{value:"CVE",label:"Cape Verdean escudo"}},[a._v("CVE - Cape Verdean escudo")]),l("option",{attrs:{value:"CZK",label:"Czech koruna"}},[a._v("CZK - Czech koruna")]),l("option",{attrs:{value:"DJF",label:"Djiboutian franc"}},[a._v("DJF - Djiboutian franc")]),l("option",{attrs:{value:"DKK",label:"Danish krone"}},[a._v("DKK - Danish krone")]),l("option",{attrs:{value:"DOP",label:"Dominican peso"}},[a._v("DOP - Dominican peso")]),l("option",{attrs:{value:"DZD",label:"Algerian dinar"}},[a._v("DZD - Algerian dinar")]),l("option",{attrs:{value:"EGP",label:"Egyptian pound"}},[a._v("EGP - Egyptian pound")]),l("option",{attrs:{value:"ERN",label:"Eritrean nakfa"}},[a._v("ERN - Eritrean nakfa")]),l("option",{attrs:{value:"ETB",label:"Ethiopian birr"}},[a._v("ETB - Ethiopian birr")]),l("option",{attrs:{value:"EUR",label:"EURO"}},[a._v("EUR - EURO")]),l("option",{attrs:{value:"FJD",label:"Fijian dollar"}},[a._v("FJD - Fijian dollar")]),l("option",{attrs:{value:"FKP",label:"Falkland Islands pound"}},[a._v("FKP - Falkland Islands pound")]),l("option",{attrs:{value:"GBP",label:"British pound"}},[a._v("GBP - British pound")]),l("option",{attrs:{value:"GEL",label:"Georgian lari"}},[a._v("GEL - Georgian lari")]),l("option",{attrs:{value:"GGP",label:"Guernsey pound"}},[a._v("GGP - Guernsey pound")]),l("option",{attrs:{value:"GHS",label:"Ghanaian cedi"}},[a._v("GHS - Ghanaian cedi")]),l("option",{attrs:{value:"GIP",label:"Gibraltar pound"}},[a._v("GIP - Gibraltar pound")]),l("option",{attrs:{value:"GMD",label:"Gambian dalasi"}},[a._v("GMD - Gambian dalasi")]),l("option",{attrs:{value:"GNF",label:"Guinean franc"}},[a._v("GNF - Guinean franc")]),l("option",{attrs:{value:"GTQ",label:"Guatemalan quetzal"}},[a._v("GTQ - Guatemalan quetzal")]),l("option",{attrs:{value:"GYD",label:"Guyanese dollar"}},[a._v("GYD - Guyanese dollar")]),l("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),l("option",{attrs:{value:"HNL",label:"Honduran lempira"}},[a._v("HNL - Honduran lempira")]),l("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),l("option",{attrs:{value:"HRK",label:"Croatian kuna"}},[a._v("HRK - Croatian kuna")]),l("option",{attrs:{value:"HTG",label:"Haitian gourde"}},[a._v("HTG - Haitian gourde")]),l("option",{attrs:{value:"HUF",label:"Hungarian forint"}},[a._v("HUF - Hungarian forint")]),l("option",{attrs:{value:"IDR",label:"Indonesian rupiah"}},[a._v("IDR - Indonesian rupiah")]),l("option",{attrs:{value:"ILS",label:"Israeli new shekel"}},[a._v("ILS - Israeli new shekel")]),l("option",{attrs:{value:"IMP",label:"Manx pound"}},[a._v("IMP - Manx pound")]),l("option",{attrs:{value:"INR",label:"Indian rupee"}},[a._v("INR - Indian rupee")]),l("option",{attrs:{value:"IQD",label:"Iraqi dinar"}},[a._v("IQD - Iraqi dinar")]),l("option",{attrs:{value:"IRR",label:"Iranian rial"}},[a._v("IRR - Iranian rial")]),l("option",{attrs:{value:"ISK",label:"Icelandic króna"}},[a._v("ISK - Icelandic króna")]),l("option",{attrs:{value:"JEP",label:"Jersey pound"}},[a._v("JEP - Jersey pound")]),l("option",{attrs:{value:"JMD",label:"Jamaican dollar"}},[a._v("JMD - Jamaican dollar")]),l("option",{attrs:{value:"JOD",label:"Jordanian dinar"}},[a._v("JOD - Jordanian dinar")]),l("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),l("option",{attrs:{value:"KES",label:"Kenyan shilling"}},[a._v("KES - Kenyan shilling")]),l("option",{attrs:{value:"KGS",label:"Kyrgyzstani som"}},[a._v("KGS - Kyrgyzstani som")]),l("option",{attrs:{value:"KHR",label:"Cambodian riel"}},[a._v("KHR - Cambodian riel")]),l("option",{attrs:{value:"KID",label:"Kiribati dollar"}},[a._v("KID - Kiribati dollar")]),l("option",{attrs:{value:"KMF",label:"Comorian franc"}},[a._v("KMF - Comorian franc")]),l("option",{attrs:{value:"KPW",label:"North Korean won"}},[a._v("KPW - North Korean won")]),l("option",{attrs:{value:"KRW",label:"South Korean won"}},[a._v("KRW - South Korean won")]),l("option",{attrs:{value:"KWD",label:"Kuwaiti dinar"}},[a._v("KWD - Kuwaiti dinar")]),l("option",{attrs:{value:"KYD",label:"Cayman Islands dollar"}},[a._v("KYD - Cayman Islands dollar")]),l("option",{attrs:{value:"KZT",label:"Kazakhstani tenge"}},[a._v("KZT - Kazakhstani tenge")]),l("option",{attrs:{value:"LAK",label:"Lao kip"}},[a._v("LAK - Lao kip")]),l("option",{attrs:{value:"LBP",label:"Lebanese pound"}},[a._v("LBP - Lebanese pound")]),l("option",{attrs:{value:"LKR",label:"Sri Lankan rupee"}},[a._v("LKR - Sri Lankan rupee")]),l("option",{attrs:{value:"LRD",label:"Liberian dollar"}},[a._v("LRD - Liberian dollar")]),l("option",{attrs:{value:"LSL",label:"Lesotho loti"}},[a._v("LSL - Lesotho loti")]),l("option",{attrs:{value:"LYD",label:"Libyan dinar"}},[a._v("LYD - Libyan dinar")]),l("option",{attrs:{value:"MAD",label:"Moroccan dirham"}},[a._v("MAD - Moroccan dirham")]),l("option",{attrs:{value:"MDL",label:"Moldovan leu"}},[a._v("MDL - Moldovan leu")]),l("option",{attrs:{value:"MGA",label:"Malagasy ariary"}},[a._v("MGA - Malagasy ariary")]),l("option",{attrs:{value:"MKD",label:"Macedonian denar"}},[a._v("MKD - Macedonian denar")]),l("option",{attrs:{value:"MMK",label:"Burmese kyat"}},[a._v("MMK - Burmese kyat")]),l("option",{attrs:{value:"MNT",label:"Mongolian tögrög"}},[a._v("MNT - Mongolian tögrög")]),l("option",{attrs:{value:"MOP",label:"Macanese pataca"}},[a._v("MOP - Macanese pataca")]),l("option",{attrs:{value:"MRU",label:"Mauritanian ouguiya"}},[a._v("MRU - Mauritanian ouguiya")]),l("option",{attrs:{value:"MUR",label:"Mauritian rupee"}},[a._v("MUR - Mauritian rupee")]),l("option",{attrs:{value:"MVR",label:"Maldivian rufiyaa"}},[a._v("MVR - Maldivian rufiyaa")]),l("option",{attrs:{value:"MWK",label:"Malawian kwacha"}},[a._v("MWK - Malawian kwacha")]),l("option",{attrs:{value:"MXN",label:"Mexican peso"}},[a._v("MXN - Mexican peso")]),l("option",{attrs:{value:"MYR",label:"Malaysian ringgit"}},[a._v("MYR - Malaysian ringgit")]),l("option",{attrs:{value:"MZN",label:"Mozambican metical"}},[a._v("MZN - Mozambican metical")]),l("option",{attrs:{value:"NAD",label:"Namibian dollar"}},[a._v("NAD - Namibian dollar")]),l("option",{attrs:{value:"NGN",label:"Nigerian naira"}},[a._v("NGN - Nigerian naira")]),l("option",{attrs:{value:"NIO",label:"Nicaraguan córdoba"}},[a._v("NIO - Nicaraguan córdoba")]),l("option",{attrs:{value:"NOK",label:"Norwegian krone"}},[a._v("NOK - Norwegian krone")]),l("option",{attrs:{value:"NPR",label:"Nepalese rupee"}},[a._v("NPR - Nepalese rupee")]),l("option",{attrs:{value:"NZD",label:"New Zealand dollar"}},[a._v("NZD - New Zealand dollar")]),l("option",{attrs:{value:"OMR",label:"Omani rial"}},[a._v("OMR - Omani rial")]),l("option",{attrs:{value:"PAB",label:"Panamanian balboa"}},[a._v("PAB - Panamanian balboa")]),l("option",{attrs:{value:"PEN",label:"Peruvian sol"}},[a._v("PEN - Peruvian sol")]),l("option",{attrs:{value:"PGK",label:"Papua New Guinean kina"}},[a._v("PGK - Papua New Guinean kina")]),l("option",{attrs:{value:"PHP",label:"Philippine peso"}},[a._v("PHP - Philippine peso")]),l("option",{attrs:{value:"PKR",label:"Pakistani rupee"}},[a._v("PKR - Pakistani rupee")]),l("option",{attrs:{value:"PLN",label:"Polish złoty"}},[a._v("PLN - Polish złoty")]),l("option",{attrs:{value:"PRB",label:"Transnistrian ruble"}},[a._v("PRB - Transnistrian ruble")]),l("option",{attrs:{value:"PYG",label:"Paraguayan guaraní"}},[a._v("PYG - Paraguayan guaraní")]),l("option",{attrs:{value:"QAR",label:"Qatari riyal"}},[a._v("QAR - Qatari riyal")]),l("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),l("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),l("option",{attrs:{value:"RSD",label:"Serbian dinar"}},[a._v("RSD - Serbian dinar")]),l("option",{attrs:{value:"RUB",label:"Russian ruble"}},[a._v("RUB - Russian ruble")]),l("option",{attrs:{value:"RWF",label:"Rwandan franc"}},[a._v("RWF - Rwandan franc")]),l("option",{attrs:{value:"SAR",label:"Saudi riyal"}},[a._v("SAR - Saudi riyal")]),l("option",{attrs:{value:"SEK",label:"Swedish krona"}},[a._v("SEK - Swedish krona")]),l("option",{attrs:{value:"SGD",label:"Singapore dollar"}},[a._v("SGD - Singapore dollar")]),l("option",{attrs:{value:"SHP",label:"Saint Helena pound"}},[a._v("SHP - Saint Helena pound")]),l("option",{attrs:{value:"SLL",label:"Sierra Leonean leone"}},[a._v("SLL - Sierra Leonean leone")]),l("option",{attrs:{value:"SLS",label:"Somaliland shilling"}},[a._v("SLS - Somaliland shilling")]),l("option",{attrs:{value:"SOS",label:"Somali shilling"}},[a._v("SOS - Somali shilling")]),l("option",{attrs:{value:"SRD",label:"Surinamese dollar"}},[a._v("SRD - Surinamese dollar")]),l("option",{attrs:{value:"SSP",label:"South Sudanese pound"}},[a._v("SSP - South Sudanese pound")]),l("option",{attrs:{value:"STN",label:"São Tomé and Príncipe dobra"}},[a._v("STN - São Tomé and Príncipe dobra")]),l("option",{attrs:{value:"SYP",label:"Syrian pound"}},[a._v("SYP - Syrian pound")]),l("option",{attrs:{value:"SZL",label:"Swazi lilangeni"}},[a._v("SZL - Swazi lilangeni")]),l("option",{attrs:{value:"THB",label:"Thai baht"}},[a._v("THB - Thai baht")]),l("option",{attrs:{value:"TJS",label:"Tajikistani somoni"}},[a._v("TJS - Tajikistani somoni")]),l("option",{attrs:{value:"TMT",label:"Turkmenistan manat"}},[a._v("TMT - Turkmenistan manat")]),l("option",{attrs:{value:"TND",label:"Tunisian dinar"}},[a._v("TND - Tunisian dinar")]),l("option",{attrs:{value:"TOP",label:"Tongan paʻanga"}},[a._v("TOP - Tongan paʻanga")]),l("option",{attrs:{value:"TRY",label:"Turkish lira"}},[a._v("TRY - Turkish lira")]),l("option",{attrs:{value:"TTD",label:"Trinidad and Tobago dollar"}},[a._v("TTD - Trinidad and Tobago dollar")]),l("option",{attrs:{value:"TVD",label:"Tuvaluan dollar"}},[a._v("TVD - Tuvaluan dollar")]),l("option",{attrs:{value:"TWD",label:"New Taiwan dollar"}},[a._v("TWD - New Taiwan dollar")]),l("option",{attrs:{value:"TZS",label:"Tanzanian shilling"}},[a._v("TZS - Tanzanian shilling")]),l("option",{attrs:{value:"UAH",label:"Ukrainian hryvnia"}},[a._v("UAH - Ukrainian hryvnia")]),l("option",{attrs:{value:"UGX",label:"Ugandan shilling"}},[a._v("UGX - Ugandan shilling")]),l("option",{attrs:{value:"USD",label:"United States dollar"}},[a._v("USD - United States dollar")]),l("option",{attrs:{value:"UYU",label:"Uruguayan peso"}},[a._v("UYU - Uruguayan peso")]),l("option",{attrs:{value:"UZS",label:"Uzbekistani soʻm"}},[a._v("UZS - Uzbekistani soʻm")]),l("option",{attrs:{value:"VES",label:"Venezuelan bolívar soberano"}},[a._v("VES - Venezuelan bolívar soberano")]),l("option",{attrs:{value:"VND",label:"Vietnamese đồng"}},[a._v("VND - Vietnamese đồng")]),l("option",{attrs:{value:"VUV",label:"Vanuatu vatu"}},[a._v("VUV - Vanuatu vatu")]),l("option",{attrs:{value:"WST",label:"Samoan tālā"}},[a._v("WST - Samoan tālā")]),l("option",{attrs:{value:"XAF",label:"Central African CFA franc"}},[a._v("XAF - Central African CFA franc")]),l("option",{attrs:{value:"XCD",label:"Eastern Caribbean dollar"}},[a._v("XCD - Eastern Caribbean dollar")]),l("option",{attrs:{value:"XOF",label:"West African CFA franc"}},[a._v("XOF - West African CFA franc")]),l("option",{attrs:{value:"XPF",label:"CFP franc"}},[a._v("XPF - CFP franc")]),l("option",{attrs:{value:"ZAR",label:"South African rand"}},[a._v("ZAR - South African rand")]),l("option",{attrs:{value:"ZMW",label:"Zambian kwacha"}},[a._v("ZMW - Zambian kwacha")]),l("option",{attrs:{value:"ZWB",label:"Zimbabwean bonds"}},[a._v("ZWB - Zimbabwean bonds")])]),l("label",{attrs:{for:"base"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:a.base,expression:"base"}],attrs:{type:"text",id:"base"},domProps:{value:a.base},on:{input:function(e){e.target.composing||(a.base=e.target.value)}}})])])])])]),l("div",{staticClass:"container"},[l("div",{staticClass:"currency"},[l("p",[l("label",{attrs:{for:"destinationCurrency"}},[a._v(" Destination Currency "),l("select",{directives:[{name:"model",rawName:"v-model",value:a.destinationCurrency,expression:"destinationCurrency"}],attrs:{id:"destinationCurrency"},on:{change:function(e){var l=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.destinationCurrency=e.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"USD",selected:"selected",label:"US dollar"}},[a._v("USD - US dollar")]),l("option",{attrs:{value:"EUR",label:"Euro"}},[a._v("EUR - Euro")]),l("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),l("option",{attrs:{value:"GBP",label:"Pound sterling"}},[a._v("GBP - Pound sterling")]),l("option",{attrs:{disabled:""}},[a._v("──────────")]),l("option",{attrs:{value:"AED",label:"United Arab Emirates dirham"}},[a._v("AED - United Arab Emirates dirham")]),l("option",{attrs:{value:"AFN",label:"Afghan afghani"}},[a._v("AFN - Afghan afghani")]),l("option",{attrs:{value:"ALL",label:"Albanian lek"}},[a._v("ALL - Albanian lek")]),l("option",{attrs:{value:"AMD",label:"Armenian dram"}},[a._v("AMD - Armenian dram")]),l("option",{attrs:{value:"ANG",label:"Netherlands Antillean guilder"}},[a._v("ANG - Netherlands Antillean guilder")]),l("option",{attrs:{value:"AOA",label:"Angolan kwanza"}},[a._v("AOA - Angolan kwanza")]),l("option",{attrs:{value:"ARS",label:"Argentine peso"}},[a._v("ARS - Argentine peso")]),l("option",{attrs:{value:"AUD",label:"Australian dollar"}},[a._v("AUD - Australian dollar")]),l("option",{attrs:{value:"AWG",label:"Aruban florin"}},[a._v("AWG - Aruban florin")]),l("option",{attrs:{value:"AZN",label:"Azerbaijani manat"}},[a._v("AZN - Azerbaijani manat")]),l("option",{attrs:{value:"BAM",label:"Bosnia and Herzegovina convertible mark"}},[a._v("BAM - Bosnia and Herzegovina convertible mark")]),l("option",{attrs:{value:"BBD",label:"Barbadian dollar"}},[a._v("BBD - Barbadian dollar")]),l("option",{attrs:{value:"BDT",label:"Bangladeshi taka"}},[a._v("BDT - Bangladeshi taka")]),l("option",{attrs:{value:"BGN",label:"Bulgarian lev"}},[a._v("BGN - Bulgarian lev")]),l("option",{attrs:{value:"BHD",label:"Bahraini dinar"}},[a._v("BHD - Bahraini dinar")]),l("option",{attrs:{value:"BIF",label:"Burundian franc"}},[a._v("BIF - Burundian franc")]),l("option",{attrs:{value:"BMD",label:"Bermudian dollar"}},[a._v("BMD - Bermudian dollar")]),l("option",{attrs:{value:"BND",label:"Brunei dollar"}},[a._v("BND - Brunei dollar")]),l("option",{attrs:{value:"BOB",label:"Bolivian boliviano"}},[a._v("BOB - Bolivian boliviano")]),l("option",{attrs:{value:"BRL",label:"Brazilian real"}},[a._v("BRL - Brazilian real")]),l("option",{attrs:{value:"BSD",label:"Bahamian dollar"}},[a._v("BSD - Bahamian dollar")]),l("option",{attrs:{value:"BTN",label:"Bhutanese ngultrum"}},[a._v("BTN - Bhutanese ngultrum")]),l("option",{attrs:{value:"BWP",label:"Botswana pula"}},[a._v("BWP - Botswana pula")]),l("option",{attrs:{value:"BYN",label:"Belarusian ruble"}},[a._v("BYN - Belarusian ruble")]),l("option",{attrs:{value:"BZD",label:"Belize dollar"}},[a._v("BZD - Belize dollar")]),l("option",{attrs:{value:"CAD",label:"Canadian dollar"}},[a._v("CAD - Canadian dollar")]),l("option",{attrs:{value:"CDF",label:"Congolese franc"}},[a._v("CDF - Congolese franc")]),l("option",{attrs:{value:"CHF",label:"Swiss franc"}},[a._v("CHF - Swiss franc")]),l("option",{attrs:{value:"CLP",label:"Chilean peso"}},[a._v("CLP - Chilean peso")]),l("option",{attrs:{value:"CNY",label:"Chinese yuan"}},[a._v("CNY - Chinese yuan")]),l("option",{attrs:{value:"COP",label:"Colombian peso"}},[a._v("COP - Colombian peso")]),l("option",{attrs:{value:"CRC",label:"Costa Rican colón"}},[a._v("CRC - Costa Rican colón")]),l("option",{attrs:{value:"CUC",label:"Cuban convertible peso"}},[a._v("CUC - Cuban convertible peso")]),l("option",{attrs:{value:"CUP",label:"Cuban peso"}},[a._v("CUP - Cuban peso")]),l("option",{attrs:{value:"CVE",label:"Cape Verdean escudo"}},[a._v("CVE - Cape Verdean escudo")]),l("option",{attrs:{value:"CZK",label:"Czech koruna"}},[a._v("CZK - Czech koruna")]),l("option",{attrs:{value:"DJF",label:"Djiboutian franc"}},[a._v("DJF - Djiboutian franc")]),l("option",{attrs:{value:"DKK",label:"Danish krone"}},[a._v("DKK - Danish krone")]),l("option",{attrs:{value:"DOP",label:"Dominican peso"}},[a._v("DOP - Dominican peso")]),l("option",{attrs:{value:"DZD",label:"Algerian dinar"}},[a._v("DZD - Algerian dinar")]),l("option",{attrs:{value:"EGP",label:"Egyptian pound"}},[a._v("EGP - Egyptian pound")]),l("option",{attrs:{value:"ERN",label:"Eritrean nakfa"}},[a._v("ERN - Eritrean nakfa")]),l("option",{attrs:{value:"ETB",label:"Ethiopian birr"}},[a._v("ETB - Ethiopian birr")]),l("option",{attrs:{value:"EUR",label:"EURO"}},[a._v("EUR - EURO")]),l("option",{attrs:{value:"FJD",label:"Fijian dollar"}},[a._v("FJD - Fijian dollar")]),l("option",{attrs:{value:"FKP",label:"Falkland Islands pound"}},[a._v("FKP - Falkland Islands pound")]),l("option",{attrs:{value:"GBP",label:"British pound"}},[a._v("GBP - British pound")]),l("option",{attrs:{value:"GEL",label:"Georgian lari"}},[a._v("GEL - Georgian lari")]),l("option",{attrs:{value:"GGP",label:"Guernsey pound"}},[a._v("GGP - Guernsey pound")]),l("option",{attrs:{value:"GHS",label:"Ghanaian cedi"}},[a._v("GHS - Ghanaian cedi")]),l("option",{attrs:{value:"GIP",label:"Gibraltar pound"}},[a._v("GIP - Gibraltar pound")]),l("option",{attrs:{value:"GMD",label:"Gambian dalasi"}},[a._v("GMD - Gambian dalasi")]),l("option",{attrs:{value:"GNF",label:"Guinean franc"}},[a._v("GNF - Guinean franc")]),l("option",{attrs:{value:"GTQ",label:"Guatemalan quetzal"}},[a._v("GTQ - Guatemalan quetzal")]),l("option",{attrs:{value:"GYD",label:"Guyanese dollar"}},[a._v("GYD - Guyanese dollar")]),l("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),l("option",{attrs:{value:"HNL",label:"Honduran lempira"}},[a._v("HNL - Honduran lempira")]),l("option",{attrs:{value:"HKD",label:"Hong Kong dollar"}},[a._v("HKD - Hong Kong dollar")]),l("option",{attrs:{value:"HRK",label:"Croatian kuna"}},[a._v("HRK - Croatian kuna")]),l("option",{attrs:{value:"HTG",label:"Haitian gourde"}},[a._v("HTG - Haitian gourde")]),l("option",{attrs:{value:"HUF",label:"Hungarian forint"}},[a._v("HUF - Hungarian forint")]),l("option",{attrs:{value:"IDR",label:"Indonesian rupiah"}},[a._v("IDR - Indonesian rupiah")]),l("option",{attrs:{value:"ILS",label:"Israeli new shekel"}},[a._v("ILS - Israeli new shekel")]),l("option",{attrs:{value:"IMP",label:"Manx pound"}},[a._v("IMP - Manx pound")]),l("option",{attrs:{value:"INR",label:"Indian rupee"}},[a._v("INR - Indian rupee")]),l("option",{attrs:{value:"IQD",label:"Iraqi dinar"}},[a._v("IQD - Iraqi dinar")]),l("option",{attrs:{value:"IRR",label:"Iranian rial"}},[a._v("IRR - Iranian rial")]),l("option",{attrs:{value:"ISK",label:"Icelandic króna"}},[a._v("ISK - Icelandic króna")]),l("option",{attrs:{value:"JEP",label:"Jersey pound"}},[a._v("JEP - Jersey pound")]),l("option",{attrs:{value:"JMD",label:"Jamaican dollar"}},[a._v("JMD - Jamaican dollar")]),l("option",{attrs:{value:"JOD",label:"Jordanian dinar"}},[a._v("JOD - Jordanian dinar")]),l("option",{attrs:{value:"JPY",label:"Japanese yen"}},[a._v("JPY - Japanese yen")]),l("option",{attrs:{value:"KES",label:"Kenyan shilling"}},[a._v("KES - Kenyan shilling")]),l("option",{attrs:{value:"KGS",label:"Kyrgyzstani som"}},[a._v("KGS - Kyrgyzstani som")]),l("option",{attrs:{value:"KHR",label:"Cambodian riel"}},[a._v("KHR - Cambodian riel")]),l("option",{attrs:{value:"KID",label:"Kiribati dollar"}},[a._v("KID - Kiribati dollar")]),l("option",{attrs:{value:"KMF",label:"Comorian franc"}},[a._v("KMF - Comorian franc")]),l("option",{attrs:{value:"KPW",label:"North Korean won"}},[a._v("KPW - North Korean won")]),l("option",{attrs:{value:"KRW",label:"South Korean won"}},[a._v("KRW - South Korean won")]),l("option",{attrs:{value:"KWD",label:"Kuwaiti dinar"}},[a._v("KWD - Kuwaiti dinar")]),l("option",{attrs:{value:"KYD",label:"Cayman Islands dollar"}},[a._v("KYD - Cayman Islands dollar")]),l("option",{attrs:{value:"KZT",label:"Kazakhstani tenge"}},[a._v("KZT - Kazakhstani tenge")]),l("option",{attrs:{value:"LAK",label:"Lao kip"}},[a._v("LAK - Lao kip")]),l("option",{attrs:{value:"LBP",label:"Lebanese pound"}},[a._v("LBP - Lebanese pound")]),l("option",{attrs:{value:"LKR",label:"Sri Lankan rupee"}},[a._v("LKR - Sri Lankan rupee")]),l("option",{attrs:{value:"LRD",label:"Liberian dollar"}},[a._v("LRD - Liberian dollar")]),l("option",{attrs:{value:"LSL",label:"Lesotho loti"}},[a._v("LSL - Lesotho loti")]),l("option",{attrs:{value:"LYD",label:"Libyan dinar"}},[a._v("LYD - Libyan dinar")]),l("option",{attrs:{value:"MAD",label:"Moroccan dirham"}},[a._v("MAD - Moroccan dirham")]),l("option",{attrs:{value:"MDL",label:"Moldovan leu"}},[a._v("MDL - Moldovan leu")]),l("option",{attrs:{value:"MGA",label:"Malagasy ariary"}},[a._v("MGA - Malagasy ariary")]),l("option",{attrs:{value:"MKD",label:"Macedonian denar"}},[a._v("MKD - Macedonian denar")]),l("option",{attrs:{value:"MMK",label:"Burmese kyat"}},[a._v("MMK - Burmese kyat")]),l("option",{attrs:{value:"MNT",label:"Mongolian tögrög"}},[a._v("MNT - Mongolian tögrög")]),l("option",{attrs:{value:"MOP",label:"Macanese pataca"}},[a._v("MOP - Macanese pataca")]),l("option",{attrs:{value:"MRU",label:"Mauritanian ouguiya"}},[a._v("MRU - Mauritanian ouguiya")]),l("option",{attrs:{value:"MUR",label:"Mauritian rupee"}},[a._v("MUR - Mauritian rupee")]),l("option",{attrs:{value:"MVR",label:"Maldivian rufiyaa"}},[a._v("MVR - Maldivian rufiyaa")]),l("option",{attrs:{value:"MWK",label:"Malawian kwacha"}},[a._v("MWK - Malawian kwacha")]),l("option",{attrs:{value:"MXN",label:"Mexican peso"}},[a._v("MXN - Mexican peso")]),l("option",{attrs:{value:"MYR",label:"Malaysian ringgit"}},[a._v("MYR - Malaysian ringgit")]),l("option",{attrs:{value:"MZN",label:"Mozambican metical"}},[a._v("MZN - Mozambican metical")]),l("option",{attrs:{value:"NAD",label:"Namibian dollar"}},[a._v("NAD - Namibian dollar")]),l("option",{attrs:{value:"NGN",label:"Nigerian naira"}},[a._v("NGN - Nigerian naira")]),l("option",{attrs:{value:"NIO",label:"Nicaraguan córdoba"}},[a._v("NIO - Nicaraguan córdoba")]),l("option",{attrs:{value:"NOK",label:"Norwegian krone"}},[a._v("NOK - Norwegian krone")]),l("option",{attrs:{value:"NPR",label:"Nepalese rupee"}},[a._v("NPR - Nepalese rupee")]),l("option",{attrs:{value:"NZD",label:"New Zealand dollar"}},[a._v("NZD - New Zealand dollar")]),l("option",{attrs:{value:"OMR",label:"Omani rial"}},[a._v("OMR - Omani rial")]),l("option",{attrs:{value:"PAB",label:"Panamanian balboa"}},[a._v("PAB - Panamanian balboa")]),l("option",{attrs:{value:"PEN",label:"Peruvian sol"}},[a._v("PEN - Peruvian sol")]),l("option",{attrs:{value:"PGK",label:"Papua New Guinean kina"}},[a._v("PGK - Papua New Guinean kina")]),l("option",{attrs:{value:"PHP",label:"Philippine peso"}},[a._v("PHP - Philippine peso")]),l("option",{attrs:{value:"PKR",label:"Pakistani rupee"}},[a._v("PKR - Pakistani rupee")]),l("option",{attrs:{value:"PLN",label:"Polish złoty"}},[a._v("PLN - Polish złoty")]),l("option",{attrs:{value:"PRB",label:"Transnistrian ruble"}},[a._v("PRB - Transnistrian ruble")]),l("option",{attrs:{value:"PYG",label:"Paraguayan guaraní"}},[a._v("PYG - Paraguayan guaraní")]),l("option",{attrs:{value:"QAR",label:"Qatari riyal"}},[a._v("QAR - Qatari riyal")]),l("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),l("option",{attrs:{value:"RON",label:"Romanian leu"}},[a._v("RON - Romanian leu")]),l("option",{attrs:{value:"RSD",label:"Serbian dinar"}},[a._v("RSD - Serbian dinar")]),l("option",{attrs:{value:"RUB",label:"Russian ruble"}},[a._v("RUB - Russian ruble")]),l("option",{attrs:{value:"RWF",label:"Rwandan franc"}},[a._v("RWF - Rwandan franc")]),l("option",{attrs:{value:"SAR",label:"Saudi riyal"}},[a._v("SAR - Saudi riyal")]),l("option",{attrs:{value:"SEK",label:"Swedish krona"}},[a._v("SEK - Swedish krona")]),l("option",{attrs:{value:"SGD",label:"Singapore dollar"}},[a._v("SGD - Singapore dollar")]),l("option",{attrs:{value:"SHP",label:"Saint Helena pound"}},[a._v("SHP - Saint Helena pound")]),l("option",{attrs:{value:"SLL",label:"Sierra Leonean leone"}},[a._v("SLL - Sierra Leonean leone")]),l("option",{attrs:{value:"SLS",label:"Somaliland shilling"}},[a._v("SLS - Somaliland shilling")]),l("option",{attrs:{value:"SOS",label:"Somali shilling"}},[a._v("SOS - Somali shilling")]),l("option",{attrs:{value:"SRD",label:"Surinamese dollar"}},[a._v("SRD - Surinamese dollar")]),l("option",{attrs:{value:"SSP",label:"South Sudanese pound"}},[a._v("SSP - South Sudanese pound")]),l("option",{attrs:{value:"STN",label:"São Tomé and Príncipe dobra"}},[a._v("STN - São Tomé and Príncipe dobra")]),l("option",{attrs:{value:"SYP",label:"Syrian pound"}},[a._v("SYP - Syrian pound")]),l("option",{attrs:{value:"SZL",label:"Swazi lilangeni"}},[a._v("SZL - Swazi lilangeni")]),l("option",{attrs:{value:"THB",label:"Thai baht"}},[a._v("THB - Thai baht")]),l("option",{attrs:{value:"TJS",label:"Tajikistani somoni"}},[a._v("TJS - Tajikistani somoni")]),l("option",{attrs:{value:"TMT",label:"Turkmenistan manat"}},[a._v("TMT - Turkmenistan manat")]),l("option",{attrs:{value:"TND",label:"Tunisian dinar"}},[a._v("TND - Tunisian dinar")]),l("option",{attrs:{value:"TOP",label:"Tongan paʻanga"}},[a._v("TOP - Tongan paʻanga")]),l("option",{attrs:{value:"TRY",label:"Turkish lira"}},[a._v("TRY - Turkish lira")]),l("option",{attrs:{value:"TTD",label:"Trinidad and Tobago dollar"}},[a._v("TTD - Trinidad and Tobago dollar")]),l("option",{attrs:{value:"TVD",label:"Tuvaluan dollar"}},[a._v("TVD - Tuvaluan dollar")]),l("option",{attrs:{value:"TWD",label:"New Taiwan dollar"}},[a._v("TWD - New Taiwan dollar")]),l("option",{attrs:{value:"TZS",label:"Tanzanian shilling"}},[a._v("TZS - Tanzanian shilling")]),l("option",{attrs:{value:"UAH",label:"Ukrainian hryvnia"}},[a._v("UAH - Ukrainian hryvnia")]),l("option",{attrs:{value:"UGX",label:"Ugandan shilling"}},[a._v("UGX - Ugandan shilling")]),l("option",{attrs:{value:"USD",label:"United States dollar"}},[a._v("USD - United States dollar")]),l("option",{attrs:{value:"UYU",label:"Uruguayan peso"}},[a._v("UYU - Uruguayan peso")]),l("option",{attrs:{value:"UZS",label:"Uzbekistani soʻm"}},[a._v("UZS - Uzbekistani soʻm")]),l("option",{attrs:{value:"VES",label:"Venezuelan bolívar soberano"}},[a._v("VES - Venezuelan bolívar soberano")]),l("option",{attrs:{value:"VND",label:"Vietnamese đồng"}},[a._v("VND - Vietnamese đồng")]),l("option",{attrs:{value:"VUV",label:"Vanuatu vatu"}},[a._v("VUV - Vanuatu vatu")]),l("option",{attrs:{value:"WST",label:"Samoan tālā"}},[a._v("WST - Samoan tālā")]),l("option",{attrs:{value:"XAF",label:"Central African CFA franc"}},[a._v("XAF - Central African CFA franc")]),l("option",{attrs:{value:"XCD",label:"Eastern Caribbean dollar"}},[a._v("XCD - Eastern Caribbean dollar")]),l("option",{attrs:{value:"XOF",label:"West African CFA franc"}},[a._v("XOF - West African CFA franc")]),l("option",{attrs:{value:"XPF",label:"CFP franc"}},[a._v("XPF - CFP franc")]),l("option",{attrs:{value:"ZAR",label:"South African rand"}},[a._v("ZAR - South African rand")]),l("option",{attrs:{value:"ZMW",label:"Zambian kwacha"}},[a._v("ZMW - Zambian kwacha")]),l("option",{attrs:{value:"ZWB",label:"Zimbabwean bonds"}},[a._v("ZWB - Zimbabwean bonds")])]),l("label",{attrs:{for:"destinationCurrency"}},[l("input",{directives:[{name:"model",rawName:"v-model",value:a.destinationCurrency,expression:"destinationCurrency"}],attrs:{type:"text",id:"destinationCurrency"},domProps:{value:a.destinationCurrency},on:{input:function(e){e.target.composing||(a.destinationCurrency=e.target.value)}}})])])])])]),a._m(1)])]),a.showSpinner?l("spinner"):a._e(),l("div",{staticClass:"results-container"},[a.results?l("div",[a._v(a._s(this.multiplier)+" "+a._s(this.base)+" = "+a._s(this.multiplier*this.results.rates[this.destinationCurrency])+" "+a._s(this.destinationCurrency))]):a._e()])],1)])},b=[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"CurrencyConverter"},[n("h1",[a._v("XchangeCalculator")]),n("img",{attrs:{alt:"CurrencyConverter logo",src:l("3c4b")}})])},function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("p",[l("input",{attrs:{type:"submit",value:"Submit"}})])}],d=l("bc3a"),_=l.n(d),c=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},m=[function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",[l("h2",[a._v("Loading...")]),l("div",{staticClass:"sk-folding-cube"},[l("div",{staticClass:"sk-cube1 sk-cube"}),l("div",{staticClass:"sk-cube2 sk-cube"}),l("div",{staticClass:"sk-cube4 sk-cube"}),l("div",{staticClass:"sk-cube3 sk-cube"})])])}],g={name:"CubeSpinner"},h=g,S=(l("9d0d"),Object(i["a"])(h,c,m,!1,null,"8de00f74",null)),D=S.exports;l("9ddc");var f={name:"CurrencyConverter",data:function(){return{results:null,errors:[],base:"",destinationCurrency:"",showSpinner:!1}},components:{spinner:D},methods:{getRates:function(){var a=this;this.showSpinner=!0,_.a.get("https://api.exchangeratesapi.io/latest",{params:{base:this.base}}).then((function(e){a.showSpinner=!1,a.results=e.data,console.log(a.results)})).catch((function(e){a.showSpinner=!1,a.errors.push(e)}))}}},C=f,P=(l("5103"),Object(i["a"])(C,p,b,!1,null,"e3ea31ec",null)),B=P.exports,A=l("f820"),N=l("3f08");n["a"].use(N["a"]),n["a"].use(v["a"]);var M=[{path:"/",name:"XchangeCalculator",component:B},{path:"/about",name:"About",component:A["default"]}],y=new v["a"]({routes:M}),R=y,T=l("c16e"),K=l.n(T),G={namespace:"weather__"};n["a"].use(K.a,G),n["a"].config.productionTip=!1,new n["a"]({router:R,render:function(a){return a(u)}}).$mount("#app")},6109:function(a,e,l){"use strict";var n=l("5679"),t=l.n(n);e["default"]=t.a},8029:function(a,e,l){},"85ec":function(a,e,l){},"9d0d":function(a,e,l){"use strict";var n=l("8029"),t=l.n(n);t.a},e652:function(a,e,l){"use strict";var n=l("1c6f"),t=l.n(n);t.a},f1ca:function(a,e,l){"use strict";l.d(e,"a",(function(){return n})),l.d(e,"b",(function(){return t}));var n=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("fragment",[n("img",{attrs:{alt:"CurrencyConverter logo",src:l("3c4b")}}),n("h1",[a._v("About the XchangeCalculator")]),n("div",{staticClass:"container"},[n("p",[a._v("This app is designed to provide point-of-sale convenience. Wherever in the world you might need it.")]),n("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"https://github.com/AARosemond/Xchange-Calculator"}},[n("i",{staticClass:"fab fa-github"})])])])},t=[]},f820:function(a,e,l){"use strict";var n=l("f1ca"),t=l("6109"),o=(l("e652"),l("2877")),i=Object(o["a"])(t["default"],n["a"],n["b"],!1,null,"5f2188f3",null);e["default"]=i.exports}});
//# sourceMappingURL=app.830226ec.js.map