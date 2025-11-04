import{test,expect}from'@playwright/test';

test.describe('Group1',()=>{

        test('Test1',async({page})=>{
            console.log('This is Test 1');
        })

})

test.describe('Group2',()=>{

    test('Test2',async({page})=>{
        console.log('This is Test 2');
    })
})