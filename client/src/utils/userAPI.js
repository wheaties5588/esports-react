import axios from "axios";
//import passport from "../../../config/passport"


export default {
  // Gets all users
  getUsers: function() {
    return axios.get("http://localhost:3001/api/usernews");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("http://localhost:3001/api/usernews/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("http://localhost:3001/api/usernews/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log("I'm in the userAPI");
    console.log(userData);
    return axios.post("http://localhost:3001/api/usernews", userData);
  },
  getUserEmail: function(userData) {
    console.log("I am in the login api");
    console.log(userData.email);
    return axios.get("http://localhost:3001/api/usernews", {
      params: {
        email: userData.email
      }
    });
  }
};