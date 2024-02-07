module.exports = (sequelize, DataTypes) => {
    let alias = 'Professions';
    let colum ={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        professions:{
            type: DataTypes.STRING
        }
    }
    let config ={
        tableName: "professions",
        timestamps: false,
    };
    
    const Professions = sequelize.define(alias, colum, config)

    Professions.associate = (models) => {
        Professions.hasMany(models.Applicants, {
            as: "Applicants",
            foreignKey: "professionsId"
        });
    }

    return Professions;
};