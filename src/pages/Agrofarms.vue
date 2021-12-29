<template>
  <Agrofarmshome />
  <Innovative />
  <Secondsecfarm />
  <Firstsec />

  <hr />
  <div class="headd">
    <h2 class="text-primary text-weight-bold text-center">Our Farms</h2>
    <Farmone />
    <Farmtwo />
    <Farmthree />
    <Farmfour />
  </div>
  <Join />
  <Invest />
  <Sponsors />

  <Footer />
</template>

<script>
import Agrofarmshome from "../components/Agrofarms/Agrofarmshome.vue";
import Innovative from "../components/Agrofarms/Innovative.vue";
import Secondsecfarm from "../components/Agrofarms/Secondsecfarm.vue";
import Firstsec from "../components/Agrofarms/Firstsec.vue";
import Farmone from "../components/Agrofarms/Farmone.vue";
import Farmtwo from "../components/Agrofarms/Farmtwo.vue";
import Farmthree from "../components/Agrofarms/Farmthree.vue";
import Farmfour from "../components/Agrofarms/Farmfour.vue";
import Join from "../components/agrobase/Join.vue";
import Invest from "../components/agrobase/Invest.vue";
import Sponsors from "../components/agrobase/Sponsors.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Agrofarmshome,
    Innovative,
    Secondsecfarm,
    Firstsec,
    Farmone,
    Farmtwo,
    Farmthree,
    Farmfour,
    Invest,
    Join,
    Sponsors,
    Footer,
  },
};
</script>

<style scoped>
img {
  width: 70%;
  object-fit: contain;
  border-radius: 20px;
}

hr {
  width: 100%;
  height: 100px;
  border: solid 2px #2b945b;
  border-color: #2b945b transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
}
</style>
