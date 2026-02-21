Feature: Autenticação no QA Dojo
  Como um aluno ou administrador
  Quero realizar login na aplicação
  Para acessar os desafios de automação

  Background:
    Given que estou na página de login

  Scenario Outline: Validar exceções de login (Dados inválidos ou vazios)
    When eu preencho o email "<email>" e a senha "<senha>"
    And clico no botão entrar
    Then devo ver a mensagem de erro "<mensagem>"

    Examples:
      | email                | senha       | mensagem                  |
      | usuario@invalido.com | senhaerrada | Credenciais inválidas     |
      | student@qadojo.com   | errado123   | Credenciais inválidas     |
      |                      |             | Preencha todos os campos. |
      | student@qadojo.com   |             | Preencha todos os campos. |
      |                      | 123456      | Preencha todos os campos. |