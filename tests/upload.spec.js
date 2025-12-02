import{test,expect,chromium}from'@playwright/test';
import { asyncWrapProviders } from 'async_hooks';

test('File upload',async({page})=>{

    await page.goto('https://demoqa.com/upload-download');

    await page.locator('#uploadFile').setInputFiles("C:\\Users\\Techbit\\Downloads\\2e04c3402b39e8910c4a5448f4b61a8e.avif");

    await page.waitForTimeout(5000);
});

test('Remove File',async({page})=>{

    await page.goto('https://demoqa.com/upload-download');

    await page.locator('#uploadFile').setInputFiles("C:\\Users\\Techbit\\Downloads\\2e04c3402b39e8910c4a5448f4b61a8e.avif");

    await page.waitForTimeout(5000)
    await page.locator('#uploadFile').setInputFiles([]);

    await page.waitForTimeout(5000);
});

test('Multiple File Upload',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').
    setInputFiles(['C:\\Users\\Techbit\\Downloads\\2e04c3402b39e8910c4a5448f4b61a8e.avif',
        'C:\\Users\\Techbit\\Downloads\\2e04c3402b39e8910c4a5448f4b61a8e.avif'])

    await page.waitForTimeout(5000);


    await page.locator('#filesToUpload').
    setInputFiles([])

     await expect(await page.locator("ul[id='fileList'] li").textContent()).toContain('No Files Selected');

     await page.waitForTimeout(5000);

});

test.only('Upload File in the new window',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    
    await page1.goto('https://webdriveruniversity.com/index.html');

    const pagePromise = context.waitForEvent('page');
    await page1.locator('#file-upload').click();

    const newpage = await pagePromise;
    await newpage.waitForTimeout(3999);

    const head = await newpage.locator("//h1[normalize-space()='File Upload']").textContent();
    console.log("head is: ", head)

    await expect(head).toBe('File Upload');

    await newpage.locator('#myFile').setInputFiles('C:\\Users\\Techbit\\Downloads\\sampleFile.jpeg');

    await newpage.waitForTimeout(3999);

    newpage.once('dialog',async dialog =>{
       const msg =  dialog.message();
       await expect(msg).toBe('Your file has now been uploaded!');
       dialog.accept();
    })

    await newpage.waitForTimeout(3999);

    await newpage.locator('#submit-button').click();
})
