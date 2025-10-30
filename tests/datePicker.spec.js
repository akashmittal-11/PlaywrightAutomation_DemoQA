import{test,expect} from '@playwright/test';

test.skip('Input Date Picker',async({page})=>{


    await page.goto('https://demoqa.com/date-picker');

    await page.fill('#datePickerMonthYearInput', '10/08/2025');

    await page.waitForTimeout(3000);


})


test('Select Date from the Date Picker',async({page})=>{


    await page.goto('https://demoqa.com/date-picker');

    const y = '2020';
    const m = 'August';
    const d = '22';

    await page.click('#dateAndTimePickerInput');

await page.locator('.react-datepicker__year-read-view').click();

while (true) {
    const years = await page.$$('.react-datepicker__year-option');
    let found = false;

    for (const yr of years) {
        const year = (await yr.textContent()).trim();
        if (year === y) {
            console.log("Found year:", year);
            await yr.click();
            found = true;
        break;
        }
    }

    if (found) 
        break;
    // Click navigation only if not found in this batch
    console.log("Year not found, clicking previous...");
    await page.locator('.react-datepicker__navigation--years-previous').click();
    await page.waitForTimeout(5000); // short wait for DOM to update
}

    await page.locator('.react-datepicker__month-read-view').click();

    const months = await page.$$('.react-datepicker__month-option');

    for (let mon of months){

        const month = await mon.textContent();

        if(month == m){
            await mon.click();
            break;
        }
    }

    await page.waitForTimeout(5000);

    const dates = await page.$$('.react-datepicker__day');


    for (let dt of dates){

        const date = await dt.textContent();

        if(date == d){
            await dt.click();
            break;
        }
    }


    await page.waitForTimeout(5000);

})

test.skip('Date Picker from arrows',async({page})=>{


        await page.goto('https://demoqa.com/date-picker');

    const y = '2025';
    const m = 'August';
    const d = '22';

    const reqDate = m + ' ' + y;

    console.log('required date is: ', reqDate);

    await page.click('#datePickerMonthYearInput');


    while(true){

     const currentDate =  await page.locator("//div[contains(@class,'react-datepicker__current-month')]").textContent();

    const selectedDate = currentDate.trim();
    console.log('current date is: ', currentDate);

    const date = await page.$$('.react-datepicker__day');

        if(selectedDate==reqDate){
            for(let dt of date){
                const dateText = await dt.textContent();
                if(dateText==d){{
                    await dt.click();
                    
                }
            }
        }
        break;
    }

    await page.locator("[aria-label='Previous Month']").click();
    await page.waitForTimeout(5000);
}

})