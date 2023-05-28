const { getTodosFavoritos, deletaFavoritoPorId, insereFavoritos } = require("../servicos/favorito")

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.paramns.id
        insereFavoritos(id)
        res.status(201)
        res.send('Favorito inserido')
    }
    catch (err) {
        res.status(500)
        res.send(err.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaFavoritoPorId(id)
            res.send("Favorito deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito,
}