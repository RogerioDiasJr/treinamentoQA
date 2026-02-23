const { Given, When, Then } = require('@cucumber/cucumber');
const { UploadPage } = require('../pages/UploadPage');
const { LoginPage } = require('../pages/LoginPage');

Given('que estou logado na aplicação', async function () {
    // Realiza o login antes de acessar a página protegida
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
    await loginPage.preencherLogin('student@qadojo.com', '123456');
    await loginPage.clicarBotaoLogin();
    await loginPage.verificarPaginaDashboard();
});

Given('navego para a página de upload', async function () {
    this.uploadPage = new UploadPage(this.page);
    await this.uploadPage.navigate();
});

When('eu seleciono o arquivo {string}', async function (nomeArquivo) {
    await this.uploadPage.selecionarArquivo(nomeArquivo);
});

Then('o botão de upload deve estar desabilitado', async function () {
    await this.uploadPage.validarBotaoHabilitado(false);
});

Then('o botão de upload deve ficar habilitado', async function () {
    await this.uploadPage.validarBotaoHabilitado(true);
});

When('eu clico no botão de upload', async function () {
    await this.uploadPage.clicarUpload();
});

Then('devo ver a mensagem de sucesso contendo {string}', async function (nomeArquivo) {
    await this.uploadPage.validarMensagemSucesso(nomeArquivo);
});