const sequelize = require("../database/db");

module.exports = (connection,sequelize) => {
    return connection.define("menu",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
         name:Sequelize.INTEGER,
         category_id:sequelize.INTEGER


    })
}