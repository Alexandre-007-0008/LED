import { connectDB } from "@/app/db/mongodb";
import Produto from "@/app/db/models/produto";
import mongoose from "@/app/db/mongodb";

export async function GET() {
  await connectDB(); // Conectando ao banco antes de buscar os produtos

  try {
    const produtos = await Produto.find();
    return new Response(JSON.stringify(produtos), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("❌ Erro ao buscar produtos:", error);
    return new Response(JSON.stringify({ error: "Erro ao buscar produtos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function POST(req: Request) {
  await connectDB(); // Conectar ao banco

  try {
    const body = await req.json();
    console.log("📢 Recebendo no backend:", body); // <-- Log para verificar os dados

    const { name, valor, id } = body;

    if (!name || valor == null) {
      return new Response(
        JSON.stringify({ error: "Nome e valor são obrigatórios" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const produto = new Produto({ name, valor, id });
    await produto.save();

    console.log("✅ Produto salvo no banco:", produto);

    return new Response(JSON.stringify(produto), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("❌ Erro ao criar produto:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}



// DELETE - Remover produto por ID
export async function DELETE(request: Request) {
  await connectDB();

  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "ID não fornecido" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const deleted = await Produto.findByIdAndDelete(id);

    if (!deleted) {
      return new Response(JSON.stringify({ error: "Produto não encontrado" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ message: "Produto removido com sucesso" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("❌ Erro ao remover produto:", error);
    return new Response(JSON.stringify({ error: "Erro ao remover produto" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}







// export async function PUT(req: Request) {
//   try {
//     const body = await req.json();
//     const { id, name, valor } = body;

//     const index = Produto.findIndex((p) => p.id === id);
//     if (index === -1) {
//       return Response.json({ erro: "Produto não encontrado" }, { status: 404 });
//     }

//     Produto[index] = { id, name, valor }; // Atualiza os dados
//     return Response.json(Produto[index]);
//   } catch (error) {
//     return Response.json({ erro: "Erro ao atualizar o produto" }, { status: 400 });
//   }
// }

// Função DELETE - Remove um produto pelo ID
// export async function DELETE(req: Request) {
//   try {
//     const { id } = await req.json();

//     const index = Produto.findById((p: { id: any; }) => p.id === id);
//     if (await index === -1) {
//       return Response.json({ erro: "Produto não encontrado" }, { status: 404 });
//     }

//     Produto.splice(index, 1); // Remove o produto
//     return Response.json({ mensagem: "Produto removido com sucesso" });
//   } catch (error) {
//     return Response.json({ erro: "Erro ao remover o produto" }, { status: 400 });
//   }
// }



//TESTE NO POSTMAN

// export let PRODUTOS = [
//   { id: "1", name: "Produto Teste", valor: 99.99 },
// ];

// // Função GET - Retorna a lista de produtos
// export async function GET() {
//   return Response.json(PRODUTOS);
// }

// // Função POST - Cadastra um novo produto
// export async function POST(req: Request) {
//   try {
//     const body = await req.json(); // Lê os dados do corpo da requisição
//     const novoProduto = {
//       id: String(Date.now()), // Gera um ID único
//       name: body.name,
//       valor: body.valor,
//     };

//     PRODUTOS.push(novoProduto); // Adiciona o novo produto à lista
//     return Response.json(novoProduto, { status: 201 }); // Retorna o novo produto
//   } catch (error) {
//     return Response.json({ erro: "Erro ao cadastrar o produto" }, { status: 400 });
//   }
// }

// // Função PUT - Atualiza um produto existente

// // Função DELETE - Remove um produto pelo ID
// export async function DELETE(req: Request) {
//   try {
//     const { id } = await req.json();

//     const index = PRODUTOS.findIndex((p) => p.id === id);
//     if (index === -1) {
//       return Response.json({ erro: "Produto não encontrado" }, { status: 404 });
//     }

//     PRODUTOS.splice(index, 1); // Remove o produto
//     return Response.json({ mensagem: "Produto removido com sucesso" });
//   } catch (error) {
//     return Response.json({ erro: "Erro ao remover o produto" }, { status: 400 });
//   }
// }

  