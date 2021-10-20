module.exports = (connection) => {
    
    const sequelize = require('sequelize');

    return connection.define("Categorys",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING,
        nacionality:sequelize.STRING
    });
};