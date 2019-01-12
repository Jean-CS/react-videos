import axios from 'axios';

const KEY = 'KEY';
const URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: URL,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});