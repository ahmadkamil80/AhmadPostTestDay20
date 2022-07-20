Feature: Payment Gateway Poject

	Scenario: Menambahkan payment baru data terisi lengkap
		Given customer sedang berada di halaman add customer "https://demo.guru99.com/payment-gateway/index.php"
		When customer memilih quatity
		And customer menekan buy now
		And customer memasukan card number "1234567891234567"
		And customer memilih expiration month
		And customer memilih expiration year
		And customer memasukan cvv code "123"
		And customer menekan pay
		Then customer harus mendapatkan pesan sukses "Payment successfull!"
	
	Scenario: Menambahkan payment baru data tidak terisi lengkap
		Given customer sedang berada di halaman add customer "https://demo.guru99.com/payment-gateway/index.php"
		When customer memilih quatity
		And customer menekan buy now
		And customer memasukan card number "123456789123456"
		And customer memilih expiration month
		And customer memilih expiration year
		And customer memasukan cvv code "123"
		And customer menekan pay
		Then customer harus mendapatkan pesan alert "Check card number is 16 digits!"