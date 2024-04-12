const GameEvent = {
  System: 'system',
  End: "gameEnd",
  Start: "gameStart",
  Connect: "player",
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor(userName) {
    if (GameEventNotifier.instance) {
      return GameEventNotifier.instance;
    }

    this.username = userName;
    GameEventNotifier.instance = this;

    let port = window.location.port;
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    this.socket = new WebSocket(
      `${protocol}://${window.location.hostname}:${port}/ws`
    );
    this.socket.onopen = (event) => {
        this.receiveEvent(new EventMessage('game', GameEvent.System, { msg: 'connected' }))
        // this.displayMsg("system", "game", "connected");
        this.broadcastEvent(userName, GameEvent.Connect, {msg: 'connected'});
    };
    this.socket.onclose = (event) => {
        this.receiveEvent(new EventMessage('game', GameEvent.System, { msg: 'disconnected' }))
    };
    this.socket.onmessage = async (msg) => {
      try {
        const event = JSON.parse(await msg.data.text());
        this.receiveEvent(event);
      } catch {}
    };
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.socket.send(JSON.stringify(event));
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    // this.handlers.filter((h) => h !== handler);
    this.handlers= this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

export { GameEvent, GameEventNotifier };
