var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log(App.username);
    console.log($('#message').val());
    console.log('click!');
    Parse.create({
      'username': App.username,
      'text': $('#message').val(),
      'roomname': 'lobby'
    }, function (data) {
      console.log(data);
    }
    );
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};