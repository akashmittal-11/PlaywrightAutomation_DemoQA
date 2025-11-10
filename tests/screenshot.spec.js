import{test,expect} from '@playwright/test';

test('Screen Shot of visible area on the screen',async({page})=>{

    await page.goto('https://demoqa.com/');

    await page.screenshot({path:'tests\\Screenshots\\homepage.png'});
})

test('Full page sceenshot',async({page})=>{

    await page.goto('https://demoqa.com/');

    await page.screenshot({path: 'tests\\Screenshots\\fullPage.png',fullPage:true});
    
});

test('Element Screenshot',async({page})=>{

    await page.goto('https://demoqa.com/');

    const logo = await page.locator("//a[@href='https://demoqa.com']");

    await logo.screenshot({path:'tests\\Screenshots\\logo.png'});

})

/*if user wants to capture the screenshot or record the video after every test then, modify the config file and add
use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
    // screenshot: 'on'
//   },
//   */ 