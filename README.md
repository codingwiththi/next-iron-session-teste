#Exemplo de Autenticação de Usuário e Gravamento de Sessão com NextJs utilizando [`next-iron-session`]

## Example Next.js application using [`next-iron-session`](https://github.com/vvo/next-iron-session)

This example creates an authentication system that uses a **signed and encrypted cookie to store session data**. It relies on [`next-iron-session`](https://github.com/vvo/next-iron-session).

It uses current best practices for authentication in the Next.js ecosystem.

- [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) (SG)
- Logged in status synchronized between browser windows/tabs using **`withUser`** hook and [`swr`](https://swr.now.sh/) module
- Layout based on the user's logged-in/out status
- Session data is signed and encrypted in a cookie



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
