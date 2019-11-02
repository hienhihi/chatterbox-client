var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

    Parse.readAll(function(data) {
      console.log(data);
    });
  },

  renderMessage: function (response) {
    var test = MessageView.render(response);
    $('#chats').append(test);
    $('.username').on('click', Friends.toggleStatus);
  }
};