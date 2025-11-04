import{test,expec}from'@playwright/test';

test('test1 @sanity',async({page})=>{
    console.log('This is the santiy testing')
})

test('test2 @reg',async({page})=>{
    console.log('This is the regression testing')
})

test('test3 @sanity',async({page})=>{
    console.log('This is the santiy testing')
})

test('test4 @reg',async({page})=>{
    console.log('This is the regression testing')
})

test('test5@sanity',async({page})=>{
    console.log('This is the santiy testing')
})

test('test6 @reg',async({page})=>{
    console.log('This is the regression testing')
})

test('test7 @functional',async({page})=>{
    console.log('This is the functional test')
})

test('test8 @sanity @reg @functional',async({page})=>{
    console.log('This is for all test')
})
