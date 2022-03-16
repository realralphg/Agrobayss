// import plugins from '../plugins';
import VuexPersistence from 'vuex-persist'
let stateArr = []
let tot = 0
// let totall = 0
if(localStorage.getItem('vuex')){
    stateArr = JSON.parse(localStorage.getItem('vuex'))
    tot = localStorage.getItem('newPrice')

}
export default {
  state: {
    cart: stateArr,
    totalCash : tot,
    totalFruits: 0
  },
  getters: {
    cartt(state) {
        return state.cart
    },

    cashh(state) {
        return state.totalCash
    },
  },
  // Mutations
  mutations: {
   setFruit(state, payload){
    console.log(payload)
    //  const {name, price}= payload.fruit
     console.log(payload.fruit.fruit.price)
     const newArr = state.cart
     newArr.push(payload.fruit)
     console.log(newArr)
     state.cart = newArr

     const newCash = state.totalCash + parseInt(payload.fruit.fruit.price)
     state.totalCash = newCash


    //  state.cart.push(payload.fruit)
    // state.cart = payload.fruit
    //  state.cart = payload.fruit
     console.log(state.cart)
   },

   addition(state, payload){
       console.log(payload.data)
       payload.data.data.qty++
       state.totalFruits += payload.data.data.qty
       state.totalCash += parseInt(payload.data.data.fruit.price)
       let newPrice = 0
    //    console.log(state.totalCash)
    //    state.totalCash += parseInt(payload.data.data.fruit.price) * payload.data.data.qty
       const newCart = JSON.parse(JSON.stringify(state.cart))
       newCart.map((item) => {
           console.log(item.qty * parseInt(item.fruit.price))
           newPrice += item.qty * parseInt(item.fruit.price)
        //    item.qt
       })

       state.totalCash = newPrice
       localStorage.setItem('newPrice', newPrice)



   },
   minus(state, payload){
       console.log(payload.data)
       payload.data.data.qty--
       state.totalFruits -= payload.data.data.qty 
       state.totalCash -= parseInt(payload.data.data.fruit.price)
    //    state.totalCash = parseInt(payload.data.data.fruit.price) * payload.data.data.qty

    //    const newCart = JSON.parse(JSON.stringify(state.cart))
       let  newPrice = 0
    
    //    console.log(state.totalCash)
    //    state.totalCash += parseInt(payload.data.data.fruit.price) * payload.data.data.qty
       const newCart = JSON.parse(JSON.stringify(state.cart))
       newCart.map((item) => {
           console.log(item.qty * parseInt(item.fruit.price))
        //    let newMain = item.qty * parseInt(item.fruit.price)

           newPrice -= item.qty * parseInt(item.fruit.price)
        // newMain -= newPrice
           console.log(newPrice, newPrice)
        //    item.qt
       })

       state.totalCash = newPrice
       localStorage.setItem('newPrice', Math.abs(newPrice))

   },
   deleteItem(state, payload){
        // console.log(JSON.parse(JSON.stringify(payload.fruit.fruit.price)))
        // console.log(payload.fruit.fruit.qty  * parseInt(payload.fruit.fruit.fruit.price))
        const deletedItem = payload.fruit.fruit.qty  * parseInt(payload.fruit.fruit.fruit.price)
        console.log(deletedItem)

    //    const newCart = JSON.parse(JSON.stringify(state.cart))
        // console.log(newCart)
        // let newAa = newCart.filter((fruit) => fruit.fruit === payload.fruit.fruit)
        // console.log(newAa)
    //    localStorage.setItem('newA', newAa)
    

        let  newPrice = parseInt(localStorage.getItem('newPrice'))
        state.totalCash = newPrice - deletedItem
        console.log(state.totalCash)
        // console.log(state.totalCash - deletedItem)

        // console.log(parseInt(newPrice) - deletedItem)
    //    let  newPrice = parseInt(localStorage.getItem('newPrice')) - payload.fruit.fruit.qty  * parseInt(payload.fruit.fruit.fruit.price)
    //    console.log(newPrice)
    //    const newCart = JSON.parse(JSON.stringify(state.cart))
    //    newCart.map((item) => {
    //        newPrice -= payload.fruit.fruit.qty  * parseInt(payload.fruit.fruit.fruit.price)
    //        console.log(newPrice, newPrice)
    //    })

    //    state.totalCash = newPrice - deletedItem
       localStorage.setItem('newPrice', Math.abs(state.totalCash))

       let inde = state.cart.indexOf(payload.fruit.fruit.fruit);
       state.cart.splice(inde, 1)
    //    console.log(newCart)
    //    localStorage.setItem('vuexx', JSON.stringify(newCart))
    //    localStorage.setItem('vuexx', JSON.stringify(newCart))



   }

//    totalMoney(state,payload){
    // if(fruit.fruit.id === payload.id.id)
    //         console.log(fruit)
//        console.log(payload.data)
//     //    const newCart = JSON.parse(JSON.stringify(localStorage.getItem('vuex')))
//        const newCart = JSON.parse(localStorage.getItem('vuex')) 
//        console.log(newCart)
//        let cartTotalAmt = 0
//        newCart.Cart.cart.map((item)=>{
//            console.log(item.fruit.price)
//            cartTotalAmt += parseInt(item.fruit.price)
//            console.log(cartTotalAmt)
//        })

//        state.totalCash = cartTotalAmt
//        console.log(state.totalCash)
//    }
  },
  // Actions
  actions: {
    storeAdd({commit}, fruit){
        // const {name, price} = fruit
        // console.log('first store add')
        // console.log(fruit.fruit)
        commit('setFruit', {fruit})
    }, 
    
    addition({commit},data){
        // console.log(data.data.qty)
        commit('addition', {data})
    },

    minus({commit},data){
        // console.log(data.data.qty)
        commit('minus', {data})
    },

    deleteItem({commit},fruit){
        commit('deleteItem', {fruit})
    }

    // incrementTotal({commit}, data){
    //     console.log(data)
    //     commit('totalMoney', {data})

    // }

  },
    plugins: [new VuexPersistence().plugin]

}