// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    // once you send a message, make the success function make a get request to get new messages
    // maybe use setInterval to request new messages every like 3 seconds
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB || function() {
        console.log('sent');
      },
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  update: function() {
    console.log('update');
    App.fetch();
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server, // the 'address' - where the request should go, and what it's for
      type: 'GET', // the intended action on the requested resource
      data: { order: '-createdAt' }, // extra info for server to use when fulfilling the request
      contentType: 'application/json', // telling the server what format the data is in
      success: successCB, // since this only runs after a successful retrieval, it does something with the data
      error: errorCB || function(error) { // soometimes it isn't successful - then you need to process the error
        console.error('chatterbox: Failed to fetch messages', error); // doesn't have to be sophisticated
      }
    });
  },

  send: function(message, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: {message: message},
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};