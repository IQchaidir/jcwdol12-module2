import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://cdn.contentful.com/spaces/msy9lxj23swp/environments/master/",
  params: {
    access_token: "75MHLKaPonKyVXPTIH7xEGEB6M_9X_0GnCYBAGDBQmA",
  },
});

export default axiosInstance;
