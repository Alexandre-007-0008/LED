
// 'use client'
// import { FormEvent } from 'react'
// // import { useUser } from '../Contexts/UserContext'
// import '../globals.css';

// //import { signIn } from "next-auth/react"
// //import Link from 'next/link'
 
// export default function Pagina() {

//   const { login } = useUser() || {}

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault() //previne o recarregamento da página 
//     const formData = new FormData(event.currentTarget)
//     const loginUsuario = formData.get('login') as string 
//     const senhaUsuario = formData.get('senha') as string 
 
//     try {
//       await login(loginUsuario, senhaUsuario)
//     } catch(e) {
//       console.log("Erro de login", e)
//       alert("Usuário inválido")
//     }
//   }
 
//   return (
//     <>
      
//           <meta charSet="UTF-8"/>
//           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//           <title>Electronic's Place</title>
      
//           <div className="top-bar">
//               <div className="logo">Electronic's Place</div>
//               <div className="user-area">
//                   <a href="/login">
//                     <img className="button-img button-img1"/>
//                   </a>
//               </div>
//           </div>
//           <form className="search-container" onSubmit={handleSubmit}>
//             <input type="text" placeholder="Pesquisar..."/>
//           </form>

//           <div className="text-car">
//             <p>Você ainda não adicionou nenhum produto ao seu carrinho...</p>
//             <a className="text-car a" href="/produtos">Comece aqui</a>
//             <br></br>
//            <a href="/carrinho/[id]/login">carrinho logado</a> {/*  Tirar depois */}
//           </div>
          
//     </>
//   )
// }