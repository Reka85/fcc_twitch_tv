$(document).ready(function(){
  const button = $("#search-button");
  const searchField = $("#search-field");

  button.click(function(){
    const channelName = searchField.val();
    if (channelName){
      $.getJSON(`https://wind-bow.glitch.me/twitch-api/streams/${channelName}`, function(data) {
        if(data.stream){
          const channelDetails = data.stream.channel
          $("#name").append(
            `<span>${channelDetails.display_name}</span>`
            );
          $("#channel-url").append(
            `<a href="${channelDetails.url}">${channelDetails.status}</a>`
            );
          $("#fps").append(
            `<span>${data.stream.average_fps}</span>`
            );
          $("#channel").append(
            `<img src=\"${channelDetails.logo}\"/>`
            );
        } else {
          $("#channel").html('');
          $("#channel").append("<p>This channel is not streaming at the moment. Try again later!</p>")
        }
      });
    } else {
      $("#channel").html('');
      $("#channel").append("<p>Please enter a channel name</p>")
    }
  });
});


