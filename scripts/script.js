document.addEventListener("DOMContentLoaded", function(event) {
  const channelList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  const allButton = document.getElementById('all');

  allButton.addEventListener("click", function(){
    channelSetup(channelList);
  });

});

function channelSetup(channels){
  channels.forEach(function(channel){
    fetch(`https://wind-bow.glitch.me/twitch-api/channels/${channel}`)
          .then(response => response.json())
          .then(function(data){
            const name = data.display_name;
            const logo_url = data.logo_url;
            const status = data.status;
            const url = data.url;
            const image = data.video_banner;
            const followers = data.followers;

            createChannelHtml(name,status,url, image,followers);
            addChannelImage(name, image);
          })
  });
}

function createChannelHtml(channelName, channelStatus, channelUrl, channelImage, channelFollowers){

  const channelCard = `<div class="col-xs-12 col-sm-6 col-md-4">
                        <div class="channel-card">
                          <div class="card-image" id="${channelName}">
                          </div>
                          <div class="card-details">
                            <h5 class="card-channel-name">${channelName}</h5>
                            <p class="card-channel-followers">${channelFollowers} followers</p>
                            <a target="_blank" href="${channelUrl}">${channelStatus.substring(0,48)}<span class="card-link"></span></a>
                          </div>
                        </div>
                      </div>`
  const channelsElem =document.querySelector("#channels .row");
  channelsElem.insertAdjacentHTML("afterbegin", channelCard);
}

function addChannelImage(channelName, channelImage){
  const channel = document.getElementById(`${channelName}`);
  channel.style.backgroundImage = channelImage ? `url('${channelImage}')` : "url('./images/no-image-available.jpg')"
}

