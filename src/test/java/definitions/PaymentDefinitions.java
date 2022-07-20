package definitions;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PaymentDefinitions {
	WebDriver driver;

	@Given("customer sedang berada di halaman add customer {string}")
	public void customer_sedang_berada_di_halaman_add_customer(String string) {
		System.setProperty("webdriver.chrome.driver", "C:\\webdriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(string);
		this.driver.manage().window().maximize();
	}

	@When("customer memilih quatity")
	public void customer_memilih_quatity() {
		try {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			for (int y = 0; y <= 200; y++) {
				js.executeScript("window.scrollBy(0, " + y + ")");
			}
			Select qty = new Select(driver.findElement(By.xpath("//select[@name='quantity']")));
			qty.selectByIndex(2);
		} catch (Exception e) { }
	}

	@When("customer menekan buy now")
	public void customer_menekan_buy_now() {
		driver.findElement(By.xpath("//input[@value='Buy Now']")).click();
	}

	@When("customer memasukan card number {string}")
	public void customer_memasukan_card_number(String string) {
		try {
			JavascriptExecutor js = (JavascriptExecutor) driver;
			for (int y = 0; y <= 200; y++) {
				js.executeScript("window.scrollBy(0, " + y + ")");
			}
			
			driver.findElement(By.xpath("//input[@id='card_nmuber']")).sendKeys(string);
	
			} catch (Exception e) { }
		
	}

	@When("customer memilih expiration month")
	public void customer_memilih_expiration_month() {
		Select exMonth = new Select(driver.findElement(By.xpath("//select[@id='month']")));
		exMonth.selectByIndex(2);
	}

	@When("customer memilih expiration year")
	public void customer_memilih_expiration_year() {
		Select exYear = new Select(driver.findElement(By.xpath("//select[@id='year']")));
		exYear.selectByIndex(2);
	}

	@When("customer memasukan cvv code {string}")
	public void customer_memasukan_cvv_code(String string) {
		driver.findElement(By.xpath("//input[@id='cvv_code']")).sendKeys(string);
	}

	@When("customer menekan pay")
	public void customer_menekan_pay() {
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	}

	@Then("customer harus mendapatkan pesan sukses {string}")
	public void customer_harus_mendapatkan_pesan_sukses(String string) {
		String actual = driver.findElement(By.xpath("//h2[normalize-space()='Payment successfull!']")).getText();
		assertEquals(actual, string);
		driver.close();
	}

	@Then("customer harus mendapatkan pesan alert {string}")
	public void customer_harus_mendapatkan_pesan_alert(String string) {
		Alert alert = driver.switchTo().alert();
	    String actual = alert.getText();
	    
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    alert.accept();
	    assertEquals(actual, string);
	    driver.close();
	}
}
