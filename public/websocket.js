const { webSocketServer } = require('ws');
const uuid = require('uuid');

function webSocketServer(httpServer) {
    // Create a websocket object
    const wss = new webSocketServer({ noServer: true});

    // 
}