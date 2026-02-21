const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

Given('que estou na página de login', async function () {
    // Instancia o Page Object usando a page injetada pelo hooks.js
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigate();
});

When('eu preencho o email {string} e a senha {string}', async function (email, password) {
    // Utilizamos os locators públicos do Page Object para preencher
    await this.loginPage.preencherLogin(email, password);
});

When('clico no botão entrar', async function () {
    await this.loginPage.clicarBotaoLogin();
});

Then('devo ser redirecionado para o dashboard', async function () {
    // Validação de URL usando expect do Playwright
    await this.loginPage.verificarPaginaDashboard();
});

Then('devo ver a mensagem de erro {string}', async function (mensagemEsperada) {
    // Validação visual da mensagem de erro
    await this.loginPage.validarMensagemErro(mensagemEsperada);
    
});