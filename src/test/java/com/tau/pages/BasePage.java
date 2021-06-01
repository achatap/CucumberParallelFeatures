package com.tau.pages;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.BrowserType;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class BasePage {

//    public String browser= System.setProperty("browser", "chrome");
public String browser= "chrome";

    public WebDriver driver;

    public WebDriver init(){
        if(browser.contains("chrome")){

//            WebDriverManager.chromedriver().setup();
//            DesiredCapabilities dc = DesiredCapabilities.chrome(); //or dc = DesiredCapabilities.chrome();
//			ChromeOptions option = new ChromeOptions();
//			option.addArguments("--no-sandbox");
//			option.addArguments("--disable-dev-shm-usage");
//			option.addArguments("--disable-gpu");
////			option.addArguments("--headless");
//			option.addArguments("--disable-notifications");
////			option.addArguments("use-fake-ui-for-media-stream");
//			dc.setCapability(ChromeOptions.CAPABILITY, option);

//			try {
//				driver= new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), dc);
//			} catch (MalformedURLException e) {
//				e.printStackTrace();
//			}
            WebDriverManager.chromedriver().setup();
            DesiredCapabilities dc = new DesiredCapabilities();
            dc.setCapability(CapabilityType.BROWSER_NAME, BrowserType.CHROME);//or dc = DesiredCapabilities.chrome();
            ChromeOptions option = new ChromeOptions();
			option.addArguments("--no-sandbox");
			option.addArguments("--disable-dev-shm-usage");
			option.addArguments("--disable-gpu");
//			option.addArguments("--headless");
			option.addArguments("--disable-notifications");
//			option.addArguments("use-fake-ui-for-media-stream");
			dc.setCapability(ChromeOptions.CAPABILITY, option);

//            driver= new FirefoxDriver();
            			try {
				driver= new RemoteWebDriver(new URL("http://134.122.112.156/:4444/wd/hub"), dc);
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}


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
