import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aaa61a5dc95148adaeabc0ce39018296",
  },
});
