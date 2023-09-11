[![CodeFactor](https://www.codefactor.io/repository/github/daniloopinheiro/nodejsapkjwt/badge)](https://www.codefactor.io/repository/github/daniloopinheiro/nodejsapkjwt)

# Nodejs, pequena demostração com JWT

## Métodos utilizados do package

### Encoded

---
<details>
    <summary>Encoded: Codificada</summary>

    $ node src/encoded.js


```json
Digite sua chave secreta: 123
Senha: 123
SenhaOpcional: 123
Encode jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZW5oYSI6IjEyMyIsInNlbmhhT3AiOiIxMjMiLCJpYXQiOjE2OTQzOTA0OTZ9.2Hc-TKPhpWWE1TVJTTOYbVX91_svU9R9VpaiA4F9U64
```
</details>

### Decoded

---
<details>
    <summary>Decoded: Decodificado</summary>

    $ node src/decoded.js

```json
Insira a chave secreta: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZW5oYSI6IjEyMyIsInNlbmhhT3AiOiIxMjMiLCJpYXQiOjE2OTQzOTA0OTZ9.2Hc-TKPhpWWE1TVJTTOYbVX91_svU9R9VpaiA4F9U64
Seus decoded:  { senha: '123', senhaOp: '123', iat: 1694390496 }
```
</details>
