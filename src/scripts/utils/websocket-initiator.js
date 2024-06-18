// import NotificationHelper from './notification-helper';
// import CONFIG from '../globals/config';


// const WebSocketInitiator = {
//     webSocket: null,

//     init(url) {
//       this.webSocket = new WebSocket(url);
//       this.webSocket.onmessage = this._onMessageHandler;
//       this.webSocket.onclose = this._onCloseHandler;
//       this.webSocket.onerror = this._onErrorHandler;
//       this.webSocket.onopen = this._onOpenHandler;
//     },

//     _onMessageHandler(event) {
//       console.log('Message received:', event.data);
//       const data = JSON.parse(event.data);
//       console.log('Parsed message:', data);
//     },

//     _onCloseHandler(event) {
//       console.log('WebSocket closed:', event);
//     },

//     _onErrorHandler(error) {
//       console.error('WebSocket error:', error);
//     },

//     _onOpenHandler(event) {
//       console.log('WebSocket opened:', event);
//     },

//     sendMessage(message) {
//       if (this.webSocket.readyState === WebSocket.OPEN) {
//         this.webSocket.send(JSON.stringify(message));
//       } else {
//         console.error('WebSocket connection not open.');
//       }
//     },
//   };

//   export default WebSocketInitiator;
