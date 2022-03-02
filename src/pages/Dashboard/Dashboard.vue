<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-white text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <p class="text-weight-bold">Agrobays</p>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer class="padd" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item clickable v-ripple to="/account">
          <div class="wrapp">
            <i class="ri-user-fill text-primary"></i>
            <p class="q-ml-md">Account</p>
          </div>

        </q-item>

        <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-dashboard-fill text-primary"></i>
            <p class="q-ml-md">Dashboard</p>
          </div>
        </q-item>

        <q-item clickable v-ripple to="profile">
          <div class="wrapp">
            <i class="ri-building-fill text-primary"></i>
            <p class="q-ml-md">Savings</p>
          </div>
        </q-item>


        <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-exchange-dollar-fill text-primary"></i>
            <p class="q-ml-md">Transactions</p>
          </div>
        </q-item>

        <!-- <q-item clickable v-ripple to="/">
          <div class="wrapp">
            <i class="ri-settings-2-line"></i>
            <p class="q-ml-md">Settings</p>
          </div>
        </q-item> -->

        <q-item clickable v-ripple>
          <div class="wrapp">
            <i class="ri-logout-box-r-fill text-primary"></i>
            <p class="q-ml-md">Logout</p>
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
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>


<style scoped>
p{
    margin-bottom: 0;
}
.wrapp{
  display: flex;
  align-items: center;
  color: #000;
  margin: 1.2rem 0;
}


</style>