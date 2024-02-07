module.exports = (sequelize, DataTypes) => {
    let alias = 'Applicants';
    let colum ={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        DNI:{
            type: DataTypes.BIGINT
        },
        name:{
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        phone:{
            type: DataTypes.STRING
        },
        urlLinkedin:{
            type: DataTypes.STRING
        },
        birthdate:{
            type: DataTypes.DATE
        },
        sex:{
            type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro')
        },
        image:{
            type: DataTypes.STRING
        },
        professionsId:{
            type: DataTypes.INTEGER
        }
    }
    let config = {
        tableName: "applicants",
        timestamps: false,
    };
    const Applicants = sequelize.define(alias, colum, config)

    Applicants.associate = (models) => {
        Applicants.belongsTo(models.Professions, {
            as: "Professions",
            foreignKey: "professionsId"
        });
    }
    return Applicants;
};