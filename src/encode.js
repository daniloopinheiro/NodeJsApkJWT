import * as readline from "readline";
import { KeyObject } from "crypto";
import jwt from "jsonwebtoken";

var req = readline.createInterface({input: process.stdin,  output: process.stdout});

req.question('Digite sua chave secreta:', chave => {
    req.question('Senha: ', senha => {
        req.question('SenhaOpcional: ', senhaOp => {

            const jwtEncoded = jwt.sign
            ({
                senha,
                senhaOp
            }, chave)
            
            console.log("Encode jwt:", jwtEncoded)
            req.close()

        })
    })
})