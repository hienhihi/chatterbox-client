var Friends = {

  friends: {},

  friendToAdd: undefined,

  initialize: function() {
  },

  toggleStatus: function(event) {
    console.log('clicked');
    // debugger;
    event.preventDefault();
    Friends.friendToAdd = $(this)[0].classList[1];
    if (!Friends.friends[Friends.friendToAdd]) {
      Friends.friends[Friends.friendToAdd] = !Friends.friends[Friends.friendToAdd];
    }
  }
};