import{test,expect}from'@playwright/test';

test('Drag And Drop',async({page})=>{

    await page.goto('https://vinothqaacademy.com/mouse-event/');

    const dragMe = await page.locator('#draggableElement');
    const dragHere = await page.locator('#droppableElement');

    await dragMe.hover();
    await page.mouse.down();

    await dragHere.hover();
    await page.mouse.up();

    // await page.dragAndDrop('#draggable','#droppable');

    // await dragMe.dragTo(dragHere);

    // await page.locator("[id='draggableElement']").dragTo(await page.locator("[id='droppableElement']"));

    await page.waitForTimeout(5000);
})