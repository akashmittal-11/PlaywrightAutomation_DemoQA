import{test,expect}from'@playwright/test';

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

test.only('Multiple File Upload',async({page})=>{

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

