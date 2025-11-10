import{test,expect}from'@playwright/test';

test.skip('Right Click',async({page})=>{

    await page.goto('https://demoqa.com/buttons');

    const rightClickBtn = await page.locator('#rightClickBtn');

    await rightClickBtn.click({button:'right'});

    const msg = await page.locator('#rightClickMessage').textContent();

    const expectedMsg = msg.trim();

    await expect(expectedMsg).toBe('You have done a right click');

    await page.waitForTimeout(2000);

})

test.skip('Mouse Hover',async({page})=>{
    
    await page.goto('https://demoqa.com/tool-tips');

    const toolTipBtn = await page.locator('#toolTipButton');

    await toolTipBtn.hover();

    let toolTipBtnTxt = await page.locator("[class='tooltip-inner']").textContent();

    await expect(toolTipBtnTxt).toBe('You hovered over the Button');
    
})


test('Double Click',async({page})=>{

    await page.goto('https://demoqa.com/buttons');

    const doubleClickBtn = await page.locator('#doubleClickBtn');

    doubleClickBtn.dblclick();

    const msg = await page.locator('#doubleClickMessage').textContent();

    const expectedMsg = msg.trim();

    await expect(expectedMsg).toBe('You have done a double click');
    await page.waitForTimeout(2000);
})

