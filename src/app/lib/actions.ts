'use server'

import Produto from "@/app/db/models/produto"
import { ProdutoType } from "../../app/types"
import { redirect } from "next/navigation"

// POST - Cadastrar produto
export async function cadastrarProduto(data: FormData) {
    const produto: ProdutoType = {
        name: String(data.get('name')),
        valor: Number(data.get('valor')) || 0,
        qtde: Number(data.get('qtde')) || 0,
        _id: "",
        id: ""
    }

    const novoProduto = await Produto.create(produto)
    console.log("Produto cadastrado:", novoProduto)

    redirect('/')
}

// PUT - Atualizar produto
export async function atualizarProduto(data: FormData) {
    const id = data.get('id')?.toString()
    

    const produtoAtualizado = await Produto.findByIdAndUpdate(
        id,
        {
            name: data.get('name')?.toString() || '',
            valor: Number(data.get('valor')) || 0,
            qtde: Number(data.get('qtde')) || 0,
        },
        { new: true } // retorna o documento atualizado
    )

    if (!produtoAtualizado) throw new Error("Produto não encontrado")

    redirect(`/produtos/${produtoAtualizado.id}`)
}

// DELETE - Remover produto
export async function removerProduto(id: string) {
    if (!id) throw new Error("ID do produto não fornecido")

    await Produto.findByIdAndDelete(id)

    redirect('/produtos')
}



// 'use server'

// import Produto from "@/app/db/models/produto"
// import { ProdutoType } from "../../app/types"
// import { redirect } from "next/navigation"

// export async function cadastrarProduto(data: FormData) {
//     const produto: ProdutoType = {
//         name: String(data.get('name')),
//         valor: Number(data.get('valor')?.toString()) || 0,
//         qtde: Number(data.get('qtde')?.toString()) || 0,
//         _id: "",
//         id: ""
//     } 

//     const p = await Produto.create(produto)
//     console.log("Produto cadastrado", p)

//     redirect('/')
// }

// export async function atualizarProduto(data: FormData) {
//     const p = await Produto.findOneAndUpdate(
//         {_id: data.get('id')},
//         {
//             nome: data.get('name')?.toString() || '',
//             valor: Number(data.get('valor')?.toString()) || 0,
//             qtde: Number(data.get('qtde')?.toString()) || 0,
//         }
//     )

//     redirect(`/produtos/${p.id}`)
// }

// export async function removerProduto(id: string) {
//     await Produto.deleteOne(
//         {_id: id}
//     )

//     redirect('/produtos')
// }