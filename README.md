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

## Adding a new MFE

To generate a new remote (MFE) run the following command:

```
yarn generate-mfe
```

This will run a CLI Generator (node app located in the `./cli-generator` directory) that will generate a new remote (MFE) based on a set of 3 questions. Under the hood this CLI Generator clones a [template repository](https://github.com/jamayoral/mfe-template) and renames the content of certain files to match the prompts.

After generating a new remote (MFE), make sure to update the port numbers, as follows:

- `package.json` on `line 8`
- `webpack.dev.js` on `line 19`

> If MFE of type `Shell`, make sure you also update the `remotes` object in the `federation.config.json` file