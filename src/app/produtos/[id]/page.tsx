import Produto from '@/app/db/models/produto';
import { ReactNode } from 'react';
import { connectDB } from '@/app/db/mongodb';

export default async function Page({ params }: any): Promise<ReactNode> {
  try {
    await connectDB();

    const id = params.id;

    if (!id) return <div>Parâmetro ID ausente</div>;

    console.log("ID sendo buscado:", id);

    const produto = await Produto.findById(id);

    if (!produto) return <div>Produto não encontrado</div>;

    return (
      <>
        <div className="top-bar">
          <div className="logo"><a href="/">Electronic's Place</a></div>
          <div className="user-area">
            <a href="/carrinho">
              <img className="button-img button-img2" alt="" />
            </a>
            <a href="/login">
              <img className="button-img button-img1" alt="" />
            </a>
          </div>
        </div>
        <div className="lista">
          <h1><strong>{produto.name}</strong></h1>
          <p>Valor: R$ {produto.valor}</p>
          <p>Estoque: {produto.qtde}</p>
          <button className="adicionar">
            <a href={`/carrinho/${produto._id}`}>Adicionar ao carrinho</a>
          </button>
        </div>
        <div className="bottom-bar">
          <div className="espaço">
            <a href="/fale-conosco">Fale conosco!</a>
            <a href="/fale-conosco">Divulgue sua marca no nosso site!</a>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Erro ao carregar o produto:', error);
    return <div>Ocorreu um erro ao carregar os dados do produto.</div>;
  }
}


// import Produto from '@/app/db/models/produto' 
// import { ReactNode } from 'react'
// import mongoose from 'mongoose'
// import { NextRequest } from 'next/server';


// // interface Params {
// //   id: number;
// // }

// type Params = { id: number };
// // const { id } = params;

// // export async function generateMetadata({ params }: { params: Params }) {
//   export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
//     try {
//       await mongoose.connect(process.env.MONGODB_URI!); // Conecta ao banco

//       const id = Number(params.id);
//    // Verifique se está acessando o _id corretamente
//     const produto = await Produto.findById(id);

//     if (!produto) {
//       return {
//         title: "Produto não encontrado",
//         description: "Este produto não existe."
//       }
//     }

//     return {
//       title: produto.name,
//       description: `Página do produto ${produto.name}`
//     }
//   } catch (error) {
//     console.error('Erro ao gerar metadata para o produto:', error);
//     return {
//       title: "Erro ao carregar produto",
//       description: "Ocorreu um erro ao carregar os dados do produto."
//     }
//   }
// }

// export default async function Page({ params }: { params: Params }) : Promise<ReactNode> {
//   try {
//     const { id } = params.id;  // Acessando o _id corretamente

//     // // Verifique se o ID é válido
//     // if (!mongoose.Types.ObjectId.isValid(id as number)) {
//     //   return <div>ID inválido</div>;
//     // }
//     if (isNaN(id)) {
//       return <div>ID inválido</div>;
//     }

//     const produto = await Produto.findById(id);
    

//     if (!produto) {
//       return <div>Produto não encontrado</div>;
//     }

//     return (
//       <>
//         <div className="top-bar">
//           <div className="logo"><a href="/">Electronic's Place</a></div>
//           <div className="user-area">
//             <a href="/carrinho">
//               <img className="button-img button-img2" />
//             </a>
//             <a href="/login">
//               <img className="button-img button-img1" />
//             </a>
//           </div>
//         </div>
//         {<h2>{produto.id}</h2>}
//         {<h1>{produto.name}</h1>}
//         <p>Valor: R$ {produto.valor}</p>
//         <p>Estoque: {produto.qtde}</p>
//         <div className="bottom-bar">
//         <div className="espaço">
//           <a href="/fale-conosco">Fale conosco!</a>
//           <a href="/fale-conosco">Divulgue sua marca no nosso site!</a>
//         </div>
//       </div>
//       </>
//     );
//   } catch (error) {
//     console.error('Erro ao carregar o produto:', error);
//     return <div>Ocorreu um erro ao carregar os dados do produto.</div>;
//   }
// }


//tava assim antes(só pra não perder)

//   import Produto from '@/app/db/models/produto'
// import { ReactNode } from 'react'
// import mongoose from 'mongoose'
// interface params {
//   slug: string;
// }

// // ({ params, searchParams }: any, parent: any)
// export async function generateMetadata({ params }: { params: { id: string } }) {
//       const { id } = await params
//       const produto = await Produto.findById(id)

//       if (!produto) {
//         return {
//           title: "Produto não encontrado",
//           description: "Este produto não existe.",
//         };
//       }
    
//       return {
//         title: produto.name,
//         description: Página do produto ${produto.name}
//       }
//     }
  
//   export default async function Page({ params }: any) : Promise<ReactNode> {
//     const { id } = await params
//     const produto = await Produto.findById( id ) 

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return <div>ID inválido</div>; // Retorna um erro amigável caso o ID seja inválido
//   }

//     if (!produto) { // Verifique se o produto é null antes de renderizar
//       return <div>Carregando produto...</div>; // Mostra uma mensagem de carregamento ou outro indicador
//     }
//     return (
//       <>
//           <div className="top-bar">
//               <div className="logo"><a href="/">Electronic's Place</a></div>
//               <div className="user-area">
//                   <a  href="/carrinho">
//                       <img className="button-img button-img2"/>
//                   </a>
//                   <a href="/login">
//                       <img className="button-img button-img1"/>
//                   </a>
//               </div>
//           </div>
//         <h1>{ produto.name }</h1>
//         <p>Valor: R$ {produto.valor}</p>
//         <p>Estoque: {produto.qtde}</p>
//       </>
//     )
//   }