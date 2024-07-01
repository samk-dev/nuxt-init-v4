# Nuxt Init Starter

Opinionated `Nuxt` starter with `i18n` support.

⚠️ compatibilityVersion: 4 ⚠️ It's enabled and it works great, just keep in mind that you might find some bugs.

## System Requirements

- Node.js `=>18.0.0`
- NPM `=>10.0.0`

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Included Packages

| 📦 Package                 | 📖 Docs                                                               |
| :------------------------- | :-------------------------------------------------------------------- |
| `@nuxtjs/tailwindcss`      | [Documentation](https://tailwindcss.nuxtjs.org)                       |
| `@nuxt/image`              | [Documentation](https://image.nuxt.com)                               |
| `@nuxtjs/i18n`             | [Documentation](https://i18n.nuxtjs.org)                              |
| `nuxt-translation-manager` | [Documentation](https://github.com/samk-dev/nuxt-translation-manager) |
| `nuxt-test-utils`          | [Documentation](https://nuxt.com/docs/getting-started/introduction)   |

## Dev Tools

| 📦 Package          | 📖 Docs                                                          |
| :------------------ | :--------------------------------------------------------------- |
| `husky`             | [Documentation](https://typicode.github.io/husky/)               |
| `@commitlint`       | [Documentation](https://commitlint.js.org)                       |
| `lint-staged`       | [Documentation](https://github.com/lint-staged/lint-staged)      |
| `@nuxt/eslint`      | [Documentation](https://eslint.nuxt.com)                         |
| `prettier`          | [Documentation](https://prettier.io)                             |
| `npm-check-updates` | [Documentation](https://www.npmjs.com/package/npm-check-updates) |

## Setup

Create `.env` file

```bash
mv .env.example .env
```

Install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:5001` which you can change from .env

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Available Commands

| ⚙ Command     | 📖 Description                                       |
| :------------- | :--------------------------------------------------- |
| `postinstall`  | Prepares `nuxt` types                                |
| `prepare`      | Prepares `husy` hooks                                |
| `dev`          | Starts development server                            |
| `build`        | Build for production                                 |
| `generate`     | Generates static pages and content                   |
| `preview`      | Preview production build                             |
| `lint`         | Run `eslint`                                         |
| `lint:fix`     | Run `eslint . --fix`                                 |
| `format:check` | Run `prettier` check                                 |
| `format:write` | Format project                                       |
| `deps:check`   | Check for outdated dependecies and helps in updating |
