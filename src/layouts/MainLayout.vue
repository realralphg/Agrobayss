<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="$router.currentRoute.value.path !== '/dashboard'" reveal elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <img class="logo" src="/images/agrobase.png" />
        </q-toolbar-title>
        <q-tabs narrow-indicator dense active-color="primary">
          <q-route-tab
            label="Home"
            sm
            ripple
            no-caps
            class="gt-sm text-dark q-mx-sm"
            to="/"
            exact
          />
          <q-route-tab
            label="AgroFoods"
            ripple
            no-caps
            class="gt-sm text-dark q-mx-sm"
            to="/agrofoods"
            exact
          />

          <q-route-tab
            label="AgroFarms"
            ripple
            no-caps
            class="gt-sm text-dark q-mx-sm"
            to="/agrofarms"
            exact
          />
          <q-route-tab
            label="AgroTech"
            ripple
            no-caps
            class="gt-sm text-dark q-mx-sm"
            to="/agrotech"
            exact
          />
          <!-- <q-route-tab
            label="AgroInvest"
            ripple
            no-caps
            class="gt-sm text-dark q-mx-sm"
            to="/agroinvest"
            exact
          /> -->
        </q-tabs>
        <q-tabs class="login bg-negative" dense>
          <div class="log">
            <q-route-tab
              label="Login"
              ripple
              no-caps
              class="gt-sm text-secondary q-mx-sm"
              to="/login"
              exact
            />
          </div>

          <q-route-tab
            label="Register"
            ripple
            no-caps
            class="gt-sm register text-secondary q-mx-sm"
            to="/register"
            exact
          />
        </q-tabs>

        <!-- <q-btn
          style="color: black"
          dense
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
        /> -->

        <div class="q-pa-sm lt-md">
          <q-btn
            flat
            round
            dense
            icon="menu"
            style="color: black"
            class="q-mr-sm"
          >
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Home"
                        to="/"
                        no-caps
                        size="md"
                        class="q-mx-sm"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="AgroFoods"
                        to="/agrofoods"
                        no-caps
                        size="md"
                        class="q-mx-sm"
                    /></q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="AgroFarms"
                        to="/agrofarms"
                        no-caps
                        size="md"
                        class="q-mx-sm"
                    /></q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="AgroTech"
                        to="/agrotech"
                        no-caps
                        size="md"
                        class="q-mx-sm"
                    /></q-item-label>
                  </q-item-section>
                </q-item>

                <!-- <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="AgroInvest"
                        to="/agroinvest"
                        no-caps
                        size="md"
                        class="q-mx-sm"
                    /></q-item-label>
                  </q-item-section>
                </q-item> -->

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Login"
                        to="/login"
                        no-caps
                        size="md"
                        class="q-mx-sm"
                    /></q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label
                      ><q-btn
                        stretch
                        flat
                        label="Register"
                        to="/register"
                        no-caps
                        size="md"
                        class="q-mx-sm"
                    /></q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      class="bg-secondary"
      side="right"
      overlay
      bordered
    >
      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" class="text-primary" label="Page One" />
        <q-route-tab to="/page2" class="text-primary" label="Page Two" />
        <q-route-tab to="/page3" class="text-primary" label="Page Three" />
      </q-tabs> -->

      <!-- drawer content -->

      <!-- <q-menu>
        <q-list>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label
                ><q-btn
                  stretch
                  flat
                  label="Home"
                  to="/"
                  no-caps
                  size="md"
                  class="q-mx-sm my-font-montserrat-light"
              /></q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label
                ><q-btn
                  stretch
                  flat
                  label="About"
                  to="/about"
                  no-caps
                  size="md"
                  class="q-mx-sm my-font-montserrat-light"
              /></q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label
                ><q-btn
                  stretch
                  flat
                  label="fellowship"
                  to="/fellowship"
                  no-caps
                  size="md"
                  class="q-mx-sm my-font-montserrat-light"
              /></q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label
                ><q-btn
                  stretch
                  flat
                  label="Contact"
                  to="/contact"
                  no-caps
                  size="md"
                  class="q-mx-sm my-font-montserrat-light"
              /></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu> -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>

<style scoped>
.logo {
  width: 170px;
  height: 68px;
  object-fit: contain;
}

a{
  font-size: 2rem;
}

.login {
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 26% 100%);
  padding: 1rem;
}

@media (max-width: 400px) {
  .login {
    display: none;
  }
}

.log .q-tab__indicator {
  display: none !important;
}

.register {
  background-color: #c0e5b72b;
  padding: 0.45rem;
  border-radius: 10px;
}
</style>
