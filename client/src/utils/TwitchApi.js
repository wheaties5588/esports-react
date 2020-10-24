import axios from "axios";

var twitchKey = "5im67pxtrmahhr4u8f270ntw5l5srp";
        // var twitchStreams =
        //   "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/?game=" +
        //   twitchQuery +
        //   "&limit=" +
        //   twitchLimit +
        //   "&api_version=5&language=en";
        
        
        //test

export default {
  // Gets all users
  getStream: function (twitchQuery, twitchLimit) {
    
    
    
    return (
        axios.defaults.headers.common["Client-ID"] = twitchKey,
        axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/?game=" +
          twitchQuery +
          "&limit=" +
          twitchLimit +
          "&api_version=5&language=en"
        )  
    )
    
    
  }
};
