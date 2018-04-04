$(document).ready(function(){
  const button = $("#button");

  button.click(function(){
    $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/food", function(data) {
      //console.log(data)
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
        $("#channel").append("<p>Channel is not streaming at the moment. Try again later!</p>")
      }
    });
  });
});


