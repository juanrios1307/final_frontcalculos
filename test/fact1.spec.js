// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Fact1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Fact1', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1920, height: 1080 })
    await driver.findElement(By.css(".ant-col:nth-child(2) img")).click()
    await driver.findElement(By.id("register_numero")).click()
    await driver.findElement(By.id("register_numero")).sendKeys("5")
    await driver.findElement(By.css(".ant-btn > span")).click()
    {
      const element = await driver.findElement(By.css(".ant-btn > span"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
  })
})
