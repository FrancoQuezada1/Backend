const sequelize = require("../database/db");

module.exports = (connection,sequelize) => {
    return connection.define("name",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING,
        nacionality: sequelize.STRING
    });
};