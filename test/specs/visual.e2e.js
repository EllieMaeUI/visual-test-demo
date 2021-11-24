import {Eyes, Target, ConsoleLogHandler } from '@applitools/eyes-webdriverio';

describe('My first visual test', () => {
  it('should check the webdriver.io website', async () => {
    await browser.url('https://webdriver.io');

    const eyes = new Eyes();
    eyes.setLogHandler(new ConsoleLogHandler(true))
    await eyes.open(browser, "webdriver.io website", "My first webdriver.io test!")
    await eyes.check('home page', Target.window().fully())
    await eyes.close()
  });
});