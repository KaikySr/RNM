const Cars = require('../models/Cars')

class CarController
{
    static async create(req, res)
    {
        const { nome, marca, quilometragem, ano, cor } = req.body;

        if (!nome || !marca || !quilometragem || !ano || !cor)
            return res.status(400).send({ message: "Dados inválidos" })

        const car =
        {
            id: cars.length,
            nome: nome,
            marca: marca,
            quilometragem: quilometragem,
            ano: ano,
            cor: cor
        }

        try 
        {
            const c = await Cars.create(car);
            return res.status(201).send({ message: "Carro inserido com sucesso", body: c});
            
        } 
        catch (error) 
        {
            return res.status(500).send({ error: error });
        }
    };

    static async getAllCars(req, res) 
    {
        try 
        {
            const car = await Cars.find()
            return res.status(200).send({ data: car });
        } 
        catch (error) 
        {
            return res.status(500).send({ error: error });
        }
    };

    static async getById(req, res) 
    {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "No id provider" })

        try 
        {
            const car = await Cars.findById(id);
            return res.status(200).json(car);
        } 
        catch (error) 
        {
            res.status(500).json({ error: error })
        }
    };

    static async updateById(req, res) 
    {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "No id provider" })

        const cars = req.body;

        if (!cars.quilometragem)
            return res.status(400).send({ message: "No quilometragem provider" })

        try 
        {
            const newCar = await Cars.findByIdAndUpdate
            (
                id,
                { quilometragem: cars.quilometragem }
            );

            return res.status(200).send(newCar);
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
            return res.status(400).send({ message: "No id provider" });

        try 
        {
            await Cars.findByIdAndRemove(id);
            return res.status(200).send({ message: "Car deleted successfully" })
        } 
        catch (error) 
        {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }
    };
}

module.exports = CarController;