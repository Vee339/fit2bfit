let player;

let scriptTag = document.createElement("script");
scriptTag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(scriptTag);

function onYouTubeIframeAPIReady() {
  videoIdsFromServer.forEach((videoId, index) => {
    player = new YT.Player(`player${index}`, {
      videoId: videoId,
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: (events) => console.log("The player is ready"),
      },
    });
  });
}
