import axios from "axios";

export default axios.create({
  baseURL: "https://moolah-backend.herokuapp.com/",
  responseType: "json"
});
