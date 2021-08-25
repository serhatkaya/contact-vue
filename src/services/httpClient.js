import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 5000,
});

instance.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        console.log('request send');
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function(response) {
        console.log('repsonse get');
        return response;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default instance;
