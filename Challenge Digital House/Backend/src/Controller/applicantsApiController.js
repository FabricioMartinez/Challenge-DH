const { Sequelize } = require('sequelize')
const {Applicants}= require('../database/models')
const db = require('../database/models')

module.exports={
    list: async (req,res)=>{
        try{ 
            const dataApplicants= await Applicants.findAll()
            res.json({
                code: 200,
                total: dataApplicants.length,
                applicants: dataApplicants,
            })
        } catch(error){
            console.error('Error al consultar con los aspirantes', error)
            res.status(500).json({error: 'Error al consultar aspirante. '})
        }
    },
    search: async(req, res)=>{
        try{
            const dataApplicants = await Applicants.findAll({
                where: {
                    DNI: {
                        [Sequelize.Op.like]: `%${req.query.DNI}%`
                    }
                }
            });
            if (dataApplicants.length === 0) {
                console.log('No se encontraron resultados en la base de datos.');
            }
            res.json({
                code: 200,
                total: dataApplicants.length,
                product: dataApplicants,
            });
        }catch(error){
            console.error('Error al consultar con los aspirantes', error)
            res.status(500).json({error: 'Error al consultar aspirante. '})
        }
    },

    //crear 16-24
    create: async (req, res) =>{
        const profesions = await db.Professions.findAll(({ raw: true }))
        const data = await db.Applicants.create(
            {
            id:req.body.id,
            DNI: req.body.DNI,
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            phone:req.body.phone,
            urlLinkedin: req.body.urlLinkedin,
            birthdate: req.body.birthdate,
            sex: req.body.sex,
            image:req.body.image,
            professionsId: req.body.professionsId,
        })

    },
    //modificar 16-24
    edit: async (req, res) =>{
        const data = await db.Applicants.update(
            { id:req.body.id,
                DNI: req.body.DNI,
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                phone:req.body.phone,
                urlLinkedin: req.body.urlLinkedin,
                birthdate: req.body.birthdate,
                sex: req.body.sex,
                image:req.body.image,
                professionsId: req.body.professionsId,
          },{
            where:{
                id: req.params.id
            }
          })
    },
//eliminar 16-24
   delete: async (req, res) =>{
        const data = await db.Applicants.destroy({
            where:{
                id:req.params.id
            }
        })
    }
    
}