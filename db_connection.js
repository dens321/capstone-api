const Sequelize = require('sequelize');

const sequelize = new Sequelize('capstone', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

module.exports.getUsers = async function() {
    try{
        await sequelize.authenticate();
        console.log("Connected");
        const [results, metadata] = await sequelize.query('SELECT * FROM users');
        return results;
    } catch (err) {
        console.log("Can't Connect to database");
    }
}