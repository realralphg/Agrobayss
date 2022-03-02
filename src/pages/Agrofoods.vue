<template>
  <q-page class="ppge">
    <Hero />
    <!-- <BBoxes /> -->

    <div class="rowss">
      <div class="head text-center q-pt-xl">
        <h2 class="text-primary text-h4 q-pa-md text-weight-bold">
          Steps to enjoy an unlimited food supply.
        </h2>
        <p style="font-size: 20px" class="q-pa-md text-positive">
          Follow the instructions for a feeding plan that works.
        </p>
      </div>

      <Firstsec />
      <Secondsec />
      <Thirdsec />
    </div>
    <Mission />
    <How />
    <Plans />
    <Subscribe />
    <Contact />
    <Footer />
  </q-page>
</template>

<script>
import Hero from "../components/agrofood/Hero.vue";
// import BBoxes from "../components/BBoxes.vue";
import Firstsec from "../components/agrofood/Firstsec.vue";
import Secondsec from "../components/agrofood/Secondsec.vue";
import Thirdsec from "../components/agrofood/Thirdsec.vue";
import Mission from "../components/agrofood/Mission.vue";
import How from "../components/agrofood/How.vue";
import Plans from "../components/agrofood/Plans.vue";
import Subscribe from "../components/Subscribe.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Hero,

    Firstsec,
    Secondsec,
    Thirdsec,
    Mission,
    How,
    Plans,
    Subscribe,
    Contact,
    Footer,
  },
});
</script>

<style scoped></style>
