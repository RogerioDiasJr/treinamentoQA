Feature: Upload de Arquivos
  Como um aluno do QA Dojo
  Quero verificar que o botão na página de upload esta desabilitado
  Para validar a consistencia do produto

Scenario: Validar estado inicial do botão
    Given que estou logado na aplicação
    And navego para a página de upload
    Then o botao de upload deve estar desabilitado