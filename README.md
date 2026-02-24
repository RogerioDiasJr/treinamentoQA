# 🥋 QA Dojo - O Desafio Real de Automação

Bem-vindo ao **QA Dojo**, um ambiente de treinamento projetado intencionalmente para simular desafios reais que engenheiros de QA (Quality Assurance) e SDETs enfrentam no dia a dia.

Diferente de aplicações de teste comuns que seguem apenas o "caminho feliz", o QA Dojo implementa padrões complexos de desenvolvimento web para testar suas habilidades de automação, estratégia de seletores e sincronização.

**Versão Estática:** Este projeto foi refatorado para rodar inteiramente no navegador (Client-side), simulando comportamentos de backend (APIs lentas, validações) através de mocks e JavaScript, facilitando a hospedagem em serviços como GitHub Pages.

---

## 🚀 Funcionalidades e Desafios

A aplicação consiste em um Dashboard protegido por login e diversos módulos de desafio divididos por faixas de dificuldade:

### Faixa Branca (Iniciante)
1.  **🔐 Login & Autenticação:** Validação de credenciais mockadas e proteção de rotas via LocalStorage.
2.  **🛒 Loja Assíncrona (Sincronização):** Simulação de API lenta (delay de 3s) e carregamento dinâmico de elementos (Waits).
3.  **🖼️ Labirinto de Contextos:** Manipulação de **iFrames** e múltiplas abas.
4.  **📊 Tabela do Caos:** Web Tables dinâmicas e validações complexas.
5.  **👻 Reino das Sombras:** Elementos encapsulados em **Shadow DOM**.

### Faixa Marrom (Intermediário)
6.  **🖱️ Drag & Drop:** Interações de arrastar e soltar elementos.
7.  **📂 Upload de Arquivos:** Automação de seleção de arquivos locais.
8.  **📅 Date Picker:** Manipulação de calendários e datas.
9.  **🔽 Menus em Cascata:** Interação com Dropdowns e Selects dependentes.
10. **🎚️ Slider Control:** Controle de inputs do tipo Range.
11. **🍞 Toast Notifications:** Validação de mensagens flutuantes temporárias.
12. **🎨 Canvas Drawing:** Automação de interações em elementos Canvas HTML5.
13. **📜 Infinite Scroll:** Carregamento de conteúdo sob demanda ao rolar a página.
14. **🔎 Busca Global:** Validação de mecanismos de busca, filtros e links externos dinâmicos.

---

## 🛠️ Tecnologias Utilizadas

*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
*   **Simulação de Backend:** Mocks em JS, Promises para delays, LocalStorage para persistência.
*   **Automação Sugerida:** Playwright, Cypress, Selenium ou Robot Framework.

---

## 📦 Como Executar

Não é mais necessário instalar dependências de backend (Node.js) para rodar a aplicação alvo, pois ela foi adaptada para funcionar estaticamente.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/qa-dojo.git
    ```
2.  **Abra o arquivo principal:**
    *   Navegue até a pasta do projeto e abra o arquivo `index.html` no seu navegador preferido.
    *   Ou utilize uma extensão como "Live Server" no VS Code para evitar problemas de CORS com arquivos locais.

---

## 🔑 Credenciais de Acesso

Para acessar o Dashboard e os desafios, utilize os usuários simulados:

| Perfil | Email | Senha |
| :--- | :--- | :--- |
| **Aluno** | `student@qadojo.com` | `123456` |
| **Admin** | `admin@qadojo.com` | `supersecret` |

---

## 📂 Estrutura do Projeto

```text
qa-dojo/
│
├── index.html           # Login Principal
├── qa-dojo/
│   └── frontend/        # Páginas dos desafios e estilos
│       ├── dashboard.html
│       ├── products.html
│       ├── search.html
│       └── ...
└── README.md            # Documentação
```

---

Desenvolvido para a comunidade de QA. 🥋 **Happy Testing!**# treinamentoQA
# treinamentoQA
