import axios from 'axios'

const Axios = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 3000
})


export const API = {

    SESSION:{
        logIn:(userAndPass)=>{
            return Axios.post('/auth/login', userAndPass)
        }
    }

}