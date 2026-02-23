Feature: Autenticação no QA Dojo
  Como um aluno ou administrador
  Quero realizar login na aplicação
  Para acessar os desafios de automação

  Background:
    Given que estou na página de login

  Scenario: Login com sucesso (Perfil Aluno)
    When eu preencho o email "student@qadojo.com" e a senha "123456"
    And clico no botão entrar
    Then devo ser redirecionado para o dashboard