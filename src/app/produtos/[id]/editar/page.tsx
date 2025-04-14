

import { atualizarProduto } from '@/app/lib/actions'
import Produto from '@/app/db/models/produto'
import {redirect} from 'next/navigation'
import { FormEvent } from 'react'
export default async function Pagina({ params }: any) {
    const { _id } = await params
    const produto = await Produto.findById(_id)

     async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        const formData = new FormData(event.currentTarget)
        const name = formData.get("name") as string
        const valor = Number(formData.get("valor"))
        const qtde = Number(formData.get("qtde"))
    
        if (!name || isNaN(valor) || valor <= 0) {
          alert("Preencha todos os campos corretamente")
          return;
        }
    
       
          const response = await axios.post("/api/v1/produtos", { name, valor, qtde })
          alert("Produto atualizado com sucesso!")
          console.log("✅ Resposta do backend:", response.data)
        //   redirect('/page')
     }

    
    return (
        <>
             <div className="container">
                <h2 className="text-center">Atualizar Produto</h2>

                <form action={atualizarProduto} className="form-container">
                <input type='hidden' name='id' value={_id}/>
                    <div className="form-group">
                    <label htmlFor="name">Nome do Produto</label>
                    <input type="text" 
                    name="name" 
                    placeholder="" //tirei pq tava redundante (tava o msm do label)
                    className="form-control"
                    required />
                    </div>

                    <div className="form-group">
                    <label htmlFor='valor'>Valor do produto</label>
                    <input
                        id='valor'
                        name='valor'
                        type='number'
                        placeholder="" //tirei pq tava redundante (tava o msm do label)
                        className="form-control"
                        required
                    />
                    </div>

                    <div className="form-group">
                    <label htmlFor='estoque'>Estoque do produto</label>
                    <input
                        id='estoque'
                        name='estoque'
                        type='number'
                        placeholder="" //tirei pq tava redundante (tava o msm do label)
                        className="form-control"
                        required
                    />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-3">
                    Salvar Produto
                    </button>
                </form>
            </div>
        </>
    )
}

// import { atualizarProduto } from '@/app/lib/actions'
// import Produto from '@/app/db/models/produto'
// import { redirect } from 'next/navigation'
// import { ProdutoType } from '@/app/types'
// import { useEffect, useState } from 'react'
// // import mongoose from '@/app/db/mongodb'
// // import { ObjectId } from 'mongodb'; // Importar ObjectId

// export default async function Pagina({ params }: any) {
//     const { id } = params

//     const produto = await Produto.findById(id);
//     const [produtos, setProdutos] = useState<ProdutoType[]>([])
//     const [qtde, setQtde] = useState<number>(0)
  

//     const carregarDados = async () => {
//         axios.get<ProdutoType[]>('http://localhost:3000/api/v1/produtos').then((resp) => setProdutos(resp.data))
//         axios.get<{ total: number }[]>('http://localhost:3000/api/v1/relatorios/quantidade').then((resp) => {
//         setQtde(resp.data[0] ? resp.data[0].total : 0)
//         })
//     }

//     useEffect(() => {
//         carregarDados()
//     }, [])


//   return (
//         <>
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
//              <h1>Atualizar produto</h1> {/*não terminei ver oq o chat escreveu q eu n vi ainda */}

//             <form action={atualizarProduto}>
//                 <input type='hidden' name='id' value={id} />
//                 <div>
//                     <label htmlFor='name'>Nome do produto</label>
//                     <input
//                         id='name'
//                         name='name'
//                         type='text'
//                         defaultValue={produto.name}
//                         // autoFocus={true}
//                     />

//                     <label htmlFor='valor'>Valor do produto</label>
//                     <input
//                         id='valor'
//                         name='valor'
//                         type='number'
//                         defaultValue={produto.valor}
//                         />

//                     <label htmlFor='estoque'>Estoque do produto</label>
//                     <input
//                         id='qtde'
//                         name='qtde'
//                         type='number'
//                         defaultValue={produto.qtde}
//                         />
//                 </div>

//                 <button>Salvar</button>
//             </form>
//         </>
//     )
// }





    // Garantir que o id seja convertido para ObjectId
    // const objectId = ObjectId.createFromTime(id); 
  
    // const produto = await Produto.findById(objectId);
  
    // if (!produto) {
    //     // Trate o caso de produto não encontrado, se necessário
    //     return <p>Produto não encontrado</p>;
    // }