# Projeto: Aplicativo de Gerenciamento de Passageiros para Duty Free

Este projeto foi desenvolvido como parte da avaliação da disciplina de Programação para Dispositivos Móveis, utilizando React Native e Expo. O objetivo do aplicativo é exibir dados de passageiros, agrupados por países de origem e destino, para otimizar as vendas em Duty Free Stores localizadas em aeroportos ao redor do mundo.

---

## Descrição da Solução

O aplicativo consiste em três telas principais:

1. **Tela de Login**: Permite que o usuário faça login utilizando um nome de usuário e senha. 
2. **Tela de Listagem**: Exibe uma lista de passageiros agrupados por países (origem ou destino), utilizando um `SectionList` para organizar os dados.
3. **Tela Sobre**: Exibe informações sobre o aplicativo, incluindo um link clicável para o GitHub do aluno.

As funcionalidades incluem:
- Navegação entre telas utilizando `expo-router`.
- Validação do login com um usuário e senha predefinidos.
- Exibição de dados agrupados por país, com a contagem de passageiros por categoria.
- Uso de `ActionSheet` para opções de logout e sobre.
- Uso de um componente customizado `ImageButton` para a tela de login.

---

## Requisitos Cumpridos

### 1. Estrutura do Projeto (1 ponto)

- A navegação entre as telas foi feita utilizando o `expo-router`, com as telas **Login**, **Listagem** e **Sobre**.
  
### 2. Componentes (2 pontos)

- **ImageButton**: O componente `ImageButton` foi criado, recebendo uma imagem (uri) e um evento `onPress`, utilizado na tela de login.

### 3. Estilos e Layouts (3,5 pontos)

- O design foi feito de forma criativa(nem tanto), respeitando os rascunhos fornecidos pelo cliente. 
- **Tela de Login**: A tela de login foi projetada com campos para o nome de usuário e senha, e um botão de login. A senha é oculta enquanto digitada.
- **Tela de Listagem**: Exibe os passageiros agrupados por país, com a contagem de passageiros no título de cada categoria.
- **Tela Sobre**: Inclui um link clicável para este perfil do GitHub.

### 4. Lógica de Login (1,5 pontos)

- A validação do login permite apenas o login com o usuário `fulano` e a senha `123`.
- O campo de senha na tela de login está configurado para não exibir os caracteres durante a digitação.

### 5. Componentes de Listagem (2 pontos)

- **Helper para dados categorizados**: Foi implementada uma função que converte os dados de passageiros em um formato adequado para utilização do `SectionList`, agrupando por países de origem e destino e exibindo a contagem de passageiros por país.
- **Uso de SectionList**: A tela de listagem exibe os passageiros agrupados por país utilizando o `SectionList`.

### 6. ActionSheet (1 ponto)

- A funcionalidade de ActionSheet foi implementada com um botão de "hamburger" no topo das telas, que ao ser clicado, exibe as opções "Logout" e "Sobre".
- O botão "Logout" realiza o logout do usuário e retorna à tela de login.

---
