import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "a5c68b4e2fcf430a8bae012fd8b663dc",
  },
});
