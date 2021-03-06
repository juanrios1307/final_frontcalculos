// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Rectangulo1', function() {
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
  it('Rectangulo1', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 1920, height: 1080 })
    await driver.findElement(By.css(".ant-col:nth-child(5) img")).click()
    await driver.findElement(By.id("register_lado1")).click()
    await driver.findElement(By.id("register_lado1")).sendKeys("10")
    await driver.findElement(By.id("register_lado2")).click()
    await driver.findElement(By.id("register_lado2")).sendKeys("1")
    await driver.findElement(By.css(".ant-btn > span")).click()
  })
})
