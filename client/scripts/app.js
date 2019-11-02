var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  rooms: undefined,

  data: undefined,

  users: undefined,

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Friends.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      App.data = data;
      App.rooms = new Set();
      App.users = new Set();
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].hasOwnProperty('username')) {
          App.users.add(data.results[i].username);
          if (data.results[i].username === null || data.results[i].username.includes('>') || data.results[i].username.includes('>') || typeof data.results[i].username !== 'string') {
            data.results[i].username = 'INVALID USERNAME';
          }
        }
        if (data.results[i].hasOwnProperty('text')) {
          if (data.results[i].text === null || data.results[i].text.includes('>') || data.results[i].text.includes('>') || typeof data.results[i].username !== 'string') {
            data.results[i].text = 'INVALID MESSAGE';
          }
        }
        if (data.results[i].hasOwnProperty('roomname')) {
          App.rooms.add(data.results[i].roomname);
          if (data.results[i].roomname === null || data.results[i].roomname.includes('>') || data.results[i].roomname.includes('>')) {
            data.results[i].roomname = 'INVALID Room';
          }
        }
      }
      App.rooms = Array.from(App.rooms);
      for (var i = 0; i < App.rooms.length; i++) {
        RoomsView.renderRoom(App.rooms[i]);
      }


      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].hasOwnProperty('roomname') && data.results[i].hasOwnProperty('text') && data.results[i].hasOwnProperty('username')) {
          $('#chats').append(Messages.render(data.results[i]));
        }
      }
      App.users = Array.from(App.users);
      for (var i = 0; i < App.users.length; i++) {
        Friends.friends[App.users[i]] = false;
      }
      // debugger;

      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
