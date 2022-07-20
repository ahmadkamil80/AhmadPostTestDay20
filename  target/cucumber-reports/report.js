$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/payment/Payment.feature");
formatter.feature({
  "name": "Payment Gateway Poject",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Menambahkan payment baru data terisi lengkap",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "customer sedang berada di halaman add customer \"https://demo.guru99.com/payment-gateway/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_sedang_berada_di_halaman_add_customer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memilih quatity",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memilih_quatity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer menekan buy now",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_menekan_buy_now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memasukan card number \"1234567891234567\"",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memasukan_card_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memilih expiration month",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memilih_expiration_month()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memilih expiration year",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memilih_expiration_year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memasukan cvv code \"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memasukan_cvv_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer menekan pay",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_menekan_pay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer harus mendapatkan pesan sukses \"Payment successfull!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_harus_mendapatkan_pesan_sukses(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Menambahkan payment baru data tidak terisi lengkap",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "customer sedang berada di halaman add customer \"https://demo.guru99.com/payment-gateway/index.php\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_sedang_berada_di_halaman_add_customer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memilih quatity",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memilih_quatity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer menekan buy now",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_menekan_buy_now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memasukan card number \"123456789123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memasukan_card_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memilih expiration month",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memilih_expiration_month()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memilih expiration year",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memilih_expiration_year()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer memasukan cvv code \"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_memasukan_cvv_code(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer menekan pay",
  "keyword": "And "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_menekan_pay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer harus mendapatkan pesan alert \"Check card number is 16 digits!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PaymentDefinitions.customer_harus_mendapatkan_pesan_alert(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});