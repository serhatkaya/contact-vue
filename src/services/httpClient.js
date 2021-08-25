import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 5000,
    headers: {
        Authorization: 'Bearer asfaf    ',
    },
});

instance.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        console.log('request send');
        return config;
    },
    function(error) {
        // Do something with request error
        return errorInterceptor(error);
    }
);

instance.interceptors.response.use(
    function(response) {
        console.log('repsonse get');
        return response;
    },
    function(error) {
        return errorInterceptor(error);
    }
);

function errorInterceptor(err) {
    console.log('error interceptor');
    return Promise.reject(err);
}

export default instance;
