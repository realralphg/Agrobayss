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


      <div class="ava">
        <li><i class="ri-user-fill"></i></li>
        <li>
          <p>{{useer.email || userDetails.email}}</p>
          <small>{{useer.name || userDetails.name}}</small>
        </li>
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
        <!-- <q-item clickable v-ripple to="/admin/item">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">Add Categories</p>
          </div>
        </q-item> -->

        <q-item clickable to="/admin/categories" v-ripple>
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">Categories</p>
          </div>
        </q-item>
        
        <!-- <q-item clickable v-ripple to="/admin/addfruit">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">Add Fruit</p>
          </div>
        </q-item> -->
        <q-item clickable v-ripple to="/admin/fruitbay">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">FruitBay</p>
          </div>
        </q-item>
        <!-- <q-item clickable v-ripple to="/admin/addsaving">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white"> Add Saving Plans</p>
          </div>
        </q-item> -->

        <q-item clickable v-ripple to="/admin/savings">
          <div class="wrapp">
            <i class="ri-building-fill text-white"></i>
            <p class="q-ml-md text-white">Saving Plans</p>
          </div>
        </q-item>


        <q-item clickable v-ripple to="/admin/foodbag">
          <div class="wrapp">
            <i class="ri-exchange-dollar-fill text-white"></i>
            <p class="q-ml-md text-white">Foodbags</p>
          </div>
        </q-item>
        <q-item clickable v-ripple to="/admin/foods">
          <div class="wrapp">
            <i class="ri-exchange-dollar-fill text-white"></i>
            <p class="q-ml-md text-white">Foods</p>
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

  },
  computed: {
    ...mapGetters(['cartt']),
    ...mapGetters(['useer']),
    ...mapGetters(['fruits']),
    ...mapGetters(['categories', 'fru', 'cashh']),
    ...mapGetters(['isLoggedIn']),
    ...mapGetters(['choosePlan']),  
  },
  mounted(){
    console.log(this.choosePlan)
  }
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


.ava{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.ava p{
    font-size: .95rem;
}

 .ava small{
    font-size: .95rem;
}

.ava  i{
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

</style>