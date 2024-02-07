const { Sequelize } = require('sequelize')
const {Applicants}= require('../database/models')

module.exports={
    list: async (req,res)=>{
    try{ 
        const dataApplicants= await Applicants.findAll()
        res.json({
            code: 200,
            total: dataApplicants.length,
            product: dataApplicants,
        })
    } catch(error){
        console.error('Error al consultar con los aspirantes', error)
        res.status(500).json({error: 'Error al consultar aspirante. '})
    }
    }
}