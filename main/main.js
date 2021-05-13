'use strict';

const Hapi = require('@hapi/hapi');
const getFile = require('./getFile');
const upload = require('./upload')
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        method: 'GET',
        path: '/upload',
        handler: (request, h) => {
          getFile();
          upload('./output.txt')
          return 'file Processed Successfully'
        }
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

   // console.log(err);
    process.exit(1);
});

init();