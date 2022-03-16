<template>
<div class="wrapper">
    <div class="tex container">
        <!-- <div class="nav-hold">
            <div class="logo">
                {{cart.Cart.cart}}
                {{userDetails}}
                {{isLoggedIn}}
                {{cashh}}

                <p class="text-weight-bold text-primary">
            {{cartShop.Cart.cart.length}}
                    Fruit and Veggies Savings 
                </p>
            </div>
            <nav class="nav">
                {{cartShop.Cart.cart}}
                {{addition}}
                <ul>
                    <li>

                        
                            <div class="q-pa-md">
                                <q-btn-dropdown
                                class="glossy"
                                color="teal"
                                icon="shopping_cart"
                                @click="alertMessage"
                                >
                                
                                    <q-list class="q-pa-md list-up">
                                        <div class="head-section">
                                            <p class="para">
                                                Your Cart
                                            </p>
                                            <p>
                                                Qty
                                            </p>
                                        </div>
                                        <q-item v-for="cart in cartt" :key="cart.fruit.id" class="addborder" >
                                            <q-item-section avatar>
                                                <q-avatar icon="folder" color="primary" text-color="white" />
                                            </q-item-section>
                                            <q-item-section>
                                                <q-item-label>{{cart.fruit.name}}</q-item-label>
                                                <q-item-label caption>{{cart.fruit.price}}</q-item-label>
                                            </q-item-section>
                                            <q-item-section side>
                                                <div class="con">
                                                    <q-btn v-if="cart.qty > 0" class="bo bg-grey-12" 
                                                        round
                                                        color="primary"
                                                        flat
                                                        size="15px"
                                                        label="-"
                                                        @click="minus(cart)"
                                                    />
                                                    <span class="text-caption quan">{{cart.qty}}</span>
                                                    <q-btn
                                                        round
                                                        size="15px"
                                                        class="bot plus-button" 
                                                        color="primary"
                                                        label="+"
                                                        @click="add(cart)"
                                                    />
                                                </div>
                                                
                                            </q-item-section>

                                            <q-item-section side>
                                                {{cart.fruit.price * cart.qty}}
                                                
                                            </q-item-section>
                                            







                                        </q-item>


                                        <div v-if="cartt.length" class="total">
                                            <p class="text-primary">Total fruits : {{cartt.length}}</p>


                                            <p class="text-primary">Total: {{Math.abs(cashh)}}</p>
                                            <q-btn to="/checkout" class="q-py-sm q-mt-md bg-primary text-white q-px-lg">Checkout</q-btn>

                                        </div>
                                        
                                        

                                        <div v-if="!cartt.length" class="no-tasks">
                                            <q-icon class="text-center" name="check" size="100px" color="primary"></q-icon>
                                            <div class="div text-h5 text-primary text-center">Your Cart is Empty</div>
                                        </div>




                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                            
                        <i class="ri-shopping-cart-fill"></i>
                        
                    </li>
                    <div class="ava">
                        <li><i class="ri-user-fill"></i></li>
                        <li>
                            <p>{{userDetails.email}}</p>
                            <small>{{userDetails.name}}</small>
                        </li>
                    </div>
                </ul>
            </nav>
        </div> -->

        
        <!-- <div class="q-pa-md">
            <q-btn color="red" @click="showLoading" label="Show Loading" />
        </div> -->
        <!-- <h2 class="text-weight-thin">Our fruits and vegetables are freshly grown in a neatly cultivated habitat, usually hydroponics and our staffs are well trained to package all products with proper hygiene regulations for premium and healthy feeding feeding experience <br><span class="text-primary"> Eat the right way</span></h2> -->
        <h5 class="text-primary">Let’s help you plan a fresh, healthy and
            greeny weekly diet</h5>
    </div>
    <div class="container q-pb-lg input q-my-xl">
        <input @focus="show" class="input-class" v-model="search" type="text" placeholder="What are you hungry for?">
        <button class="input-button bg-primary">
            <i class="ri-search-line"></i>
        </button>
    </div>
    <div class="hol q-py-lg container">
        <h5 class="text-weight-bold">Browse for categories</h5>
        <section class="menuu">
            <div v-for="category in categories" :key="category.id" class="q-pa-md category">
                <img src="/images/orange.png" alt="">
                <small class="text-primary text-weight-bold">{{category.title}}</small>
            </div>

        </section>

    </div>
    
    <div class="menu container">
        <!-- {{categories}} -->
        <h5 class="text-weight-bold">Top Products</h5>
        <section class="section-one q-py-md">
            <div class="com text-bold">
                    <section class="section-one">

                       <div v-for="fruit in filtered" :key="fruit.id" class="q-pa-md fruit">
                            <q-icon v-if="showw" class="text-center good" name="check" size="30px" color="primary"></q-icon>
                           <img src="/images/orange.png" alt="">
                           <strong class="text-weight-bold text-primary">{{fruit.name}}</strong>
                           <!-- <p>{{fruit.description}}</p> -->
                           <div class="der">
                            <small class="text-weight-bold text-primary">{{fruit.price || userDetails.price}}</small>
                            <q-btn :disable='showw' @click="addfruit(fruit)" class="basket">
                                <i class="ri-basketball-line text-positive"></i>
                                <p>Basket</p>
                                
                            </q-btn>
                           </div>
                        </div>
        
                    </section>
                
            </div>
        </section>

    </div>

    <div class="cart-btn">
        <!-- <q-btn to="/checkout" icon="shopping_cart" class="fixed-cart-btn" v-if="cartt.length">Basket</q-btn> -->
        <q-btn dense to="/checkout" v-if="cartt.length" color="primary" icon="shopping_cart" class="fixed-cart-btn">
            Basket<q-badge color="red" floating>{{cartt.length}}</q-badge>
        </q-btn>
    </div>


