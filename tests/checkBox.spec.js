import{test,expect} from '@playwright/test';

test('check box',async({page})=>{

    await page.goto('https://demoqa.com/checkbox');
    await page.locator("//button[@title='Toggle']").click();
    await  page.waitForTimeout(3000);

    await expect(await page.locator("(//span[@class='rct-checkbox'])[2]").isChecked()).toBeFalsy();
    await page.locator("(//button[@title='Toggle'])[3]").click();
    await page.locator("(//span[@class='rct-checkbox'])[4]").check();
    await  page.waitForTimeout(3000);
    await page.locator("(//span[@class='rct-checkbox'])[5]").check();
    await  page.waitForTimeout(3000);
    await expect(await page.locator("(//span[@class='rct-checkbox'])[3]").isChecked()).toBeTruthy();

    
})