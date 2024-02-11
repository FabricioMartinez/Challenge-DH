const {Professions} = require('../database/models');
const { Sequelize } = require('sequelize')
module.exports = {
    list : async (req,res) => {
        try {
            const dataProfessions= await Professions.findAll()
            res.json({
                code : 200,
                total : dataProfessions.length,
                professions: dataProfessions
            })
        }
        catch(error){
            console.error('Error al consultar con los aspirantes', error)
            res.status(500).json({error: 'Error al consultar profesion.'})
        }
    },
    search: async(req, res)=>{
        try{
            const dataProfessions = await Professions.findAll({
                where: {
                    professions: {
                        [Sequelize.Op.like]: `%${req.query.professions}%`
                    }
                }
            });
            if (dataProfessions.length === 0) {
                console.log('No se encontraron resultados en la base de datos.');
            }
            res.json({
                code: 200,
                total: dataProfessions.length,
                product: dataProfessions,
            });
        }catch(error){
            console.error('Error al consultar con los aspirantes', error)
            res.status(500).json({error: 'Error al consultar aspirante. '})
        }
    }
}