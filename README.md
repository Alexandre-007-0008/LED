This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Ver erro detalhado no log(exemplo):cat /home/gpds/.npm/_logs/2025-03-24T16_29_37_844Z-debug.log

Endereço IP atual ( 177.135.53.76/32 ) adicionado!
Visite Network Access para modificar suas configurações.

esses são os produtos que estão no banco, ou seja, nenhum.  
Lista de Produtos: []


# Como rodar a aplicação: 
1º - descomente o código do instrumentations
2ª - Rode "npm run dev"
3ª - Deve criar as collections "produtos" e "usuarios"
4º - Derrube a aplicação e rode o nom run dev novamente
5º - Cadastre um produto e confira se deu certo
