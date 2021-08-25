import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:5001/api/',
    timeout: 5000,
});

instance.interceptors.request.use(
    function(config) {
        let headers = {};
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            headers = {
                Authorization: `Bearer ${currentUser.token}`,
            };
            config.headers = headers;
        }
        return config;
    },
    function(error) {
        return errorInterceptor(error);
    }
);

instance.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        return errorInterceptor(error);
    }
);

function errorInterceptor(err) {
    console.log(err);
    console.log('error interceptor');
    return Promise.reject(err);
}

export default instance;
