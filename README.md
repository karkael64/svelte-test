# Svelte+Prisma Example

This directory is a brief example of a [Svelte](https://svelte.dev/) app with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction) that can be deployed with Vercel and zero configuration.

## Deploy Your Own

Deploy your own Svelte project, along with Serverless Functions, with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/vercel/tree/main/examples/svelte)

_Live Example: https://svelte.now-examples.now.sh_

### How We Created This Example

To get started with Svelte+Prisma, along with [Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction), deployed with Vercel, you can use [degit](https://github.com/Rich-Harris/degit) to initialize the project:

```shell
$ npx degit karkael64/svelte-test
```

## Modules

### Dotenv

[Dotenv](https://www.npmjs.com/package/dotenv) let you read the `.env` in your route directory for settings `process.env`. For loading:

```sh
MODE=prod
POSTGRESQL_URL=postgresql://user:pwd@domain:3145/dbname
```

You just have to call:

```typescript
import dotenv from "dotenv"`;
dotenv.config();

process.env.MODE; // "prod"
```

### Express

[`Express`](https://expressjs.com/en/guide/routing.html) helps to create a simple API compatible serverless, as expected for Vercel.

### Faker

[`Faker`](http://marak.github.io/faker.js/#toc5__anchor) helps to create mock data (uuid, phrase, words, email, avatar and so on). The documentation is weird, package `@types/faker` really helps me to understand it!

### Heroku

[`Heroku`](https://dashboard.heroku.com/apps) is a database host which use Amazon Web Services free data servers (for me: PostgreSQL) and free domain to secure your data. WARNING: free app does not insure you to keep or save your data.

### PostgreSQL

[`PostgreSQL`](https://www.postgresql.org/about/) manage an object-relational database system which evolved with technology for 30 years.

### Prettier + VScode

[`Prettier`](https://prettier.io/) helps to write beautiful code on save. With `VScode` and `Prettier - Code formatter`, you can set save event to clean code. Please add this file `/.vscode/settings.json` with this content:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Prisma

[`Prisma`](https://www.prisma.io/blog/prisma-the-complete-orm-inw24qjeawmb) is a perfect ORM for PostgreSQL driving, with types exported for coding and model pushing for distant database. You can see my command `yarn prisma:reset` which generates code types, push model on database and seed the database.

[GraphQL soon?](https://www.prisma.io/graphql)

### Rollup

[`Rollup`](https://www.rollupjs.org/guide/en/) is [not the most recommanded module bundler](https://blog.logrocket.com/benchmarking-bundlers-2020-rollup-parcel-webpack/), webpack stills the most used. To my mind, it's the best configurable and learning tool for a bundler, next to my previous experience with `gulp`. Moreover, `webpack` still annoy me last years in so many ways.

### Sirv

[`Sirv`](https://www.npmjs.com/package/sirv) create a web server for static files. I trust it and I can go forward. Thanks lukeed!

### Svelte

[`Svelte`](https://svelte.dev/) is a new way to code web font-end applications. I really recommand it because it split web languages like VueJS and it improve user performance a few better than ReactJS. It focus on fast web application creation in short team.

Still, Svelte needs a bigger community, more contributors and maybe a better TypeScript support.

### TS-Node

If you want to run scripts in TypeScript, you can use [`TS-Node`](https://www.npmjs.com/package/ts-node). You will need a special configuration to focus on execution:

```json
{
  "compilerOptions": {
    "declaration": false,
    "esModuleInterop": true
  }
}
```

And thats all!

### TypeScript

[`TypeScript`](https://www.typescriptlang.org/) is a Microsoft language which builds on JavaScript, highly compatible with VScode. They improve both of them and they improve coder experience for years. I try to use it as often as possible in order to learn type checking and become more stringent. TypeScript is usefull in big team for understanding.

### Vercel compatible

[`Vercel`](https://vercel.com/) is a web host with few of code which use Amazon Web Services free lambda web servers and free domains to easily deploy your website. WARNING: a lambda server is run and launch a the demand and is not always opened, user could wait 500ms at the rerun of web front-end or wait more 1s to rerun sleeping API and database.
