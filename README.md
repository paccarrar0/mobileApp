# PDM - Avaliação 2

---

## Instalação de dependências

É necessária a instalação do Jest através dos comandos;

` npm install --save-dev @testing-library/react-native jest-react-native --legacy-peer-deps `

` npm install --save-dev jest @types/jest ts-jest --legacy-peer-deps `

Do maestro através do comando;

` curl -fsSL "https://get.maestro.mobile.dev" | bash `

Também é necessária a configuração prévia de um emulador android;

---

## Rodando o projeto

### Clonar o repositório
Clone o repositório com o seguinte comando.

` git clone --branch feature/ava2 --single-branch git@github.com:paccarrar0/mobileApp.git `

### Instalar dependeências do projeto
Na pasta clonada, instale as dependências com o seguinte comando

` npm i `

### Iniciar o projeto no emulador
Permanecendo na mesma pasta, rode o seguinte comando para iniciar o projeto no emulador

` npx expo start -a `

---

## Rodando os testes

### Testes unitários
Os testes unitários podem ser rodados com o comando abaixo(Em outra instância do terminal)

` jest `

### Testes E2E
Os testes E2E podem ser rodados com o seguinte comando(Em outra instância do terminal)

` npm run e2eTests `

---

# Diferença entre testes unitários e E2E

Os testes unitários tem como propósito testar partes isoladas do código como funções, componentes, etc. Eles contam com uma execução rápida tenod em vista que não possuem integração com o resto do sistema. Os testes E2E (End to End) visam testar um fluxo de ações completo, simulando o acesso de um usuário e, com isso, testando todas as partes do sistema em conjunto. Estes testes são mais lentos devido ao fato de eles integrarem toda a infraestrutura do sistema.
