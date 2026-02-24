const { expect } = require("chai");

class AmazonPage {

    async navigate() {
        await page.goto('https://www.amazon.com.br/');
    }
    async searchProducts(value) {
        var seacrhBox = await page.waitForSelector('[id=twotabsearchtextbox]')
        await seacrhBox.click()
        await seacrhBox.fill(value)
        await page.click('[id=nav-search-submit-button]');
    }
    async addProduct(value){
        await page.waitForSelector('//*[text()="'+value+'"]', {visible: true})
        await page.click('//*[text()="'+value+'"]')
        var product = await page.waitForSelector('span[id=productTitle]')
        var text = await product.textContent();
        var comprar = await page.waitForSelector('#add-to-cart-button')
        await comprar.press('Enter');
        expect(text).to.be.equal(' '+value+' ')
        
        
    }

    goToCart = async function () {
        await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');
      };


    checkProduct = async function(value) {

        var product = await page.waitForSelector('[class="a-truncate-cut"]','//*[text()="'+value+'"]')
        product = await product.textContent()
        expect(product).to.be.equal(value)
      };
    
  }
  module.exports = { AmazonPage: AmazonPage };