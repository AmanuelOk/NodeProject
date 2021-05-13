'use strict';

const Hapi = require('@hapi/hapi');
const getFile = require('./getFile_2');
const upload = require('./upload')

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/upload',
    handler: (request, h) => {
     getFile();
     upload('./output_.txt')
      return 'file processed Successfully'
    }
});

exports.init = async () => {

    await server.initialize();
    return server;
};

exports.start = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    return server;
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
