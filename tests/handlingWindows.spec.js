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

test('Handle Multiple Windows',async()=>{
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


test.only('Handle new page',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://webdriveruniversity.com/index.html');

    const pagePromise = context.waitForEvent('page')

    await page1.locator('#contact-us').click();
    const newpage = await pagePromise;

    const heading = await newpage.locator("h2[name='contactme']").textContent();

    await expect(heading).toBe('CONTACT US');

    await newpage.getByPlaceholder('First Name').fill('Test');
    await newpage.getByPlaceholder('Last Name').fill('User');
    await newpage.getByPlaceholder('Email Address').fill('testuser@mail.com');
    await newpage.getByPlaceholder('Comments').fill('This is the test comment');

    await newpage.waitForTimeout(3999);

    await newpage.locator("input[value='SUBMIT']").click();

    const head = await newpage.locator("div[id='contact_reply'] h1").textContent();

    await expect(head).toBe('Thank You for your Message!');
    await newpage.waitForTimeout(3999);

})

