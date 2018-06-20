
// Message class
class Message {

  // Init new messages
  constructor() {

    this.messages = [];

    // Connect to socket server
    this.socket = io();

    // Handle connection errors
    this.socket.once('connect_error', () => {

      // Notify frontend of connection issues
      window.dispatchEvent( new Event('messages_error') );
    });

    // Listen for server messages
    this.socket.on('all_messages', (messages) => {

      // Initialise with all server messages
      this.messages = messages;

      // Notify frontend that messages are ready
      window.dispatchEvent( new Event('messages_ready') );
    });

    // Listen for a single new message
    this.socket.on('new_message', (message) => {

      // Send to client
      window.dispatchEvent( new CustomEvent('messages_new', {detail:message}) );
      
      // Add to existing messages
      this.messages.unshift(message);
    });
  }

  // Get all messages
  get all() {
    return this.messages;
  }

  // Add a new message and return it
  add( data_uri, caption_text ) {

    // Create message
    let message = {
      photo: data_uri,
      caption: caption_text
    }
    
    // Add to existing array
    this.messages.unshift(message);

    // Emit message
    this.socket.emit('new_message', message);

    // Return to app
    return message;
  }
}

