import express from 'express'

const servidor = express()

servidor.get('/home', function controlador (req, res){
    return resposta.send('Meu primeiro servidor Node.js com Express')
})

servidor.listen(3000)