# Nuxt Resend

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Resend](https://resend.com) integration for [Nuxt](https://nuxt.com).

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `nuxt-resend` dependency to your project

```bash
# Using npm
npm install --save-dev nuxt-resend

# Using pnpm
pnpm add -D nuxt-resend

# Using yarn
yarn add --dev nuxt-resend

# Using bun
bun add --D nuxt-resend
```

2. Add `nuxt-resend` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-resend'
  ]
})
```

Add the following configuration to your `.env` file replacing the value in `< >` with your Resend API key.

```ini
NUXT_RESEND_API_KEY="<your_resend_api_key>"
```

That's it! You can now use Nuxt Resend in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run checks
pnpm run check

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
pnpm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-resend/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-resend

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-resend.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-resend

[license-src]: https://img.shields.io/npm/l/nuxt-resend.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-resend

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
