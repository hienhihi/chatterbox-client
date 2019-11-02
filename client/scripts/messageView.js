var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username">Username: <%= username %></div>
        <div> <%= text %></div>
        <div>Room: <%= roomname %></div>
      </div>
    `)

};