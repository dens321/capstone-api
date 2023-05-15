const {getAllUsersHandler, addUserHandler} = require("./handler");

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: getAllUsersHandler
    },
    {
        method: 'POST',
        path: '/',
        handler: addUserHandler
    }
]

module.exports = routes;