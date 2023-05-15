const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
    // create server
    const server = Hapi.server({
        port: 8080,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    })

    // routing configuration
    server.route(routes);

    // start server
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();