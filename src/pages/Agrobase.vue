<template>
  <q-page class="agob">
    <Home />
    <Sectionone />
    <Tabs />
    <Whatcards />
    <Agro />
    <Institutions />
    <Join />
    <!-- <Invest /> -->
    <Contact />
    <!-- <Sponsors /> -->

    <Footer />
  </q-page>
</template>

<script>
import Home from "../components/agrobase/home.vue";
import Sectionone from "../components/agrobase/Sectionone.vue";
import Whatcards from "../components/agrobase/Whatcards.vue";
import Agro from "../components/agrobase/Agro.vue";
import Institutions from "../components/agrobase/Institutions.vue";
import Join from "../components/agrobase/Join.vue";
import Tabs from "../components/Tabs.vue";
import Contact from "../components/Contact.vue";
import Sponsors from "../components/agrobase/Sponsors.vue";
import Invest from "../components/agrobase/Invest.vue";
import Footer from "../components/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Home,
    Sectionone,
    Whatcards,
    Agro,
    Institutions,
    Join,
    Invest,
    Sponsors,

    Tabs,
    Contact,
    Footer,
  },
});
</script>

<style></style>
