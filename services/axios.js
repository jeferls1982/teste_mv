import configAxios from "axios";


const apiInstance = configAxios.create({
    baseURL: process.env.VUE_APP_API_URL,
});


apiInstance.interceptors.request.use((config) => {
    const bearerToken = localStorage.getItem("access_token");
    config.headers.common["Access-Control-Allow-Origin"] = "*";
    config.headers.Authorization = `Bearer ${bearerToken}`;
    return config;
});



export default apiInstance;