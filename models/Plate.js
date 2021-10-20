module.exports = (connection) => {

    const sequelize = require('sequelize');

    return connection.define("Plate",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
         name:sequelize.INTEGER,
         category_id:sequelize.INTEGER


    })
}