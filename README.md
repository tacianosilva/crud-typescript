# crud-typescript
API REST com TypeScript + NodejS, + SQLite CRUD Completo baseado no vídeo https://www.youtube.com/watch?v=XaDMIXuqNY8

## Dependências

```bash
npm i typescript ts-node ts-node-dev @types/node
npm i express @types/express
```

```bash
npm i sqlite3 @types/sqlite3
```

```bash
npm i dotenv @types/dotenv
```

```bash
npm i body-parser @types/body-parser
```

Usando `app.use(express.json());` no lugar do body-parser, não é mais necessária essa dependência.

## Testes com Jest

Baseado no tutorial: 

* https://sharklabs.com.br/testes-unitarios-com-nodejs-jest-typescript/
* https://jestjs.io/pt-BR/docs/getting-started

```bash
npm install jest --save-dev
npx ts-jest config:init
npm run test
```

```bash
npm i -D babel-jest @babel/core @babel/preset-env
```