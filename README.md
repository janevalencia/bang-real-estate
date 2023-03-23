# Nextjs, TailwindCSS, Typescript, GraphQL/Apollo Client
## Technology

- Next >= 13
- Node >= 18.13.0 & React >= 18
- TailwindCSS
  - @tailwindcss/typography
- Typescript
- @next/font plugin (default = Montserrat)
- Apollo-Client >= 3.7.9
- GraphQL >= 16.6.0
- Contentful (fill in .env file as per your credentials)
  - @contentful/rich-text-react-renderer
  - @contentful/rich-text-types
- deepmerge
- lodash
  - @types/lodash
- react-markdown
- Cypress (e2e, component testing)

## Install

1. Copy this repository to your local
2. Run `yarn` or `npm install` from your terminal to install all dependencies.
3. Check out `env.example` file to guide you as to what credentials you need to connect to Contentful CMS and fetch data using apollo-client.

## Development
### To run local server:
```
yarn dev
```

### To run ES lint:
```
yarn lint
```

To build:
```
yarn build

yarn start
```
Note: The build folder will be in `.next` folder.

### To run Cypress:
Reference: https://nextjs.org/docs/testing#cypress

With GUI or Live Testing:
```
yarn cypress:gui
```

Going headless or CLI:
```
yarn cypress:e2e
```
