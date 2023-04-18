import axios from "axios";

export default axios.create({
    baseURL: "http://api.rawg.io/api",
    params: {
        key:'a1883418050b4c97b447249eb9af27a3',
    },
});