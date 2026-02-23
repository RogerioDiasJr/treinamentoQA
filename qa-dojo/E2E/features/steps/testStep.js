const {Given, When, Then} = require ('@cucumber/cucumber')
const {AmazonPage} = require('../pages/testPage.js')

const amazonaage = new AmazonPage();


Given('I am oline at Amazon Page', async()=>{
    await amazonaage.navigate();
 });

 When(/^I search for "([^"]*)"$/, async function (string) {
    await amazonaage.searchProducts(string);
  });

When(/^I add "([^"]*)" at shopping car$/, async function (string){
	await amazonaage.addProduct(string)
    
});

Then(/^I should see "([^"]*)" in shopping cart$/, async (args1) => {
	await amazonaage.goToCart()
	await amazonaage.checkProduct(args1)

});