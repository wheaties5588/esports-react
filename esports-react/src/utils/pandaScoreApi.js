import axios from 'axios';


 var psKey = "oGQqDCAuv9cFaDUsKsD5cg3Rsmo3bV0SJnLU-DpkBoCxDAlAzXQ";
// var psURL = "https://cors-anywhere.herokuapp.com/https://api.pandascore.co" + psPARAM + "?per_page=" + perPage + "&token=" + psKey;


export default {
  // Gets all users
  getTournament: function(game, amount) {
    return axios.get("https://cors-anywhere.herokuapp.com/https://api.pandascore.co" + game + "?per_page=" + amount + "&token=" + psKey);
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


//"https://cors-anywhere.herokuapp.com/https://api.pandascore.co/dota2/tournaments?per_page=10&token=oGQqDCAuv9cFaDUsKsD5cg3Rsmo3bV0SJnLU-DpkBoCxDAlAzXQ