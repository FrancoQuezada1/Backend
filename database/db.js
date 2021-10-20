const { config } = require("../config/config.js");
const InitialModels = require("../models")

const Sequelize = require("sequelize");

const connection = new Sequelize(config.database_name , config.database_password, config.database_user , {
    host: 'localhost',
    dialect: 'mysql'

})

const { Name , Menu } =(connection)

connection.sync({ force: false }).then(() => {
    console.log("Ando ready pa");
}).catch(e => {
    console.log(e);
});

module.exports = {
    Menu,
    Name
}