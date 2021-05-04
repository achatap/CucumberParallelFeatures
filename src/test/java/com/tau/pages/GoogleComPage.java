package com.tau.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class GoogleComPage{

    WebDriver driver;

    public GoogleComPage(WebDriver driver){
        this.driver= driver;
    }
    public void gotoURL(String url){
        System.out.println(">>>>>>>>>>>>>>>>>>>>"+driver);
        driver.get(url);
    }

    public void enterData(String data){
        driver.findElement(By.name("q")).sendKeys(data);
    }

    public void clickOnEnter(){
        driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}
