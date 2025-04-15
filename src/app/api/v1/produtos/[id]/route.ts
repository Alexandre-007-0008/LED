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

export async function POST(request: NextRequest) {
  try {
    const dados = await request.json();

    // Validação básica (opcional, mas recomendado)
    if (!dados.name || typeof dados.valor !== 'number' || typeof dados.qtde !== 'number') {
      return NextResponse.json(
        { erro: 'Dados inválidos. Certifique-se de enviar name, valor e qtde corretamente.' },
        { status: 400 }
      );
    }

    const novoProduto = await produtoController.criarProduto(dados);

    return NextResponse.json({ produto: novoProduto }, { status: 201 });
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    return NextResponse.json(
      { erro: 'Erro ao cadastrar produto' },
      { status: 500 }
    );
  }
}



export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  
  try {
    const dadosAtualizados = await request.json();
    
    const produtoAtualizado = await produtoController.atualizarProduto(id, dadosAtualizados);
    
    if (!produtoAtualizado) {
      return NextResponse.json(
        { erro: 'Produto não encontrado ou não pôde ser atualizado' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ produto: produtoAtualizado }, { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return NextResponse.json(
      { erro: 'Erro ao atualizar produto' },
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