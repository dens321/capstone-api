const users = require('./users');
const db = require("./db_connection.js");

const addUserHandler = (request, h) => {
    const { username, password } = request.payload;
    // const userid = nanoid(16);
    const newUser = { username, password};

    users.push(newUser);

    const isSuccess = users.filter((user) => user.username === username).length > 0;

    if(isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'User berhasil ditambahkan',
            // data: {
            //     userId: userid,
            // },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
}

const getAllUsersHandler = async (req, h) => {
    const users = await db.getUsers();
    const response = h.response({
        status: 'success',
        data: users
    });
    response.code(200);
    return response;
};

module.exports = {addUserHandler, getAllUsersHandler};