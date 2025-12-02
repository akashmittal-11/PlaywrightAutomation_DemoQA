import fs from 'fs';
import{test,expect}from'@playwright/test';



test('Read text file', async () => {
  const data = fs.readFileSync('C:\\Users\\Techbit\\Downloads\\info (1).txt', 'utf8');
  console.log(data);
  await expect(data).toBe('this is the text file')
});


test('Read pdf file', async () => {
  const data = fs.readFileSync('tests\\downloads\\samplefile.pdf', 'utf8');
  console.log('Data in the pdf file is: ',data);
//   await expect(data).toBe('this is the text file')
});

test.only('Read json file', async () => {
  const data = fs.readFileSync("C:\\Users\\Techbit\\Downloads\\sample1.json", 'utf8');
  console.log(data);
  const json = JSON.parse(data);
  console.log('Fruit name from the json file is: ',json.fruit);
});
