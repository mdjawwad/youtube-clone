import axios from 'axios'

const request = axios.create({
    baseURL:'https://youtube.googleapis.com/youtube/v3/',
    params:{    
        key: 'AIzaSyAVM4upO25gAxnSo-dcvCuSPHlE-M5Fpec',
        
    },
})
export default request;