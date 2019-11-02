var Messages = {

  render: _.template(`
      <div class="chat">
        <div>User: <%= username %></div>
        <div>Message: <%= text %></div>
        <div>Room: <%= roomname %></div>
      </div>
    `)

};