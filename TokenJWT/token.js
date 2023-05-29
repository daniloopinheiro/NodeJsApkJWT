import jwt from "jsonwebtoken";

const keySecret = "abc123"

const token = jwt.sign(
    {
        nomeDaFruta: "Banana",
        sabor: "doce"
    }, 
keySecret);

console.log(token)

const tokenDecod = jwt.verify(token, keySecret)
console.log(tokenDecod)