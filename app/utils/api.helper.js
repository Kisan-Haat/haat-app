import axios from 'axios';
import { AsyncStorage } from "react-native";
const baseUrl = 'https://hc-india.hotwax.co';

// let axiosObject = axios.create({
//     baseURL: baseUrl,
//     timeout: 10000
// });

let axiosObject = axios.create({
    baseURL: "https://kissan-haat.herokuapp.com/api",
    timeout: 10000
});

// axiosObjectect.interceptors.request.use(async (config) => {
//     const token = await AsyncStorage.getItem("authToken");
//     if (token != null) {
//         config.headers.Authorization = 'Bearer ' + token;
//     }
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });

// axiosObjectect.interceptors.response.use(function (config) {
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });

const apiHelper = {
    login: (user) => {
        return axiosObject.post('/user/login', user);
    },
    signUp: (newUser) => {
        return axiosObject.post('/user/create', newUser);
    },
    logout: () => {
        return AsyncStorage.clear()
    },
    // getProfileData: () => {
    //     return axiosObject.post('/user-profile', {});
    // },
    getCropList: () => {
        return axiosObject.get('/cropList');
    },
    getPublishedProducts: () => {
        return axiosObject.get('/seller/getPublishedProducts')
    },
    createListing: () => {
        return axiosObject.get('/seller/createSell')
    }
}

export default apiHelper;
export  const axiosObj = axiosObject