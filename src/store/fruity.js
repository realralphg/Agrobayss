import axios from "axios"
import { api } from 'boot/axios'

const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    meal: {
        id: '',
        category: '',
        des: '',
        img: '',
        name: '',
        price: '',
        quantity: '',
        // amount: '',
        // noOfPlates: '',
        meals: []
    },
    topping: {
        name: '',
        price: '',
        img: '',
    },
    plate: {
        price: '',
        noOfPlates: ''
    }
}

const getters = {
    userr(state) {
        return state.meal
    },
    useer(state) {
        return state.user
    },
    isLoggedIn: state => state.token && state.user,
    authStatus: state => state.status,
}

const mutations = {
    setMeal(state, details) {
        const { id, category, des, image, name, price, quantity, posts } = details
        state.meal.id = id
        state.meal.category = category
        state.meal.des = des
        state.meal.img = image
        state.meal.name = name
        state.meal.price = price
        state.meal.quantity = quantity
        state.meal.meals = posts
        localStorage.setItem('det', JSON.stringify({ id, category, des, image, name, price, quantity, posts }))
            // console.log(state.meal, 'muta');
        console.log(state.meal.meals);
    },
    set_topping(state, payload) {
        const { name, price, image } = payload
        state.topping.name = name
        state.topping.price = price
        state.topping.img = image
        localStorage.setItem('topping', JSON.stringify({ name, price, image }))
    },
    plate(state, payload) {
        const { noOfPlates, amount } = payload
        state.meal.noOfPlates = noOfPlates
        state.meal.amount = amount
        localStorage.setItem('plate', JSON.stringify({ noOfPlates, amount }))
    },
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, payload) {
        state.status = 'success'
        state.token = payload.token
        console.log(payload.user)
        state.user = payload.user
        // let puy = state.user.push(payload.user)
        // console.log(puy)
    },
    auth_successre(state, payload) {
        console.log(state, payload);
    },
    auth_error(state) {
        state.status = 'error'
    },
    logout(state) {
        state.status = ''
        state.token = ''
    },
    menu_success(state, payload) {
        state.status = 'success'
        state.menus = payload.menus
    },
    menu_error(state) {
        state.status = 'error'
    },
    order_request(state) {
        state.status = 'placing order'
    },
    order_success(state, payload) {
        state.status = payload.msg
    },
    order_error(state) {
        state.status = "Error"
    },
    order_status(state) {
        state.status = "Processing"
    }
}


const actions = {
    // async signIn(_, details){
    //     // let resp = await axios.post('http://aa75e59c5b52245f78bca84a87c33713-1730258908.us-east-1.elb.amazonaws.com/api/register', this.form).catch(err=> console.log(err.response.data))
    //     let resp = await axios.post('http://aa75e59c5b52245f78bca84a87c33713-1730258908.us-east-1.elb.amazonaws.com/api/login', details).catch(err=> console.log(err.response.data))

    //     console.log(resp);
    // },
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            api.post('api/login', user)
                // axios({ url: 'http://greyfoods.test/api/login', data: user, method: 'POST' })
                .then(resp => {
                    console.log(resp);
                    const token = resp.data.data.token
                    const user = resp.data.data.user
                    console.log(token);

                    localStorage.setItem('token', token)
                    localStorage.setItem('userdet', JSON.stringify(user))
                    console.log(localStorage.getItem('token'));
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', { token: token, user: user })
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },

    register({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            api.post('api/register', user)
                // axios({ url: 'http://greyfoods.test/api/register', data: user, method: 'POST' })
                .then(resp => {
                    const token = resp.data.data.token
                    const user = resp.data.data.user

                    localStorage.setItem('token', token)
                    localStorage.setItem('userdet', JSON.stringify(user))
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                    commit('auth_success', { token: token, user: user })
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error', err)
                    localStorage.removeItem('token')
                    reject(err)
                })
        })
    },

    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit('logout')
            localStorage.removeItem('token')
            localStorage.removeItem('det')
            localStorage.removeItem('userdet')
                // localStorage.removeItem('plate')
            delete axios.defaults.headers.common['Authorization']
            resolve()
        })
    },

    mealD({ commit }, payload) {
        console.log(payload);
        commit('setMeal', payload)
    },

    topping({ commit }, payload) {
        console.log(payload);
        commit('set_topping', payload)
    },

    addOrder({ commit }, payload) {
        console.log(payload);
        commit('plate', payload)
    },

    menu({ commit }, menus) {
        return new Promise((resolve, reject) => {
            commit('menus', payload)
            api.post('api/menu', menus)
                // axios({ url: 'http://greyfoods.test/api/menu', data: menus, method: 'POst' })
                .then(resp => {
                    const menus = resp.data.data.menus

                    localStorage.setItem('menus', menus)
                    commit('menu_success', { menus: menus })
                    resolve(resp)
                })
                .catch(err => {
                    commit('menu_error', err)
                    localStorage.removeItem('menus')
                    reject(err)
                })
        })
    },

    createOrder({ commit }, order) {
        return new Promise((resolve, reject) => {
            commit('order_request')
            api.post('api/place/order', order)
                // axios({ url: 'http://greyfoods.test/api/place/order', data: order, method: 'POST' })
                .then(resp => {
                    console.log(resp);
                    const msg = resp.data.data.token
                    console.log(msg);

                    commit('order_status')
                    resolve(resp)
                })
                .catch(err => {
                    commit('order_error')
                    reject(err)
                })
        })
    },
}




export default {
    state,
    mutations,
    actions,
    getters,
}