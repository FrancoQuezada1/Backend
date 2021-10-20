const { config } = require("../config/config.js");
const InitialModels = require("../models/index")

const Sequelize = require("sequelize");

const connection = new Sequelize(config.database_name, config.database_user, config.database_password, {
    host: 'localhost',
    dialect: 'mysql'

})

const { Restaurant, Plate, Category } = InitialModels(connection)

connection.sync({ force: true }).then(() => {
    console.log("Ando ready pa");
}).catch(e => {
    console.log(e);
});

module.exports = {
    Plate,
    Restaurant,
    Category
}