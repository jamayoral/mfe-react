# React micro-frontend with MFE, Lerna and Typescript
## Stack

```
- React
- Typescript
- Webpack Module Federation
- Babel
- React Router
- Yarn
- Jest
- React Testing Library
- Lerna
- ESLint
- Prettier
```

## Requirements

Requires Node JS version `14.17.0+`. Using `nvm`:

```sh
nvm install 14.17.0
nvm use 14.17.0
```

## Running the app locally

#### _Installing dependencies:_

```
yarn install
```

#### _Generating federate types:_

```
yarn make-types
```

#### _Running in dev mode:_

> This will start all MFEs.

```
yarn start
```

#### _Build and serve:_

> This will build/serve all MFEs.

```
yarn build
yarn serve
```

#### _Running a single MFE:_

```
cd apps/MFE_DIR
yarn start
```

#### _Clean `dist` folders after a build:_

```
yarn clean
```

#### _Run scripts in batch:_

> You can run any remote (MFE) level script in a single batch by using the following format:

```
lerna run --parallel SCRIPT_NAME
```