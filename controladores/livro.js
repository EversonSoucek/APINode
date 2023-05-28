const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivro } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        }
        else {
            res.status(422)
            res.send("id invalido")
        }
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send('livro inserido')
        } else {
            res.status(422)
            res.send("campo nome obrigatorio")
        }
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function patchLivro(req, res) {
    try {

        if (id && Number(id)) {
            const id = req.params.id
            const body = req.body
            modificaLivro(body, id)
            res.send("item modificado")
        }
        else {
            res.status(422)
            res.send("id invalido")
        }
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function deleteLivro(req, res) {
    try {
        if (id && Number(id)) {
            const id = req.params.id
            deletaLivro(id)
            res.send("livro deletado")
        }
        else {
            res.status(422)
            res.send("id invalido")
        }
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}