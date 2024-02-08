const {Professions} = require('../database/models');
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
    }
}