# 🥋 QA Dojo - O Desafio Real de Automação

Bem-vindo ao **QA Dojo**, um ambiente de treinamento projetado intencionalmente para simular desafios reais que engenheiros de QA (Quality Assurance) e SDETs enfrentam no dia a dia.

Diferente de aplicações de teste comuns que seguem apenas o "caminho feliz", o QA Dojo implementa padrões complexos de desenvolvimento web para testar suas habilidades de automação, estratégia de seletores e sincronização.

---

## 🚀 Funcionalidades e Desafios

A aplicação consiste em um Dashboard protegido por login e diversos módulos de desafio:

1.  **🔐 Login & Autenticação:**
    *   Landing Page com validação de token JWT (simulado).
    *   Desafio de **IDs Dinâmicos**: Campos onde o atributo `id` muda a cada refresh.
2.  **🛒 Loja Assíncrona (Sincronização):**
    *   Simulação de API lenta (delay de 3s).
    *   Elementos que aparecem tardiamente (Loaders/Spinners).
    *   Necessidade de uso de **Explicit Waits**.
3.  **🖼️ Labirinto de Contextos:**
    *   Manipulação de **iFrames**.
    *   Interação com múltiplas abas/janelas (`target="_blank"`).
4.  **📊 Tabela do Caos:**
    *   Web Tables dinâmicas.
    *   Elementos que só aparecem com **Hover** (mouse over).
    *   Confirmação nativa do navegador (`alert`/`confirm`).
5.  **👻 Reino das Sombras:**
    *   Elementos encapsulados em **Shadow DOM** (Open mode).
    *   Isolamento de estilos e seletores.

---

## 🛠️ Tecnologias Utilizadas

*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
*   **Backend:** Node.js, Express.
*   **Banco de Dados:** SQLite (Arquivo local `qa-dojo.sqlite`).
*   **Automação E2E:**
    *   Playwright - Framework de automação.
    *   Cucumber JS - BDD (Behavior Driven Development).
    *   Allure Reports - Relatórios de execução.

---

## ⚙️ Pré-requisitos

*   Node.js (Versão 16 ou superior).
*   NPM (Gerenciador de pacotes incluído no Node).
*   Java (Opcional, apenas se for gerar o relatório Allure localmente via linha de comando, embora a extensão do VS Code dispense isso).

---

## 📦 Instalação e Execução

### 1. Configurando a Aplicação (Backend + Frontend)

A API serve tanto os endpoints quanto os arquivos estáticos do frontend.

```bash
# Acesse a pasta da API
cd qa-dojo-api

# Instale as dependências
npm install

# Inicie o servidor
node server.js
```

> A aplicação estará rodando em: **http://localhost:3000**

### 2. Configurando os Testes Automatizados (E2E)

Em um novo terminal, configure o projeto de testes.

```bash
# Acesse a pasta de testes
cd E2E

# Instale as dependências do Playwright e Cucumber
npm install

# Instale os navegadores do Playwright (se necessário)
npx playwright install
```

---

## 🧪 Executando os Testes

Os testes utilizam Cucumber com Gherkin. Para rodar a suíte completa:

```bash
# Dentro da pasta E2E
npm test
```

Este comando executará os cenários definidos em `features/` e gerará os resultados na pasta `allure-results`.

### Visualizando o Relatório

Para ver o relatório gráfico da execução:

```bash
npx allure serve allure-results
```

---

## 🔑 Credenciais de Acesso

Para acessar o Dashboard e os desafios, utilize os usuários pré-cadastrados no banco de dados:

| Perfil | Email | Senha |
| :--- | :--- | :--- |
| **Aluno** | `student@qadojo.com` | `123456` |
| **Admin** | `admin@qadojo.com` | `supersecret` |

---

## 📂 Estrutura do Projeto

```text
qa-dojo/
│
├── index.html           # Landing Page e Login Principal
├── dashboard.html       # Menu principal (Área logada)
├── *.html               # Páginas dos desafios (login, products, frames, etc)
│
├── qa-dojo-api/         # Backend
│   ├── server.js        # Servidor Express
│   ├── database.js      # Configuração SQLite
│   └── data/            # Arquivo do banco de dados
│
└── E2E/                 # Projeto de Automação
    ├── features/        # Arquivos .feature (Gherkin)
    │   ├── steps/       # Definição dos passos (Step Definitions)
    │   └── support/     # Hooks e configurações globais
    ├── pages/           # Page Objects (Mapeamento de elementos)
    └── cucumber.js      # Configuração do Runner
```

---

Desenvolvido para a comunidade de QA. 🥋 **Happy Testing!**# treinamentoQA
