import{test,expect}from'@playwright/test';

test('Read Data from the webtable',async({page})=>{

        await page.goto("https://demoqa.com/webtables");
        // await page.locator("//span[normalize-space()='Web Tables']").click();
        const head = await page.locator(".text-center").textContent();
        await expect(head).toBe("Web Tables");
/*        await page.locator('#addNewRecordButton').click();
        const popupHead = await page.locator("#registration-form-modal").textContent();
        await expect(popupHead).toContain("Registration Form");
        await page.locator('#firstName').fill('Akash');
        await page.locator('#lastName').fill('Mittal');
        await page.locator('#userEmail').fill('testuser@mail.com');
        await page.getByPlaceholder('Age').fill('30');
        await page.getByPlaceholder('Salary').fill('100000');
        await page.locator('#department').fill('IT');
        await page.locator('#submit').click();
*/

// const table = await page.locator('.rt-tbody');
const rows = await page.locator("//div[@class='rt-tbody']//div[@class='rt-tr-group']");
const numberOfRows = await rows.count();
console.log('Number of rows in the table:',numberOfRows);
// await page.waitForTimeout(5000);
await expect(numberOfRows).toBe(10);

const coulumns = await page.locator("//div[@class='rt-table']//div[@class='rt-resizable-header-content']");
const numberOfCoulmns = await coulumns.count();
console.log('Number of coulumns in the table:',numberOfCoulmns);
await expect(numberOfCoulmns).toBe(7);

/*const matchedRow =rows.filter({
    has: page.locator('.rt-td'),
    hasText: 'Cierra'
})

// console.log(matchedRow);
await page.waitForTimeout(5000);

matchedRow.locator("[title='Edit']").click();
await page.waitForTimeout(5000);
*/

for(let i=0;i<numberOfRows;i++){

    const currentRow = rows.nth(i);
    console.log('Current Row is:',currentRow);
    const columnData = currentRow.locator("//div[@class='rt-td']");
    console.log('Column Data is:',columnData);
    // rows[i];

    for(let j=0;j<await columnData.count()-1;j++){

        const columnValue = await columnData.nth(j).textContent();
        console.log(columnValue);
    }
}



})