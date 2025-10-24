import{test,expect}from'@playwright/test';

test('Radio Button',async({page})=>{
    await page.goto("https://demoqa.com/elements");
    await page.locator("//span[normalize-space()='Radio Button']").click();
    const head = await page.locator(".text-center").textContent();
    await expect(head).toBe("Radio Button");
    await page.locator("label[for='yesRadio']").check();
    const yesOutput = await page.locator(".mt-3").textContent();
    await expect(yesOutput).toContain("Yes");
    await expect(await page.locator("label[for='yesRadio']").isChecked()).toBeTruthy();
    await expect(await page.locator("label[for='impressiveRadio']").isChecked()).toBeFalsy();
    await page.waitForTimeout(2000);
    
    await page.locator("label[for='impressiveRadio']").check();
    const impressiveOutput = await page.locator(".mt-3").textContent();
    await expect(impressiveOutput).toContain("Impressive");
    await expect(await page.locator("label[for='impressiveRadio']").isChecked()).toBeTruthy();
    await expect(await page.locator("label[for='yesRadio']").isChecked()).toBeFalsy();

    await page.waitForTimeout(2000);

    

})