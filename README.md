# Next.js TS Starter

Simple next.js starter with typescript.

## Usage

```
$ git clone [this repo]
$ cd [this repo]
$ yarn
```

### Development

Move the file `prisma/.env.sample` to `prisma/.env` and set the env var `DATABASE_URL`

1. `npx prisma introspect`
2. `npx prisma generate`

```
$ yarn dev:server
```

### Production

```
$ yarn build
$ yarn start
```
