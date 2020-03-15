import axios from 'axios';

const instance = axios.create.create({
    baseURL: 'https://react-my-burger-6c464.firebaseio.com/'
});

export default instance;