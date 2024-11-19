import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fb8f33db2e16421ab343f06c2272c61b",
  },
});
