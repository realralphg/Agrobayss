// import plugins from '../plugins';
import VuexPersistence from 'vuex-persist'
import axios from "axios"
import { api } from 'boot/axios'

export default {
  state: {
    plans: null,
    choosePlan:null,
    chooseBag:null,
    chooseDays:null,
    msg: '',
    progress: null
  },
  getters: {
    plans(state) {
        return state.plans
    },
     msg(state) {
        return state.msg
    },
     choosePlan(state) {
        return state.choosePlan
    },

     chooseBag(state) {
        return state.chooseBag
    },
     chooseDays(state) {
        return state.chooseDays
    },
     progress(state) {
        return state.progress
    },
  },
  // Mutations
  mutations: {
      plans(state, payload){
        state.plans = payload.data
        console.log(state.plans)
    },

    choosePlan(state, payload){
        console.log(payload.responseData,payload.respMsg)
        state.choosePlan = payload.responseData
        state.msg = payload.respMsg
    },
    chooseBag(state, payload){
        console.log(payload.responseData,payload.respMsg)
        state.chooseBag = payload.responseData
        state.msg = payload.respMsg
    },
    chooseDays(state, payload){
        console.log(payload.responseData,payload.respMsg)
        state.chooseDays = payload.responseData
        state.msg = payload.respMsg
        state.progress = payload.responseData.paid_days / payload.responseData.days_left * 100
    }
  },
  // Actions
  actions: {
    async getPlans({ commit }, token) {
        console.log(token.token)
        console.log(token)
        const tokenB = token.token
        let resp = await api.get('account/savings/get-plans', {
            headers:{
                'Authorization': 'Bearer ' + tokenB
            }
        })


        console.log(resp.data.response.plans)
        const data = resp.data.response.plans
        commit('plans', {data})
    },
    // choosePlan({ commit }, id) {
    //     return new Promise((resolve, reject) => {
    //         const idd = id.id
    //         const token = localStorage.getItem('token')

    //         commit('auth_request')
    //         axios.post(`https://agrobays.greysoft.com.ng/api/account/savings/activate-plan/${idd}`)
    //             .then(resp => {
    //                 console.log(resp);
    //                 const token = localStorage.getItem('token')
    //                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    //                 commit('choosePlan', {resp})
    //                 resolve(resp)
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //                 // localStorage.removeItem('token')
    //                 reject(err)
    //             })
    //     })
    // },


    async choosePlan({ commit }, id) {
        console.log(id.id)
        // console.log(token)
        const idd = id.id
        // let resp = await api.post('account/savings/get-plans', {
        //     headers:{
        //         'Authorization': 'Bearer ' + tokenB
        //     }
        // })
        const token = localStorage.getItem('token')
        console.log(token)

        let resp = await axios.post(`https://agrobays.greysoft.com.ng/api/account/savings/activate-plan/${idd}`).catch(err=>console.log(err))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        console.log(resp)
        const responseData = resp.data.response.data
        const respMsg = resp.data.message
        commit('choosePlan', {responseData,respMsg})

    },
    async chooseBag({ commit }, id) {
        console.log(id.id)
        // console.log(token)
        const idd = id.id
        // let resp = await api.post('account/savings/get-plans', {
        //     headers:{
        //         'Authorization': 'Bearer ' + tokenB
        //     }
        // })
        const token = localStorage.getItem('token')
        console.log(token)

        let resp = await axios.post(`https://agrobays.greysoft.com.ng/api/account/savings/update-bag/${idd}`).catch(err=>console.log(err))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        console.log(resp)
        const responseData = resp.data.response.data
        const respMsg = resp.data.message
        commit('chooseBag', {responseData,respMsg})

    },

    async days({ commit }, dayss) {
        console.log(dayss.dayss)
        // console.log(token)
        const days = {days: dayss.dayss}
        // let resp = await api.post('account/savings/get-plans', {
        //     headers:{
        //         'Authorization': 'Bearer ' + tokenB
        //     }
        // })
        const token = localStorage.getItem('token')
        console.log(token)

        let resp = await axios.post(`https://agrobays.greysoft.com.ng/api/account/savings/subscription/deposit`, days).catch(err=>console.log(err))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        console.log(resp)
        const responseData = resp.data.response.deposit
        const respMsg = resp.data.message
        commit('chooseDays', {responseData,respMsg})

    },

  },
    plugins: [new VuexPersistence().plugin]

}