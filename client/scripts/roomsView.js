var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(response) {
    // debugger;
    var test = Rooms.render({'roomname': response});
    $('#rooms select').append(test);
  }

};
