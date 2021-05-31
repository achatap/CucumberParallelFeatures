package com.tau.pages;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class BasePage {

//    public String browser= System.setProperty("browser", "chrome");
public String browser= "chrome";

    public WebDriver driver;

    public WebDriver init(){
        if(browser.contains("chrome")){
            WebDriverManager.chromedriver().setup();
            ChromeOptions options= new ChromeOptions();
            options.addArguments("--headless");
//            options.setBinary("/usr/bin/google-chrome");
            driver= new ChromeDriver(options);


        }
        else if(browser.contains("firefox")){
            WebDriverManager.firefoxdriver().setup();
            ChromeOptions options= new ChromeOptions();
            options.addArguments("--headless");
            driver= new ChromeDriver(options);

        }
        return driver;

    }
    public void tearDown(){
        driver.quit();
    }
}
