<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="q-py-sm bg-primary fle text-white">
      <q-toolbar>
        <q-btn class="bg-primary text-white" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <p class="text-white text-weight-bold">Agrobays</p>
        </q-toolbar-title>
      </q-toolbar>


      <div class="nav-hold">
            <nav class="nav">
                <!-- {{cartShop.Cart.cart}} -->
                <!-- {{addition}} -->
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
                                                Your Basket
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
                                                    <q-btn v-if="cart.qty > 0" class="bo bg-positive" 
                                                        round
                                                        color="primary"
                                                        flat
                                                        size="20px"
                                                        label="-"
                                                        @click="minus(cart)"
                                                    />
                                                    <span class="text-caption quan">{{cart.qty}}</span>
                                                    <q-btn
                                                        round
                                                        size="20px"
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
                                            <q-item-section side>
                                                <q-btn @click="deleteItem(cart)" size="10px" round color="red" icon="delete" />

                                                
                                            </q-item-section>







                                        </q-item>


                                        <div v-if="cartt.length" class="total">
                                          <div class="ho">
                                            <p class="text-primary">Total fruits : {{cartt.length}}</p>


                                            <p class="text-primary">Total: ₦{{Math.abs(cashh)}}</p>
                                            <q-btn to="/checkout" class=" bg-primary text-white checkout">Checkout</q-btn>

                                          </div>

                                        </div>
                                        
                                        

                                        <div v-if="!cartt.length" class="no-tasks">
                                            <q-icon class="text-center" name="check" size="100px" color="primary"></q-icon>
                                            <div class="div text-h5 text-primary text-center">Your Basket is Empty</div>
                                        </div>




                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                            
                        <!-- <i class="ri-shopping-cart-fill"></i> -->
                        
                    </li>
                    <div class="ava">
                        <li><i class="ri-user-fill"></i></li>
                        <li>
                            <p>{{useer.email || userDetails.email}}</p>
                            <small>{{useer.name || userDetails.name}}</small>
                        </li>
                    </div>
                </ul>
            </nav>
      </div>
    </q-header>

    <q-drawer class="padd bg-primary" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple to="/account">
          <div class="wrapp">
            <i class="ri-user-fill text-white"></i>
            <p class="q-ml-md text-white">Account</p>
          </div>

        </q-item>

        <q-item clickable v-ripple to="/dashboard">
          <div class="wrapp">
            <i class="ri-dashboard-fill text-white"></i>
            <p class="q-ml-md text-white">Dashboard</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="myplan">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">Add Plans</p>
          </div>
        </q-item>
        <q-item clickable v-ripple to="plans">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">Plans</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="savings">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">Savings</p>
          </div>
        </q-item>


        <q-item clickable v-ripple to="/fruits">
          <div class="wrapp">
            <i class="ri-exchange-dollar-fill text-white"></i>
            <p class="q-ml-md text-white">Fruits / Veggies</p>
          </div>
        </q-item>

        <!-- <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-settings-2-line"></i>
            <p class="q-ml-md">Settings</p>
          </div>
        </q-item> -->

        <q-item @click="logout" clickable v-ripple to="/login">
          <div class="wrapp">
            <i class="ri-logout-box-r-fill text-white"></i>
            <p class="q-ml-md text-white">Logout</p>
          </div>
        </q-item>


        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
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
        $q.loading.show()

        // hiding in 2s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 2000)
      },
      leftDrawerOpen,
      totalsP: JSON.parse(localStorage.getItem('newPrice')),
      userDetails: JSON.parse(localStorage.getItem('userdet')),
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {    
    logout(){
      console.log('hey')
      this.showLoading()
      this.$store.dispatch('logout')
      .then(() => {
        this.showLoading()
        this.$q.notify({
        message: 'Logout Successful',
        color: 'primary',
        avatar: 'https://image.shutterstock.com/image-vector/avatar-icon-on-black-round-600w-1167668266.jpg'})
        this.$router.push('/login')
      }) 
    },
    add(data) {
        let totalMoney = this.totalAmt
        let fruitNumber = this.totalFruit
        this.$store.dispatch('addition',{data, totalMoney, fruitNumber})
      },
      minus(data) {

        let totalMoney = this.totalAmt
        let fruitNumber = this.totalFruit
        this.$store.dispatch('minus', {data, totalMoney, fruitNumber})

    },

    deleteItem(fruit){
        // console.log(id)
      this.$store.dispatch('deleteItem', {fruit})
    }
  },
  computed: {
    ...mapGetters(['cartt']),
    ...mapGetters(['useer']),
    ...mapGetters(['fruits']),
    ...mapGetters(['categories', 'fru', 'cashh']),
    ...mapGetters(['isLoggedIn']),
        
  },
}
</script>


<style scoped>
p{
    margin-bottom: 0;
}


.fle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
}
.wrapp{
  display: flex;
  align-items: center;
  color: #000;
  margin: 1.2rem 0;
}

.head-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2b945b;
  color: #fff;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

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
    width: 700px;
    
}

.no-tasks{
    margin: 2rem 0;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.checkout{
  padding: .65rem 1.5rem;
  /* margin: 1.5rem 0 !important; */
  display: flex;
  justify-content: center;
  margin: 1.5rem auto;
  width: 60%;
}

.total{
  margin: .75rem 0;
  /* padding: 1;s */
  /* position: fixed; */

}
</style>