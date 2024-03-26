const { webSocketServer } = require('ws');
const uuid = require('uuid');

function webSocketServer(httpServer) {
    // Create a websocket object
    const wss = new webSocketServer({ noServer: true});

    // Handle the protocol upgrade from HTTP to WebSocket
    httpServer.on('upgrade', (request, socket, head) => {
        wss.handleUpgrade(request, socket, head, function done(ws) {
            wss.emit('connection', ws, request);
        });
    });
}

