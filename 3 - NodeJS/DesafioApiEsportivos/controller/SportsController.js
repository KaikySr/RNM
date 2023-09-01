const Sports = require('../models/Sports');

class SportsController {
    static async create(req, res) {
        const { nome, categoria, descricao, preco } = req.body;

        if (!nome || !categoria || !descricao || !preco)
            return res.status(400).send({ message: "Dados inválidos" })

        const sports =
        {
            id: sport.length,
            nome: nome,
            categoria: categoria,
            descricao: descricao,
            preco: preco
        }

        try {
            const s = await Sports.create(sports);
            return res.status(201).send({ message: "Produto inserido com sucesso", body: s });
        }
        catch (error) {
            return res.status(500).send({ error: error });
        }
    };

    static async getAllSports(req, res) {
        try {
            const sport = await Sports.find()
            return res.status(200).send({ data: sport });
        }
        catch (error) {
            return res.status(500).send({ error: error });
        }
    };

    static async getById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "No id provider" })

        try {
            const sport = await Sports.findById(id);
            return res.status(200).json(sport);
        }
        catch (error) {
            res.status(500).json({ error: error })
        }
    };

    static async updateById(req, res) {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum provedor de id." })

        const sports = req.body;

        if (!sports.preco)
            return res.status(400).send({ message: "Nenhum provedor de preco." })

        try 
        {
            const newSports = await sports.findByIdAndUpdate
                (
                    id,
                    { preco: sports.preco }
                );
            return res.status(201).send(newSports);
        }
        catch (error) 
        {
            return res.status(500).send({ error: error });
        }
    };

    static async deleteById(req, res) 
    {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "Nenhum provedor de id." });

        try 
        {
            await Sports.findByIdAndRemove(id);
            return res.status(200).send({ message: "Produto deletado com sucesso!" })
        }
        catch (error) 
        {
            console.log(error);
            return res.status(500).send({ message: "Algo falhou." })
        }
    };
}

module.exports = SportsController