</div>
    



    
</template>


<script>
import { useQuasar, QSpinnerFacebook } from 'quasar'
import { onBeforeUnmount } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import axios from 'axios'
import { api } from 'boot/axios'
import {mapActions, mapGetters} from 'vuex'
import { ref } from 'vue'
import VuexPersistence from 'vuex-persist'
// import Page from './Page.vue'


export default{
    components:{
        Splide, SplideSlide
    },
    setup () {
        
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
      showLoading () {
        $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: 'primary',
          spinnerSize: 140,
          backgroundColor: '#ca7c06',
          message: 'Some important process is in progress. Hang on...',
          messageColor: 'black'
        })

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 3000)
      },

      onMainClick () {
        console.log('Clicked on main button')
      },

      onItemClick () {
        console.log('Clicked on an Item')
      },
    }
  },
    data(){
        const noOfPlates=[]
        console.log(this.cartIds)
        // this.cartIds.forEach((e, index) => {
        //     noOfPlates[e] = 0
        // })
        return{
      userDetails: JSON.parse(localStorage.getItem('userdet')),
      totalsP: JSON.parse(localStorage.getItem('newPrice')),
    //   cartKeys: JSON.parse(JSON.stringify(localStorage.getItem('vuex').Cart.cart)).keys(),
      cartShop: JSON.parse(localStorage.getItem('vuex')),
            url: process.env.baseURL,
            posts:[],
            cartIds:[],
            showw:false,
            car: null,
            totalFruit: 0,
            totalAmt: 0,
            // aler: alert('You do not have an item in your cart'),
            noOfPlates: 0,
            store:false,
            search:'',
            slide: ref('style'),
            lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto?',
            options: {
                rewind: true,
                arrows: false,
                perPage: 3,
                width: '100%',
                //  height: "15rem",
                gap: "1rem",
                breakpoints: {
                    1000: {
                    perPage: 3,
                },
            },
        },
        }

    },
    computed: {
    ...mapGetters(['cartt']),
    ...mapGetters(['useer']),
    ...mapGetters(['fruits']),
    ...mapGetters(['categories', 'fru', 'cashh']),
    ...mapGetters(['isLoggedIn']),
    // ...mapActions[]
    filtered: function(){
            return this.fruits.filter((fruit) => {
                return fruit.name.match(this.search)
            })
        },

        
    },
    created(){
        // this.amount = this.sto.price
        this.getFruits()
        this.getCategories()
        // console.log(carr)
    },
    methods:{
        getFruits: function() {
      const token = localStorage.getItem('token')
    //   const token = "11|SKpJcL8aG7FVDOdHrNspOw8ji18TyHFErWV11fJ5"
      this.$store.dispatch('getFruits', {token}).then(() =>{
        //    this.$router.replace('/page')
          console.log('first')
        })
    },
    add(data) {
        let totalMoney = this.totalAmt
        let fruitNumber = this.totalFruit
        // data.qty++
        // this.totalFruit += data.qty
        // this.totalAmt += parseInt(data.fruit.price)
        // console.log(data);
        this.$store.dispatch('addition',{data, totalMoney, fruitNumber})
        // this.$store.dispatch('incrementTotal', this.totalAmt)
        
        // console.log(this.$store)
      },
      minus(data) {

        let totalMoney = this.totalAmt
        let fruitNumber = this.totalFruit
        // data.qty++
        // this.totalFruit += data.qty
        // this.totalAmt += parseInt(data.fruit.price)
        // console.log(data);
        this.$store.dispatch('minus', {data, totalMoney, fruitNumber})
        // this.$store.dispatch('incrementTotal', this.totalAmt)
        // data.qty--
        // this.totalFruit -= data.qty
        // this.totalAmt -= parseInt(data.fruit.price)

      },

      alertMessage(){
          console.log('message')

      },
    getCategories: function() {
      const token = localStorage.getItem('token')
    //   const token = "11|SKpJcL8aG7FVDOdHrNspOw8ji18TyHFErWV11fJ5"
      this.$store.dispatch('getCategories', {token}).then(() =>{
        //    this.$router.replace('/page')
        //   console.log('first')
        })
    },

    addfruit(fruit){
    let canAdd = true

    for (let i = 0; i < this.cartt.length; i++) {
        const element = this.cartt[i];
        console.log(element)
        if(element.fruit.id === fruit.id ){
            canAdd = false
            // let toggleDisable = !this.showw
            // this.showw = toggleDisable
            break;
        }
        
    }

    if(canAdd){
        console.log(canAdd)
        // let toggleDisable = !this.showw
        // this.showw = toggleDisable
        this.$store.dispatch('storeAdd', {qty: 1, fruit})
        // this.$store.dispatch('incrementTotal', this.totalAmt)
        // this.$store.dispatch('addition',{data, totalMoney, fruitNumber})
        // this.$store.dispatch('incrementTotal', this.totalAmt)
        console.log('added')
        this.store = true
        this.$q.notify({
        message: 'Fruit added to basket Successfully',
        color: 'primary',
        })
    } else{
        // let toggleDisable = !this.showw
        // this.showw = toggleDisable
        // alert('cannot add')
        // return
        console.log('cannot add')
        
    }
    //   this.cartt.map((cart) => {
    //       console.log('Fid:',cart.fruit.id,'newid:',fruit.id)
    //       if(cart.fruit.id === fruit.id ){
    //         canAdd = false
    //         alert('cannot add')
    //         return;
    //       }
    //   })

    },
        show(){
            console.log('first')
            this.$q.notify({
            message: 'Search your favourite meals',
            color: 'primary',
            position: 'top-right',
            avatar: "http://ec2-34-220-137-13.us-west-2.compute.amazonaws.com:31923/menu/1645109233Desert.png"
          })
        },
    },
    // mounted(){

    //     this.$store.dispatch('incrementTotal', this.totalAmt)
    //     // console.log(this.$store);
    //     // console.log(this.cartShop.Cart.cart.length)
    //     // this.totalFruit = this.cartShop.Cart.cart.length
    //     let totalAmt = 0
    //     this.cartShop.Cart.cart.map(e=> { console.log(e.fruit.price)
    //         totalAmt += parseInt(e.fruit.price)
    //     })
    //     this.totalAmt = totalAmt
       
    // },
    // computed:{
    //     filteredP: function(){
    //         return this.posts.filter((post) => {
    //             return post.strCategory.match(this.search)
    //         })
    //     },
    // }
}
</script>

