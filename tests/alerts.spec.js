import{test,expect}from '@playwright/test';

test.skip('Simple Alert',async({page})=>{

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog',async(dialog)=>{
        await expect(dialog.message()).toBe('You clicked a button');
        await expect(dialog.type()).toBe('alert');
        await dialog.accept();
    })

    await page.click('#alertButton');
    await page.waitForTimeout(2000);
})

test.skip('Alert After 5 Seconds',async({page})=>{

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog',async(dialog)=>{
        await expect(dialog.message()).toBe('This alert appeared after 5 seconds');
        await expect(dialog.type()).toBe('alert');
        await dialog.accept();
    })

    await page.click('#timerAlertButton');
    await page.waitForTimeout(5000);
})

test.skip('Confirmation Alert',async({page})=>{

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog',async(dialog)=>{
        await expect(dialog.message()).toBe('Do you confirm action?');
        await expect(dialog.type()).toContain('confirm');
        await dialog.accept();
        // await dialog.dismiss();//to cancel the popup
    })

    await page.click('#confirmButton');
    await page.waitForTimeout(2000);
    await expect(await page.locator('#confirmResult').textContent()).toContain('Ok');
})

test('Prompt Alert',async({page})=>{

    await page.goto('https://demoqa.com/alerts');

    page.on('dialog',async(dialog)=>{
        await expect(dialog.message()).toBe('Please enter your name');
        await expect(dialog.type()).toContain('prompt');
        // await dialog.dismiss();//to cancel the popup
        await dialog.accept('Akash');
    })

    await page.click('#promtButton');
    await page.waitForTimeout(2000);
    await expect(await page.locator('#promptResult').textContent()).toContain('Akash');
})

