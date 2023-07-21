import axios from "axios";

export default axios.create({
  baseURL: "http://api.rawg.io/api",
  params: {
    key: "652fd533885f46e19fa8b8ff539cf61e",
  },
});
