<template>
  <Agrotechhome />
  <Innovative />
  <Segments />
  <Ourfarm />
  <Join />
  <Contact />
  <Invest />
  <Sponsors />
  <Footer />
</template>

<script>
import Agrotechhome from "../components/agrotechh/Agrotechhome.vue";
import Innovative from "../components/agrotechh/Innovative.vue";
import Segments from "../components/agrotechh/Segments.vue";
import Ourfarm from "../components/agrotechh/Ourfarm.vue";
import Join from "../components/agrobase/Join.vue";
import Contact from "../components/Contact.vue";
import Invest from "../components/agrobase/Invest.vue";
import Sponsors from "../components/agrobase/Sponsors.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Agrotechhome,
    Innovative,
    Segments,
    Ourfarm,
    Footer,
    Join,
    Contact,
    Sponsors,
    Invest,
  },
};
</script>

<style scoped></style>
