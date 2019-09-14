import axios from 'axios';
import { AsyncStorage } from "react-native";
const baseUrl = 'https://hc-india.hotwax.co';

// let axiosObject = axios.create({
//     baseURL: baseUrl,
//     timeout: 10000
// });

let axiosObj = axios.create({
    baseURL: "https://kissan-haat.herokuapp.com",
    timeout: 10000
});

// axiosObject.interceptors.request.use(async (config) => {
//     const token = await AsyncStorage.getItem("authToken");
//     if (token != null) {
//         config.headers.Authorization = 'Bearer ' + token;
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });

// axiosObject.interceptors.response.use(function (config) {
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });

const apiHelper = {
    login: (user) => {
        return axiosObj.post('/api/login', user);
    },
    logout: () => {
        return AsyncStorage.clear()
    },
    getProfileData: () => {
        return axiosObject.post('/api/user-profile', {});
    },
    getCropList: () => {
        return axiosObj.get('/api/cropList');
    }
}

export default apiHelper;