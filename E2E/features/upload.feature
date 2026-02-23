Feature: Upload de Arquivos
  Como um aluno do QA Dojo
  Quero enviar arquivos na página de upload
  Para validar o funcionamento do componente e a barra de progresso

  Background:
    Given que estou logado na aplicação
    And navego para a página de upload

  Scenario: Validar estado inicial do botão
    Then o botão de upload deve estar desabilitado

  Scenario: Realizar upload de arquivo válido com sucesso
    When eu seleciono o arquivo "test.pdf"
    Then o botão de upload deve ficar habilitado
    When eu clico no botão de upload
    Then devo ver a mensagem de sucesso contendo "test.pdf"