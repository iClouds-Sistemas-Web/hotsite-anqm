<div align="center">
  <img src="https://img.shields.io/static/v1?label=Next&message=12.1.6&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" alt="Version of the react" />

  <img src="https://img.shields.io/static/v1?label=React&message=18.1.0&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=TypeScript&message=4.6.4&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=Chakra-ui&message=1.8.8&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=Plop&message=3.1.0&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />

  <img src="https://img.shields.io/static/v1?label=Husky&message=7.0.4&color=#4cb5f1%3CCOLOR%3E&style=plastic%3CSTYLE%3E&logo=react%3CLOGO%3E" />
</div>

<h1 align="center">iClouds - Template dos Hotsites das Associações.</h1>

<p align="center">
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#arquitetura">Arquitetura</a> •
 <a href="#como-usar">Como usar</a>
</p>

<h4 align="center">
	 Status: Em andamento!
</h4>

---

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

#### Auxiliares
- [Plop](https://plopjs.com/)
- [Chakra](https://chakra-ui.com/)

#### Padronização de código/commits:
- [Husky](https://typicode.github.io/husky/#/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

### Arquitetura
```shell
src/
|-- components/   # Contém os components reutilizáveis do projeto.
|--- buttons/     # Contém os botões do projeto.
|--- cards/       # Contém os cards do projeto.
|--- inputs/      # Contém os inputs do projeto.
|--- sections/    # Contém todas as sections do projeto.
|---- home/       # Contém as seções da home.
|--- SEO/         # Contém o SEO do projeto.
|-- functions/    # Funções globais, que podem ser reutilizadas.
|-- hooks/        # Contém todos os hooks do projeto.
|-- interfaces/   # Contém a tipagem dos components do projeto.
|-- pages/        # Todas as páginas do projeto estão dentro dessa pasta.
|-- services/     # Contém as configurações das APIs.
|-- styles/       # Contém todos os arquivos relacionados a padronização de estilos do projeto.

```

---

### Como usar
#### Pré-requisitos

Antes de começar, precisa-se ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/package/npm).

##### Usando o template:
Siga os passos a seguir para iniciar o projeto utilizando o boilerplate.

##### Criar projeto:
```bash
  yarn create next-app -e https://github.com/iClouds-Sistemas-Web/nextjs-typescript-boilerplate-iclouds
```
##### Acesse a pasta do projeto no terminal/cmd:
```bash
cd repository-name
```
##### Instale as dependências com yarn ou npm:
```bash
yarn
# ou npm install
```
##### Execute a aplicação em modo de desenvolvimento:
```bash
yarn dev
```
#### O servidor inciará na porta :3000 - acesse <http://localhost:3000>

---

#### Media Queries do projeto:

SM:
@media (max-width: 479px) {}

MD:
@media (max-width: 767px) {}

LG:
@media (max-width: 991px) {}

XL:
@media (max-width: 1279px) {}
