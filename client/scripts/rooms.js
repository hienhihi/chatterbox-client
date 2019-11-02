var Rooms = {

  add: function() {
    var newRoom = window.prompt();
    RoomsView.renderRoom(newRoom);
  },

  render: _.template(`
      <option  value="<%-roomname %>"> <%-roomname %></option>
    `)

};