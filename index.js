


// const jwt = require("jsonwebtoken");

// // Essa chave deve ser armazenada em locais seguros, nunca diretamente no código
// const JWT_SECRET_KEY = 'chave_secreta'

// const usuario = { id: "123", role: "admin" };
// // função jwt.sign: gera o token
// // Parâmetro expiresIn - tempo de validade do token
// const token = jwt.sign(usuario, JWT_SECRET_KEY, { expiresIn: "1h" });

// console.log("Token JWT:", token);

// try {
//   const decoded = jwt.verify(token, JWT_SECRET_KEY);
//   console.log('Dados do JWT', decoded)
// } catch (error) {
//   console.error("Token inválido ou expirado:", error)
// }


//criptografando senhas
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// bcrypt.hash(myPlaintextPassword, saltRounds).then(function(hash) {
//   // Store hash in your password DB.
// });
// console.log('senha', hash.senha)

// Ao invés de usar "import", use "require":
// const bcrypt = require('bcrypt');

// Exemplo de uso
// bcrypt.genSalt(10, function(err, salt) {
//   if (err) throw err;
//   bcrypt.hash('minhaSenha', salt, function(err, hash) {
//     if (err) throw err;
//     console.log(hash);
//   });
// });

const jwt = require("jsonwebtoken");

// Essa chave deve ser armazenada em locais seguros, nunca diretamente no código
const JWT_SECRET_KEY = 'chave_secreta'

const usuario = { id: "123", role: "admin" };
// função jwt.sign: gera o token
// Parâmetro expiresIn - tempo de validade do token
const token = jwt.sign(usuario, JWT_SECRET_KEY, { expiresIn: "1h" });

console.log("Token JWT:", token);

try {
  const decoded = jwt.verify(token, JWT_SECRET_KEY);
  console.log('Dados do JWT', decoded)
} catch (error) {
  console.error("Token inválido ou expirado:", error)
}
  
