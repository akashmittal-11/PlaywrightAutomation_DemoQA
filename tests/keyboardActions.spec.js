import{test,expect}from '@playwright/test';

test('Keyboard Action',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill('This is the test text');

    
    await page.waitForTimeout(5000);

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);

})