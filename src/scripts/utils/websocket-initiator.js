const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },
  _onMessageHandler(event) {
    console.info(event.data);
  },
};

export default WebSocketInitiator;
