<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md griid container">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-primary text-weight-bold q-pa-sm"
          active-color="primary"
          indicator-color="green"
          align="justify"
        >
          <q-tab name="mails" label="Our Vision" />
          <q-tab name="alarms" label="Our Mission" />
          <q-tab name="movies" label="Our Values" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-secondary text-positive">
          <q-tab-panel name="mails">
            <!-- <div class="text-h6">Mails</div> -->
            Attractive agriculture for everyone which leverages technology 
            and mechanization for improved productivity and economic prosperity.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <!-- <div class="text-h6">Alarms</div> -->
           Promote technology driven and mechanized farming to attract young farmers, 
           improve accuracy in decision making, mitigate risk and improve yield.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <!-- <div class="text-h6">Movies</div> -->
            People <br>
            Innovation <br>
            Strategy <br>
            Abundance <br>            
          </q-tab-panel>
        </q-tab-panels>
      </q-card>


      <div class="img">
        <img src="/images/va.png" alt="">
      </div>

      <!-- <q-card>
        <q-tabs
          v-model="tab"
          class="bg-purple text-white"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated class="bg-purple-1 text-center">
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms" class="bg-purple-2">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card> -->
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>

<style scoped>

.q-tab__label {
  font-size: 18px !important;
  line-height: 1.715em;
  font-weight: 500;
}
.q-panel > div {
  height: 100%;
  width: 60%;
}
.q-card {
  box-shadow: none;
  border-radius: 0;
  min-height: 300px;
  background: #fff;
  position: relative;
}


.griid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-items: center;
}


.griid img{
  object-fit: contain;
  width: 400px;
}

.griid img{
  animation: spin 4s infinite linearspin 4s infinite linear;
    -webkit-animation: spin 20s infinite linear;
}

@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
@media (max-width: 600px) {
  .q-panel > div {
    height: 100%;
    width: 100%;
  }

  .griid{
  grid-template-columns: 1fr;

}

.q-card {
  min-height: 200px;

}

.griid img{
  object-fit: contain;
  width: 250px;
}
}
</style>
