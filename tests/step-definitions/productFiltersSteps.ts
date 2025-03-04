import { Given, When, Then } from '@cucumber/cucumber';
import { Page } from 'playwright';

let page: Page;

Given('the user is on the homepage', async () => {
  page = await browser.newPage();
  await page.goto('http://localhost:3000'); // Update this URL to your test app URL
});

When('the user selects a size filter', async () => {
  const sizeFilter = await page.locator('select#size'); // Update the selector to match your size filter
  await sizeFilter.selectOption({ value: 'M' }); // Example: selecting Medium size
});

Then('the displayed t-shirts should be of the selected size', async () => {
  const tshirtSizes = await page.locator('.t-shirt-size'); // Update with correct selector
  const sizeText = await tshirtSizes.textContent();
  if (!sizeText.includes('M')) { // Assuming we selected size M
    throw new Error(`Expected t-shirts to be of size M, but found ${sizeText}`);
  }
});

When('the user selects "Order by price" option', async () => {
  const orderByPrice = await page.locator('select#order-by'); // Update the selector to match your order by option
  await orderByPrice.selectOption({ value: 'price' }); // Example option value
});

Then('the t-shirts should be displayed in the correct price order', async () => {
  const prices = await page.locator('.t-shirt-price'); // Update with correct selector
  const priceArray = await prices.evaluateAll((elements) =>
    elements.map((element) => parseFloat(element.textContent.trim().replace('$', '')))
  );
  const sortedPriceArray = [...priceArray].sort((a, b) => a - b);
  if (!priceArray.every((price, index) => price === sortedPriceArray[index])) {
    throw new Error('T-shirts are not ordered by price correctly');
  }
});
