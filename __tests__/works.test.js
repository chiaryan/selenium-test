const { Builder, By, Key, until } = require('selenium-webdriver');
const Chrome = require("selenium-webdriver/chrome");

describe("chrome webdriver installed correctly", () => {
    it("does google search", async function test() {
        const options = new Chrome.Options().addArguments("--headless=new");
        const builder = new Builder().forBrowser('chrome').setChromeOptions(options);
        
        const driver = await builder.build();
        
        try {
            await driver.get('http://www.google.com');
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        } finally {
            await driver.quit();
        }
    }, 10000);

});