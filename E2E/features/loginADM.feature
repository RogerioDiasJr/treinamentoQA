Feature: Autenticação no QA Dojo
  Como um aluno ou administrador
  Quero realizar login na aplicação
  Para acessar os desafios de automação

  Background:
    Given que estou na página de login

  Scenario: Login com sucesso (Perfil Admin)
    When eu preencho o email "admin@qadojo.com" e a senha "supersecret"
    And clico no botão entrar
    Then devo ser redirecionado para o dashboard
