const { expect } = require('@playwright/test');

class LoginPage {

        constructor(page) {
        this.page = page;
    }


    async navigate() {
        try{
            await page.goto('https://rogeriodiasjr.github.io/treinamentoQA/index.html');
        }
        catch(error){
            throw new Error(`Erro ao navegar para a página de login: ${error.message}`);
        }
        //await page.waitForTimeout(100000)
    }

    async preencherLogin(email, pass) {
        try{
            await page.locator('//input[@id="email"]').fill(email);
        await page.locator('//input[@id="password"]').fill(pass);
        }catch(error){
            throw new Error(`Erro ao navegar para a página de login: ${error.message}`);
        }
        
    }

    async clicarBotaoLogin(){
        try{
            await page.locator('//button[@onclick="doLogin()"]').click();
        }catch(error){
            throw new Error(`Erro ao navegar para a página de login: ${error.message}`);
        }
    }

    async getErrorMessage() {
        return this.errorMessage.innerText();
    }

    async verificarPaginaDashboard(){
        try{
            await expect(page).toHaveURL(/dashboard\.html/);
        }catch(error){
            throw new Error(`Erro ao navegar para a página de login: ${error.message}`);
        }
    }

    async validarMensagemErro(mensagemEsperada) { 
     try{
        await expect(page.getByText(mensagemEsperada)).toBeVisible();
        await expect(page.locator('xpath=//p[@id="error-msg"]')).toHaveText(mensagemEsperada);
    }catch(error){
            throw new Error(`Erro ao navegar para a página de login: ${error.message}`);
        }
    }
    
}
module.exports = { LoginPage };