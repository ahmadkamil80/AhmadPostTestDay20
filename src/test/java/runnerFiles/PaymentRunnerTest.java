package runnerFiles;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "src/test/resources/payment", 
glue="definitions", 
plugin= {
"pretty", 
"html: target/cucumber-reports", 
"json: target/cucumber-reports/Payment.json"})

public class PaymentRunnerTest extends AbstractTestNGCucumberTests {

}
