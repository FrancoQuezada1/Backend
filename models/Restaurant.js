module.exports = (connection) => {

    const sequelize = require('sequelize');

    return connection.define("Restaurant",{
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