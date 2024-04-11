const GameEvent = {
  // System: 'system',
  End: "gameEnd",
  Start: "gameStart",
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class gameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    let port = window.location.port;
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    this.socket = new WebSocket(`${protocol}//${window.location.hostname}:${port}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg("system", "game", "connected");
      this.broadcastEvent(this.getPlayerName(), GameConnectEvent, {});
    };
    this.socket.onclose = (event) => {
      this.displayMsg("system", "game", "disconnected");
    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg("player", msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg("player", msg.from, `started a new game`);
      } else if (msg.type === GameConnectEvent) {
        this.displayMsg("player", msg.from, `connected`);
      }
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
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
        handler(event);
      });
  }
}

const gameEventNotifier = new gameEventNotifier();
export { GameEvent, GameNotifer };