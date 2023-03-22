// build restful api with hapi
// import hapi
const Hapi = require('@hapi/hapi');
// import routes
const routes = require('./routes');

const init = async () => {
  // create server
  const server = Hapi.server({
    // add port
    port: 5000,
    // add host
    host: 'localhost',
    // add cors
    routes: {
      cors: {
        // allow all origins
        origin: ['*'],
      },
    },
  });

  // register routes
  server.route(routes);

  // start server
  await server.start();
  // print server info
  console.log(`Server berjalan pada ${server.info.uri}`);
};

// run server
init();
