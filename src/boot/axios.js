import { boot } from 'quasar/wrappers'
import axios from 'axios'
// if(localStorage.getItem('token')){
//     let resp = await axios.get(`${process.env.baseURL}/account`)
//     console.log(resp)
// }

var token = localStorage.getItem('token')

const api = axios.create({
    baseURL: process.env.baseURL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
	    'Content-Type': 'application/json; charset=utf-8',
        'Authorization': 'Bearer ' + token
    },
})

export default boot(({ app}) => {
    // for use inside Vue files (Options API) through this.$axios and this.$api

    app.config.globalProperties.$axios = axios
        // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
        //       so you won't necessarily have to import axios in each vue file

    app.config.globalProperties.$api = api
        // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
        //       so you can easily perform requests against your app's API
})

export { axios, api }