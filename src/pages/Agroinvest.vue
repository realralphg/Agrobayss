<template>
  <q-page>
    <Investhome />
    <Sectionnew />
    <Howitworks />
    <Investtoday />
    <!-- <Convenience /> -->
    <Join />
    <Invest />
    <Sponsors />
    <Footer />
  </q-page>
</template>

<script>
import Investhome from "../components/agroinvest/Investhome.vue";
import Sectionnew from "../components/agroinvest/Sectionnew.vue";
import Howitworks from "../components/agroinvest/Howitworks.vue";
import Investtoday from "../components/agroinvest/Investtoday.vue";
// import Convenience from "../components/agroinvest/Convenience.vue";
import Join from "../components/agrobase/Join.vue";
import Invest from "../components/agrobase/Invest.vue";
import Sponsors from "../components/agrobase/Sponsors.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Investhome,
    Sectionnew,
    Howitworks,
    Investtoday,
    Sponsors,
    Join,
    Invest,
    Footer,
  },
};
</script>

<style scoped></style>
