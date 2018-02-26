import * as http from 'http';
import app from './config/express';

const server: http.Server = http.createServer(app);

server.listen(process.env.EXPRESS_APP_PORT);

server.on('error', (e: Error) => {
	console.log('Error starting server' + e);
});

server.on('listening', () => {
	console.log('Servser started on port ' + process.env.EXPRESS_APP_PORT);
});