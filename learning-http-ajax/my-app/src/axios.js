import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Access-Control-Allow-Origin': '*'}
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// You can add its own interceptors too
// instance.interceptors.request...

export default instance;