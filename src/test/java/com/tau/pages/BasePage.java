package com.tau.pages;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BasePage {

//    public String browser= System.setProperty("browser", "chrome");
public String browser= "chrome";

    public WebDriver driver;

    public WebDriver init(){
        if(browser.contains("chrome")){
            WebDriverManager.chromedriver().setup();
            driver= new ChromeDriver();

        }
        else if(browser.contains("firefox")){
            WebDriverManager.firefoxdriver().setup();
            driver= new ChromeDriver();

        }
        return driver;

    }
    public void tearDown(){
        driver.quit();
    }
}
