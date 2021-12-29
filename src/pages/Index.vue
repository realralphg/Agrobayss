<template>
  <q-page class="ppge">
    <Hero />
    <!-- <BBoxes /> -->

    <div class="rowss">
      <div class="head text-center q-pt-xl">
        <h2 class="text-primary text-h4 q-pa-md text-weight-bold">
          Steps to Start Your Farm Off Right
        </h2>
        <p style="font-size: 20px" class="q-pa-md text-positive">
          Follow the instructions for more
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
import Hero from "../components/Hero.vue";
// import BBoxes from "../components/BBoxes.vue";
import Firstsec from "../components/Firstsec.vue";
import Secondsec from "../components/Secondsec.vue";
import Thirdsec from "../components/Thirdsec.vue";
import Mission from "../components/Mission.vue";
import How from "../components/How.vue";
import Plans from "../components/Plans.vue";
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
