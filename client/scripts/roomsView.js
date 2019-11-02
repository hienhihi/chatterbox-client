var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.roomChange);
    RoomsView.$button.on('click', Rooms.add);
  },

  renderRoom: function(response) {
    // debugger;
    var test = Rooms.render({'roomname': response});
    RoomsView.$select.append(test);
  },

  roomChange: function(event) {
    //on click, filter through the array of data, only select the object from the clicked room
    event.preventDefault();
    $('#chats').empty();
    for (var i = 0; i < App.data.results.length; i++) {
      if (App.data.results[i].roomname === RoomsView.$select.children('option:selected').val()) {
        $('#chats').append(Messages.render(App.data.results[i]));
      }
    }
  }

};
