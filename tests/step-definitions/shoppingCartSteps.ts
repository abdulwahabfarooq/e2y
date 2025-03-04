import { Given, When, Then } from '@cucumber/cucumber';
import { Page } from 'playwright';

let page: Page;

Given('the user is on the homepage', async () => {
  page = await browser.newPage();
  await page.goto('http://localhost:3000'); // Update this URL to your test app URL
});

When('the user adds a t-shirt to the cart', async () => {
  const addButton = await page.locator('button.add-to-cart'); // Update the selector to match your button
  await addButton.click();
});

When('the user adds two t-shirts to the cart', async () => {
  const addButton = await page.locator('button.add-to-cart'); // Update the selector to match your button
  await addButton.click();
  await addButton.click();
});

When('the user removes the t-shirt from the cart', async () => {
  const removeButton = await page.locator('button.remove-from-cart'); // Update the selector to match your button
  await removeButton.click();
});

Then('the shopping cart should contain {int} item', async (itemCount: number) => {
  const cartItemCount = await page.locator('.cart-item-count'); // Update the selector to match your cart
  const count = await cartItemCount.textContent();
  if (parseInt(count) !== itemCount) {
    throw new Error(`Expected ${itemCount} item(s) in the cart, but found ${count}`);
  }
});

Then('the shopping cart should be empty', async () => {
  const cartItemCount = await page.locator('.cart-item-count'); // Update the selector to match your cart
  const count = await cartItemCount.textContent();
  if (parseInt(count) !== 0) {
    throw new Error(`Expected the cart to be empty, but found ${count} item(s)`);
  }
});
