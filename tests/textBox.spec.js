import{test,expect}from'@playwright/test';

test('Text Box',async({page})=>{

    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill('Akashmittal');
    await page.locator('#userEmail').fill('testmail@mail.com');
    await page.getByPlaceholder('Current Address').fill('Mohali');
    await page.locator('#permanentAddress').fill('Chandigarh');
    await page.locator('#submit').click();

    const output = await page.locator('#output').textContent();
    expect(output).toContain('Akashmittal');
})