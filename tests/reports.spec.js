import{test,expect}from '@playwright/test';

test('Line Reports',async({page})=>{

/*
   to create HTML reports, update the config file with 
   export default defineConfig({
   reporter: 'line',
});

   from terminal run the command npx playwright test reports.spec.js --reporter line

*/

console.log("Line Reports");

})

test('Dot Reports',async({page})=>{

/*
   to create HTML reports, update the config file with 
   export default defineConfig({
   reporter: 'dot',
});

   from terminal run the command npx playwright test reports.spec.js --reporter dot

*/

console.log("Dot Reports");

})

test('List Reports',async({page})=>{

/*
   to create HTML reports, update the config file with 
   export default defineConfig({
   reporter: 'list',
});

   from terminal run the command npx playwright test reports.spec.js --reporter list

*/

console.log("List Reports");

})

test('Blob Reports',async({page})=>{

/*
   to create HTML reports, update the config file with 
   export default defineConfig({
   reporter: 'dot',
});

   from terminal run the command npx playwright test reports.spec.js --reporter dot

*/

console.log("Blob Reports");

})



