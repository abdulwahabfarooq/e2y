import { chromium, Browser, Page } from 'playwright';

let browser: Browser;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

export { browser };
