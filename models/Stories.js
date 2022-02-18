const {Model,DataTypes} = require('sequelize')

const {sequelize} = require('../util/db')




class Stories extends Model{}
Stories.init({
    id: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    stories: {
        type:DataTypes.TEXT,
    }
    },
    {
        sequelize,
        underscored:true,
        timestamps:false,
        modelName:'Stories'
    })

module.exports =Stories
 