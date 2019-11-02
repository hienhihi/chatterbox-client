var Messages = {

  render: _.template(`
      <div class="chat">
        <div class="username <%= username %>"><%= username %></div>
        <div>Message: <%= text %></div>
        <div>Room: <%= roomname %></div>
      </div>
    `)
};