package com.tau.steps;

import com.tau.base.BaseUtil;
import com.tau.pages.BasePage;
import com.tau.pages.GoogleComPage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class GooglePageStep {

    private WebDriver driver;
    private GoogleComPage googleComPage;
    private BasePage basePage= new BasePage();

    @Before()
    public void setup() {
        driver= basePage.init();
        googleComPage= new GoogleComPage(driver);
    }
    @After()
    public void closeDriver(){
        driver.close();
    }

    @Given("open url {string}")
    public void openUrl(String url) throws InterruptedException {
        googleComPage.gotoURL(url);
//        Thread.sleep(8000);
    }

    @When("search for {string}")
    public void searchFor(String value) {
        googleComPage.enterData(value);
        googleComPage.clickOnEnter();

    }
}
