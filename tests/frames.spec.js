import{test,expect}from'@playwright/test';

test.skip('Single Frames',async({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html');

    const frameName = await page.frame('SingleFrame');

    // const frameUrl = await page.frame({url:'https://demo.automationtesting.in/SingleFrame.html'});
    frameName.fill("input[type='text']","Akash Mittal");

    await page.waitForTimeout(5000);


})

test('Nested Frames',async({page})=>{

    await page.goto('https://demo.automationtesting.in/Frames.html');

    await page.locator("//a[normalize-space()='Iframe with in an Iframe']").click();

    console.log('Number of frames:',await page.frames().length);

    const frameUrl = await page.frame({url:'https://demo.automationtesting.in/MultipleFrames.html'});

    const childFrame = await frameUrl.childFrames();
    console.log('Number of child frames:',childFrame.length);

    childFrame[0].fill("input[type='text']",'Akash Mittal');

    await page.waitForTimeout(5000);


})