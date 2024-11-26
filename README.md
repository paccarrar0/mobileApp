# Projeto: Avaliação 01 - Programação Para Dispositivos Móveis (PDM)

Este projeto tem como objetivo atender aos requisitos da **Atividade Avaliativa 01** da disciplina **Programação Para Dispositivos Móveis (PDM)**.

## Estrutura do Projeto

- O projeto foi organizado conforme a estrutura abordada no módulo 2 da disciplina.
- Utilizou-se um template **Typescript Blank**, com a adição manual do **expo-router**.

## Componentes Criados

### Reutilizáveis e com Escopo Definido
- Foram desenvolvidos componentes reutilizáveis, com escopos bem definidos.
- Foi criado o componente `<ImageButton>`, que permite:
  - Uso de uma imagem personalizada de fundo.
  - Configuração de eventos via a propriedade `onPress`.

### Atendendo aos Critérios do Cliente
- O design foi baseado nos critérios descritos no **Rascunho do Cliente** fornecido na avaliação.
- Foi implementado um sistema de login que:
  - Permite o acesso somente com o usuário `fulano` e senha `123` (ausência de banco de dados).
  - Oculta a senha durante a interação na tela de login.
- Na tela "Sobre", o link para o repositório GitHub funciona corretamente, redirecionando para este projeto.

## Estilos e Layouts

- O design da aplicação foi desenvolvido de forma autoral.
- Templates disponíveis na web foram utilizados como inspiração para a criação do layout.

## Funcionalidades Adicionais

### Helper para Tratamento de Dados
- Implementado um **helper** para tratar dados no formato JSON.

### Listagem de Dados
- Utilização do componente **SectionList** para exibição de dados categorizados por seções.

### Navegação e Restrições
- Foi implementado um sistema que impede o acesso às telas sem que o usuário esteja autenticado.

### ActionSheet
- Criada uma **ActionSheet** para agrupar as opções:
  - "Logout"
  - "Sobre"
- A ActionSheet é ativada por um botão posicionado na barra superior.
