import axios from "axios";

var twitchKey = "5im67pxtrmahhr4u8f270ntw5l5srp";
        // var twitchStreams =
        //   "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/?game=" +
        //   twitchQuery +
        //   "&limit=" +
        //   twitchLimit +
        //   "&api_version=5&language=en";

export default {
  // Gets all users
  getTournament: function (game, amount) {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.pandascore.co" +
        game +
        "?per_page=" +
        amount +
        "&token=" +
        psKey
    );
  },
  //   // Gets the user with the given id
  //   getUser: function(id) {
  //     return axios.get("http://localhost:3001/api/usernews/" + id);
  //   },
  //   // Deletes the user with the given id
  //   deleteUser: function(id) {
  //     return axios.delete("http://localhost:3001/api/usernews/" + id);
  //   },
  //   // Saves a user to the database
  //   saveUser: function(userData) {
  //     console.log(userData);
  //     return axios.post("http://localhost:3001/api/usernews", userData);
  //   },
  //   postUser: function(userData) {
  //     console.log("I am in the login api");
  //     console.log(userData);
  //     return axios.get("http://localhost:3001/api/login",  userData);

  //   }
};
