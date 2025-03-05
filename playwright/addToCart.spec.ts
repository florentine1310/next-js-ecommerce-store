import { expect, test } from '@playwright/test';

test('add to cart test', async ({ page }) => {
  await page.goto('/');

  // go to products page
  await page.getByTestId('products-link').click();
  await page.waitForURL('/products');
  await expect(page.getByRole('heading', { name: 'My Plants' })).toBeVisible();
  await page.getByRole('link', { name: 'Snake Plant Snake Plant' }).click();
  await page.waitForURL('/products/1');
  await expect(
    page.getByRole('heading', { name: 'Snake Plant' }),
  ).toBeVisible();
  await page.getByRole('button', { name: '+' }).click();
});
