This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, Create files `.env.local` and copy all value from `env.template` for configuration your application:

```sh
NODE_ENV=[production|internal_test|development]

NEXT_PUBLIC_APP_VERSION=v1.0.0
APP_NAME=NEXT_PUBLIC_APP_NAME Account

NEXT_PUBLIC_APP_ENV=[production|internal_test|development]

NEXT_PUBLIC_API_URL_SHOPPING=https://shopping-api.thaibulksms.com/api
NEXT_PUBLIC_WEB_URL_SHOPPING=https://shopping.thaibulksms.com
NEXT_PUBLIC_PRODUCT_PACKAGE=152,153,154,155,156,157,158,159,160,161
NEXT_PUBLIC_FIRST_PURCHASE_PRODUCT_PACKAGE=162,163,164,165,166,167,168,169,170,171

NEXT_PUBLIC_API_URL_ACCOUNT=https://account-api.thaibulksms.com/api
NEXT_PUBLIC_WEB_URL_ACCOUNT=https://account.thaibulksms.com
NEXT_PUBLIC_BASE_ASSET=https://d24sfg6509wewl.cloudfront.net
NEXT_PUBLIC_FB_PAGEID=148548805192273
NEXT_PUBLIC_DOMAIN_URL=https://thaibulksms.com
NEXT_PUBLIC_WEB_URL_DEVELOPER=https://developer.thaibulksms.com


NEXT_PUBLIC_GTM_CODE=xxx

```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Installation

```sh
$ yarn
```

## Build & Export

```sh
$ yarn build
```

## Deploy

```sh
$ cp ./out  webserver
```
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
