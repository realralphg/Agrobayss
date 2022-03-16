<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geo&family=Georama:wght@300;400;500;700;900&family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;700&family=Mulish:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* font-family: "Roboto", sans-serif !important; */
}

button {
  cursor: pointer;
}

.q-tab__label {
  font-size: 13px;
  line-height: 1.715em;
  font-weight: 500;
}

.q-tab__content .q-tab__label{
  font-size: 1.2rem;
}

body {
  /* overflow-x: hidden; */
  font-size: 18px;
  font-family: "Roboto", sans-serif !important;
}

img {
  width: 100%;
  text-align: center;
  object-fit: contain;
}

a {
  text-decoration: none;
}
.q-btn:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: inherit;
  box-shadow: none;
}

.q-tab-panels {
    background: transparent;
}

.flex {
  display: flex;
  align-items: center;
}

.about__img {
  flex: 1;
}
.about__data {
  flex: 1;
}
@media (max-width: 500px) {
  .flex {
    flex-direction: column !important;
    flex-direction: column-reverse !important;
  }
}

li {
  list-style: none;
}
.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

.q-field__label {
  left: 0;
  top: 18px;
  max-width: 100%;
  color: #fff !important;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.00937em;
  text-decoration: inherit;
  text-transform: inherit;
  transform-origin: left top;
  transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1),
    max-width 0.324s cubic-bezier(0.4, 0, 0.2, 1);
}

.q-field__bottom {
  font-size: 12px;
  min-height: 2px;
  line-height: 1;
  color: #fff !important;
  background-color: white;
  padding: 2px 12px 0;
}
.log .q-tab__indicator {
  display: none !important;
}

.q-page-container {
  padding: 0 !important;
}
.q-drawer {
  position: fixed !important;
}

.padd{
    padding: 4rem 1rem !important;
}

input:focus {
  outline: none;
}
/* button {
  filter: blur(1px);
} */
</style>
