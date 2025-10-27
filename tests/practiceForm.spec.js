import{test,expecte, expect} from '@playwright/test';
import { stat } from 'fs';
test('Practice Form',async({page})=>{
  
    await page.goto('https://demoqa.com/forms');
    await page.setViewportSize({width:1920,height:1080});
    await page.locator("//span[normalize-space()='Practice Form']").click();

    const header = await page.locator('.text-center').textContent();

    await expect(header).toBe('Practice Form');

    await page.locator('#firstName').fill('Akash');
    await page.locator('#lastName').fill('Mittal');
    await page.locator('#userEmail').fill('test@mail.com');
    await page.locator("label[for='gender-radio-1']").check();
    await page.getByPlaceholder('Mobile Number').fill('2134567805');
    await page.locator('#subjectsContainer').click();
    await page.waitForSelector("//span[@class='css-1laao21-a11yText']");
    await page.locator("#subjectsInput").fill('Hi');
    await page.waitForSelector("//div[contains(@class, 'subjects-auto-complete__menu-list')]//div[contains(@id,'react-select-2')]");
    const subjectOptions = await page.$$("//div[contains(@class, 'subjects-auto-complete__menu-list')]//div[contains(@id,'react-select-2')]");

    for(let options of subjectOptions){

        let value = await options.textContent();
        if(value.includes('Hindi')){
            await options.click();
            break;
        }

    }
    await page.waitForTimeout(5000);
    await page.locator("label[for='hobbies-checkbox-1']").check();
    await page.locator("label[for='hobbies-checkbox-3']").check();
    await page.getByPlaceholder("Current Address").fill('Mohali, Punjab');
    await page.locator('#state').click();
    await page.waitForSelector("//div[@class=' css-11unzgr']//div[contains(@id,'react-select-3-option')]");
    const stateOptions = await page.$$("//div[@class=' css-11unzgr']//div[contains(@id,'react-select-3-option')]");
    for(let states of stateOptions){
        let state = await states.textContent();
        if(state.includes('NCR')){
            await states.click();
            break;
        }
    }
    await page.locator('#city').click();
    await page.waitForSelector("//div[@class=' css-11unzgr']//div[contains(@id,'react-select-4-option')]");
    const cityOptions = await page.$$("//div[@class=' css-11unzgr']//div[contains(@id,'react-select-4-option')]");
    for(let cities of cityOptions){
        let city = await cities.textContent();
        if(city.includes('Delhi')){
            await cities.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
    await page.locator('#submit').click();

    await page.waitForSelector('#example-modal-sizes-title-lg');

    const popupHead = await page.locator('#example-modal-sizes-title-lg').textContent();

    await expect(popupHead).toBe('Thanks for submitting the form');

    await page.locator('#closeLargeModal').click();

    await page.waitForTimeout(5000);


})