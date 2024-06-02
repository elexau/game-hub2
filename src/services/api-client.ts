import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '646262693f4c4475a0cf7f1e8d734cf5'
    }
})