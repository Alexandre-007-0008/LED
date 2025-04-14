// app/api/v1/produtos/[id]/route.ts
import { produtoController } from '@/app/controllers/produtoController';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const produto = await produtoController.buscarProdutoPorId(params.id);
    
    if (!produto) {
      return NextResponse.json(
        { erro: 'Produto não encontrado' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json({ produto });
  } catch (error) {
    return NextResponse.json(
      { erro: 'Erro ao buscar produto' }, 
      { status: 500 }
    );
  }
}


export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  try {
    await produtoController.excluirProduto(id);

    return NextResponse.json(
      { mensagem: 'Produto removido com sucesso' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao remover produto:', error);
    return NextResponse.json(
      { erro: 'Erro ao remover produto' },
      { status: 500 }
    );
  }
}


// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await produtoController.excluirProduto(params.id);

//     return NextResponse.json(
//       { mensagem: 'Produto removido com sucesso' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Erro ao remover produto:', error);
//     return NextResponse.json(
//       { erro: 'Erro ao remover produto' },
//       { status: 500 }
//     );
//   }
// }


// Implementações para PUT, DELETE, etc.