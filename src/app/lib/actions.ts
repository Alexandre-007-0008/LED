'use server'

import Produto from "@/app/db/models/produto"
import { ProdutoType } from "../../app/types"
import { redirect } from "next/navigation"

export async function cadastrarProduto(data: FormData) {
    const produto: ProdutoType = {
        name: String(data.get('name')),
        valor: Number(data.get('valor')?.toString()) || 0,
        qtde: Number(data.get('qtde')?.toString()) || 0,
        _id: "",
        id: ""
    } 

    const p = await Produto.create(produto)
    console.log("Produto cadastrado", p)

    redirect('/')
}

export async function atualizarProduto(data: FormData) {
    const p = await Produto.findOneAndUpdate(
        {_id: data.get('id')},
        {
            nome: data.get('name')?.toString() || '',
            valor: Number(data.get('valor')?.toString()) || 0,
            qtde: Number(data.get('qtde')?.toString()) || 0,
        }
    )

    redirect(`/produtos/${p.id}`)
}

export async function removerProduto(id: string) {
    await Produto.deleteOne(
        {_id: id}
    )

    redirect('/produtos')
}