const sequelize = require("../database/db");

module.exports = (connection,sequelize) => {
    return connection.define("name",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING,
        direction: sequelize.STRING,
        phone: sequelize.STRING,
        menu: sequelize.STRING,
        orders: sequelize.STRING,
        horary: sequelize.STRING
    });
};