<style scoped>
.wrapper{
    background: #E2ECF933;
    width: 95%;
    /* display: flex;
    justify-content: end;
    flex-direction: column;
    align-items:flex-end; */
    margin: 0 auto;
    /* margin: 0 0 auto 0; */
}
.nav-hold{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.nav-hold .nav  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-hold .nav  ul .ava{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-hold .nav  ul .ava p{
    font-size: .95rem;
}

.nav-hold .nav  ul .ava small{
    font-size: .95rem;
}

.nav-hold .nav  ul li{
    margin: 0 .45rem;
}

.nav-hold .nav  i{
    font-size: 2rem;
    color: #2b945b;
    background: #A8D29F;
    padding: .65rem;
    border-radius: 10%;
    cursor: pointer;
}

.logo p{
    font-size: 2rem;
}


.con{
    display: flex !important;
    align-items: center;
    gap: 1rem;
}

.addborder{
    border-bottom: 2px solid #2B945B;
    width: 400px;
}

.no-tasks{
    margin: 2rem 0;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}


p{
    margin-bottom: 0;
}

.tex{
    padding: 7rem 0 0;
}
.weight-text{
    font-weight: bold;
}

.ji{
    height: 200px;
}

.basket{
background: linear-gradient(121.81deg, #2B945B 20.1%, #8BC34A 131.87%);
padding: .25rem 1rem;
color: #fff;
margin-left: .75rem;
}

.section-one{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); */
    gap: 2rem;
    padding-bottom: 5rem;
    
}

.section-one .fruit{
background: #FFFFFF;
display: flex;
flex-direction: column;
align-items: flex-start;
position: relative;
cursor: pointer;
position: relative;
min-width: 300px;
min-height: 300px;
}

.section-one .fruit .good{
    position: absolute;
    background: #c4c4c4;
    padding: .15rem;
}

.section-one .fruit::before,
.section-one .fruit::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

.section-one .fruit::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #3E8914;
  border-right: 3px solid #2E640F;
  transform: translate(-100%, 50%);
}

.section-one .fruit:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #2E640F;
  border-left: 3px solid #3E8914;
  transform: translate(100%, -50%)
}

