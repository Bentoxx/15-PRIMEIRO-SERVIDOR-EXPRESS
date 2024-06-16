import express, { Request, Response } from 'express'

const servidor = express()

function controlador (req: Request, res: Response){
    return res.send('Meu primeiro servidor Node.js com Express e TypeScript')
}
servidor.get('/home', controlador)

servidor.listen(3000)