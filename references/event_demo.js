const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter {}

//  Init object
const myEmitter = new MyEmitter();

// Event listender
myEmitter.on('event', () => console.log('Event Fired'));

// Init event
myEmitter.emit('event');