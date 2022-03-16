import axios from "axios"
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: null,
    fruitsData : null,
    categoriesData: null
}

const getters = {
    userr(state) {
        return state.meal
    },
    useer(state) {
        return state.user
    },
    // isLoggedIn: state => state.token,
    isLoggedIn: state => state.token && state.user,
    authStatus: state => state.status,

    fruits(state){
        return state.fruitsData
    },

    categories(state){
        return state.categoriesData
    }
}

const mutations = {
    
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, payload) {
        state.status = 'success'
        state.token = payload.token
        console.log(payload.user)
        state.user = payload.user
        console.log(payload.user)
        // let puy = state.user.push(payload.user)
        // console.log(puy)
    },
    Fruits( state, payload){
        console.log(payload)
        state.fruitsData = payload.respData
    },

    Categories( state, payload){
        console.log(payload)
        state.categoriesData = payload.respData
    },
    logout(state) {
        state.status = ''
        state.token = ''
        localStorage.removeItem('vuex')
    },
    
}


const actions = {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios.post('https://agrobays.greysoft.com.ng/api/login', user)
                .then(resp => {
                    console.log(resp.data.response.user, resp.data.token);
                    const token = resp.data.token
                    const user = resp.data.response.user
                    console.log(token);

                    localStorage.setItem('token', token)
                    localStorage.setItem('userdet', JSON.stringify(user))
                    // console.log(localStorage.getItem('token'));
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', { token: token, user: user })
                    resolve(resp)
                })
                .catch(err => {
                    console.log(err)
                    // localStorage.removeItem('token')
                    reject(err)
                })
        })
    },
    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            axios.post('https://agrobays.greysoft.com.ng/api/register', user)
                .then(resp => {
                    console.log(resp.data.token);
                    const token = resp.data.token
                    const user = resp.data.response.user
                    // console.log(token);

                    localStorage.setItem('token', token)
                    localStorage.setItem('userdet', JSON.stringify(user))
                    // // console.log(localStorage.getItem('token'));
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', { token,user })
                    resolve(resp)
                })
                .catch(err => {
                    console.log(err)
                    // localStorage.removeItem('token')
                    reject(err)
                })
        })
    },

    async getFruits({ commit }, token) {
        console.log(token.token)
        console.log(token)
        const tokenB = token.token
        let resp = await api.get('/fruitbay', {
            headers:{
                'Authorization': 'Bearer ' + tokenB
            }
        })
        // .catch((err) => console.log('error'))
        console.log(resp.data.response.items.data)
        // console.log(resp.data)

        const respData = resp.data.response.items.data
        // const respData = resp.data.data
        commit('Fruits', { respData})
    },

    async getCategories({ commit }, token) {
        console.log(token.token)
        console.log(token)
        const tokenB = token.token
        let resp = await api.get('/fruitbay/categories', {
            headers:{
                'Authorization': 'Bearer ' + tokenB
            }
        })
        // .catch((err) => console.log('error'))
        // console.log(resp.data.response.items.data)
        console.log(resp.data.response.items)

        const respData = resp.data.response.items
        // const respData = resp.data.data
        commit('Categories', { respData})
    },

    // deleteBoard({commit}, id){
    //     console.log(id)
    //     const idd = id.id
    //     console.log(idd)
    //     commit('Boarddelete', { id})
    // },

    // addBoard({commit}, data){
    //     console.log(data)
    //     commit('addBoard', {data})
    // },

    

    

    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            localStorage.removeItem('newPrice')
            localStorage.removeItem('userdet')
            // let newAr = []
            // console.log(JSON.parse(localStorage.getItem('vuex').Cart))
            let cart = JSON.parse(localStorage.getItem('vuex'));
            cart.Cart.cart = []
            localStorage.setItem('vuex', [])
            localStorage.removeItem('vuex')

            // localStorage.removeItem('vuex') 
            // localStorage.removeItem('newPrice')   
            localStorage.clear() 
                        // localStorage.removeItem('plate')
            // localStorage.removeItem('plate')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    },
}




export default {
    state,
    mutations,
    actions,
    getters,
}