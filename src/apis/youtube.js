import axios from 'axios';

const KEY = 'AIzaSyB848DUtKRtviYmUdGodQTZaW7UZT479ks';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
