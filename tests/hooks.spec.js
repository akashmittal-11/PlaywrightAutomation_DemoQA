import{test,expect}from'@playwright/test';


// for hooks, we need to configure parallel to fullyParallel: false, in playwright.config.js
//before each and after each will run for each test case
//before all and after all will run once for all test cases
let page;

test.beforeEach(async({browser})=>{
page  = await browser.newPage();
await page.goto('https://demoblaze.com/index.html');

    const loginBtn = await page.locator('#login2');
    await loginBtn.click();

    await page.locator('#loginusername').fill('akashmittal');
    await page.locator('#loginpassword').fill('Hosting@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    await page.waitForTimeout(5000);
})

test.afterEach(async()=>{

    await  page.locator('#logout2').click();

})




test('Hooks',async({})=>{

    const userName = await page.locator('#nameofuser').textContent();

    await expect(userName).toContain('Welcome akashmittal');

});

test('Add product to the cart',async({})=>{
/*    await page.goto('https://demoblaze.com/index.html');

    const loginBtn = await page.locator('#login2');
    await loginBtn.click();

    await page.locator('#loginusername').fill('akashmittal');
    await page.locator('#loginpassword').fill('Hosting@123');
    await page.locator("//button[normalize-space()='Log in']").click();

    await page.waitForTimeout(5000);
*/
    const products = await page.$$('.hrefch');


    for(const pro of products){

        const product = await pro.textContent();

        if(product.includes('Samsung galaxy s6')){
            await pro.click();
            break;
        }

    }


    await page.locator("//a[normalize-space()='Add to cart']").click();

    await page.on('dialog',async(dialog)=>{
        const msg = await dialog.message();
        expect(msg).toContain('Product addded');

        await dialog.accept();

    })




})