import axios from 'axios'
import { store } from '..'
import { ApiCodes } from '../../constants/ApiCodes'
import { getToken } from '../auth/selector'
import sessionActions from '../session/actions'

import Swal from 'sweetalert2/dist/sweetalert2.js'

const Axios =  axios.create({
    baseURL: "http://localhost:4000/api",
    timeout: 3000
})

Axios.interceptors.request.use((config)=>{
    
    const state = store.getState()
    config.headers.Authorization = getToken(state)

    return config
},
(error)=>{
    return Promise.reject(error)
})

Axios.interceptors.response.use((res)=>res,
({response})=>{

    if(response.status === ApiCodes.invalidSession){

        Swal.fire({
            title:"Sesion expirada!",
            text:"Por favor, ingresá nuevamente",
            icon:'error',
            confirmButtonText:'Entendido'
        })

        store.dispatch(sessionActions.logOut())

    }

    return Promise.reject(response)
})

export const API = {

    SESSION:{
        logIn:(userAndPass)=>{
            return Axios.post('/auth/login', userAndPass)
        },
        logInByToken:()=>{
            return Axios.post('/auth/loginByToken')
        }
    },
    
    PRODUCTS:{
        get:(page)=>{
            return Axios.get('/products')
        },
        new:(productData)=>{
            return Axios.post('/products/new', productData)
        }
    }

}