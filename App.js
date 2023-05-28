const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({ origin: "*" }))
const rotaLivro = require("./rotas/livro")

const rotaFavorito = require("./rotas/favoritos")

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)


const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send("Olá mundo")
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})
