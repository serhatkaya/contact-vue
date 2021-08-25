import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
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
        console.log('request sent');
        return config;
    },
    function(error) {
        return errorInterceptor(error);
    }
);

instance.interceptors.response.use(
    function(response) {
        console.log('response get');
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
