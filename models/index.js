module.exports = (connection) => {

    const categoryModel = require('./Category');
    const plateModel = require('./Plate');
    const restaurantModel = require('./Restaurant');


    const Category = categoryModel(connection);
    const Plate = plateModel(connection);
    const Restuarant = restaurantModel(connection);

    return {
        Category,
        Plate,
        Restuarant
    }
};