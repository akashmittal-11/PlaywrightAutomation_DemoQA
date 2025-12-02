import{test,expect}from'@playwright/test';

test('Download PDF File',async({page})=>{

    await page.goto('https://demo.automationtesting.in/FileDownload.html');

    // await page.locator('#pdfbox').fill("This is the test Pdf File");

    // await page.locator('#createPdf').click();

    await page.waitForTimeout(3999);

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click("a[type='button']")
    ]);

// Get temporary file path
  const path = await download.path();
  console.log('File downloaded at (temp location):', path);

  // Save file to your project folder
  await download.saveAs('tests\\downloads\\samplefile.pdf');

  expect(await download.suggestedFilename()).toBe('samplefile.pdf');
})