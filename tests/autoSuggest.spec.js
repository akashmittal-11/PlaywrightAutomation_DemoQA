import{test,expect}from'@playwright/test';

test('Auto Suggest dropodwn',async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/auto-complete.php');

    await page.locator('#tags').fill('a');

    await page.waitForTimeout(5000);

    await page.locator('#tags').selectOption('Asp');
    await page.waitForTimeout(5000);

})