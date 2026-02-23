const { expect } = require('@playwright/test');

class UploadPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        try {
            await page.goto('http://localhost:3000/upload.html');
        } catch (error) {
            throw new Error(`Erro ao navegar para a página de upload: ${error.message}`);
        }
    }

    async selecionarArquivo(nomeArquivo) {
        try {
           await page.locator('//input[@id="file-input"]').setInputFiles('../E2E/features/fixtures/test.pdf')
        } catch (error) {
            throw new Error(`Erro ao selecionar arquivo: ${error.message}`);
        }
    }

    async clicarUpload() {
        try {
            await page.locator('xpath=//button[@id="upload-btn"]').click();
        } catch (error) {
            throw new Error(`Erro ao clicar no botão de upload: ${error.message}`);
        }
    }

    async validarBotaoHabilitado(habilitado) {
        try {
            if (habilitado) {
                await expect(page.locator('xpath=//button[@id="upload-btn"]')).toBeEnabled();
            } else {
                await expect(page.locator('xpath=//button[@id="upload-btn"]')).toBeDisabled();
            }
        } catch (error) {
            throw new Error(`Erro ao validar estado do botão: ${error.message}`);
        }
    }

    async validarMensagemSucesso(nomeArquivo) {
        try {
            await expect(page.locator('//p[@id="upload-status"]')).toHaveText(`Upload concluído: ${nomeArquivo}`, { timeout: 10000 });
        } catch (error) {
            throw new Error(`Erro ao validar mensagem de sucesso: ${error.message}`);
        }
    }
}

module.exports = { UploadPage };