.section-one .fruit:hover:before,
.section-one .fruit:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

.section-one .fruit:hover {
  color: #3DA35D;
}

.section-one .fruit:hover{
    border: 1px solid ;
}

.section-one .fruit img{
width: 100%;
height: 100%;
background: #D1F2C9;
margin-bottom: 1rem;
/* padding: .75rem; */
/* border-bottom-right-radius: 20%;
border-bottom-left-radius: 20%; */
object-fit: cover;
}

.cart-btn{
  position: fixed;
  bottom: 5%;
  z-index: 100000;
  right: 4%;
  border-radius: 50%;
}

.fixed-cart-btn{
   color: #2b945b;
  font-size: 1.5rem;
  animation: pulse 2s infinite;
  animation-delay: 2s;
  /* border-radius: 50%; */
}

.menuu{
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    gap: 2rem;
}

.menuu .category{
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.menuu img{
    width: 100px;
    height: 100px;
    background: #D1F2C9;
    padding: .75rem;
    border-radius: 20%;
    margin-bottom: 1rem;
}
.menu{
    margin-top: 5rem;
}

.hhh{
    width: 100px;
    height: 100px;
    padding: 2rem 0;
}
    h2{
        font-family: Gilroy-Bold;
        font-size: 1.3em;
        line-height: 123%;
        color: #3F434A;
        font-weight: 400;
    }

    .input{
        display: flex;
        align-items: center;

    }

    .input input{
        background: #FCFCFD;
        border: 1px solid #EFEFEF;
        border-radius: 10px;
        padding: .85rem;
        width: 80%;
        height: 40px;
        margin: 2rem 0;
        transition: all .5s ease-in;


    }
.input .input-class:focus{
        border: none;       
        width: 80%;
        height: 50px;
        outline: 1px solid #2b945b;
}
    .input input::placeholder{
        font-size: .85rem;
    }

    .input button{
        padding: .85rem;
        color: #fff;
        border: none;
        margin: 0 1rem;
        border-radius: 12px;
        height: 40px;
    }

    .input button i{
        position:relative;
        top: calc(50% - 12px); /* 50% - 3/4 of icon height */
    }


.com{
    display: grid;
    /* grid-template-columns: repeat(5, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    /* margin: 3rem 00; */
    padding-bottom: 5rem;

}

.tex h1{
    font-size: 2rem;
    line-height: 2.5rem;
}

.enter{
    padding: .75rem 1rem;
    width: 70%;
    background: #FCFCFD;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 auto;
}

    .order-con{
        padding: 10px 10px 10px 0;
    }

    .hold{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu-text{
        font-family: Gilroy-SemiBold;
        font-size: 1rem;
        line-height: 123%;
        color: #3F434A;
        font-weight: 600;
    }

    .right-btn{
        font-size: .7rem;
    }

    .ul{
        background-color: red;
    }


    .hold .btn{
        border: none;
        background: transparent;
        color: #2b945b;
    }
    
    .sponsor__content{
        text-align: center;
        background: #FFFFFF;
        box-shadow: 0px 20px 30px rgba(211, 209, 216, 0.251);
        border-radius: 30px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        height: 170px;
        /* margin: 1rem; */
    }

    .sponsor__img{
        opacity: 1;
        width: 90px;
        padding: 15px 0 20px 0;
        border-radius: 50%;
        transition: all .5s ease-in-out;
        cursor: pointer;
    }

    .sponsor__img:hover{
        opacity: 1;
        width: 90px;
        transition: all .5s ease-in-out;
    }
    
    .order__img{
        opacity: 1;
        width: 100%;
        padding: 15px 0 20px 0;
        border-radius: 50%;
    /* filter: invert(0.7); */
    transition: all .5s ease-in-out;
    cursor: pointer;

    }

    .order__img:hover{
        opacity: 1;
        width: 100%;
        transition: all .5s ease-in-out;
    }

    .food-cards{
        background: rgb(247, 247, 247);
        border-radius: 54px;
        padding: 3px 6px;
    }

    .food-cards p{
        font-size: .8rem;
        font-weight: bold;
        text-align: center;
        /* color: #2b945b;xs */
    }

    .order-cards{
        background: rgb(247, 247, 247);
        border-radius: 20px;
        padding: 3px 6px;
        box-shadow: 0 1px 5px rgb(0 0 0 / 0%), 0 2px 12px rgb(0 0 0 / 0%), 0 3px 1px -2px rgb(0 0 0 / 42%);
    }

    .order-cards p{
        font-size: .8rem;
        font-weight: bold;
        text-align: center;
        color: #2b945b;
    }

@media(max-width: 400px){
 .enter{

    width: 100%;
}
}

</style>