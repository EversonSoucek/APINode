const express = require("express")
const app = express()
app.use(express.json())
const rotaLivro  = require("./rotas/livro")

app.use('/livros', rotaLivro)



const port = 8000

app.get('/', (req, res) =>{
    res.send("Olá mundo")
})

app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`);
})
