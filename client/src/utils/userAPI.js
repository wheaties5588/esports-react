import axios from "axios";

export default {
  // Gets all posts
  getUsers: function() {
    return axios.get("http://localhost:3001/api/usernews");
  },
  // Gets the post with the given id
  getUser: function(id) {
    return axios.get("http://localhost:3001/api/usernews/" + id);
  },
  // Deletes the post with the given id
  deleteUser: function(id) {
    return axios.delete("http://localhost:3001/api/usernews/" + id);
  },
  // Saves a post to the database
  saveUser: function(userData) {
    console.log("I'm in the userAPI");
    console.log(userData);
    return axios.post("http://localhost:3001/api/usernews", userData);
  }
};