const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Options } = chrome;

const chromeOptions = new Options();

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

async function openDemoQA() {
  try {
    await driver.get('https://demoqa.com/');
    await driver.wait(until.titleIs('DEMOQA'), 10000);
  } finally {
    await driver.quit();
  }
}

openDemoQA();
