import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import jwt from "jsonwebtoken";


const req = readline.createInterface({input: process.stdin, output: process.stdout,});

const tokenDecod = await req.question('Insira a chave secreta: ') 

const decoded = jwt.decode(tokenDecod.toString())

console.log("Seus decoded: ", decoded)

req.close()