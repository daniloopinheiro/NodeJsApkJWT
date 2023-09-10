import * as readline from 'node:readline/promises';
import { KeyObject } from "crypto";
import jwt from "jsonwebtoken";

const req = readline.createInterface({input: process.stdin, output: process.stdout,});

const keySecret = await req.question('Digite sua Chave Secreta: ')
const senha = await req.question('Crie uma senha: ')
const senhaOp = await req.question('Crie uma senha opcional: ')

const jwtEncoded = await jwt.sign({
    senha,
    senhaOp
}, keySecret)

console.log("Encode jwt: ", jwtEncoded)
req.close()