import{test,expect,chromium}from '@playwright/test';

test('Create New Pages',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto('https://testautomationpractice.blogspot.com/');
    await expect (page1).toHaveTitle('Automation Testing Practice');
    await page1.waitForTimeout(3000);
    
    await page2.goto('https://demoqa.com/');
    await expect (page2).toHaveTitle('DEMOQA');
    await page2.waitForTimeout(3000);

})

test('Handle Multiple Page',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://demoqa.com/browser-windows');
    await expect (page1).toHaveTitle('DEMOQA');
    await page1.waitForTimeout(3000);

    const pagePromise = context.waitForEvent('page')
    await page1.locator('#tabButton').click();
    const newPage = await pagePromise;

    const heading = await newPage.locator('#sampleHeading').textContent();
    await expect(heading).toContain('This is a sample page');

    await newPage.waitForTimeout(3000);
    
})

test.only('Handle Multiple Windows',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://demoqa.com/browser-windows');
    await expect (page1).toHaveTitle('DEMOQA');
    await page1.waitForTimeout(3000);

    const pagePromise = context.waitForEvent('page')
    await page1.locator('#windowButton').click();
    const newPage = await pagePromise;

    const heading = await newPage.locator('#sampleHeading').textContent();
    await expect(heading).toContain('This is a sample page');

    await newPage.waitForTimeout(3000);
    
})

