<template>
  <section>
    <div class="q-pa-xl bg-negative text-white">
      <div class="row footer-row">
        <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="text-body1">About</div>
          <q-separator class="bg-secondary" style="width: 50%" />
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
          >
            Home
          </div>
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
            @click="$router.push('/agrofoods')"
          >
            AgroFoods
          </div>
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
            @click="$router.push('/agrofarms')"
          >
            AgroFarms
          </div>
          <!-- <div
              class="text-body2 link q-mt-md cursor-pointer my-font-montserrat-light text-primary"
              @click="$router.push('/media')"
            >
              Media
            </div> -->
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
            @click="$router.push('/agrotech')"
          >
            AgroTech
          </div>
        </div>

        <!-- <div class="col-md-3 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="text-body1 my-font-montserrat-light">Resources</div>
          <q-separator class="bg-secondary" style="width: 50%" />
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
            @click="$router.push('/agroinvest')"
          >
            AgroInvest
          </div>
          <div
            class="
              text-body2
              link
              q-mt-md
              cursor-pointer
              my-font-montserrat-light
              text-secondary
            "
            @click="$router.push('/')"
          >
            FAQ
          </div>
        </div> -->
        <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="text-body1 my-font-montserrat-light">Social Media</div>
          <q-separator class="bg-secondary" style="width: 50%" />
          <div class="text-body2 q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="https://www.facebook.com/manzo.maigari"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-facebook"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-facebook"></i>
              <span class="q-ml-sm my-font-montserrat-light">Facebook</span></a
            >
          </div>
          <div class="text-body2 q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="http://twitter.com"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-twitter"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-twitter"></i>
              <span class="q-ml-sm my-font-montserrat-light">Twitter</span></a
            >
          </div>
          <div class="text-body2 q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="https://www.instagram.com/maigarimanzo/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-instagram"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-instagram"></i>
              <span class="q-ml-sm my-font-montserrat-light">Instagram</span></a
            >
          </div>
          <div class="text-body2 q-mt-md cursor-pointer">
            <a
              class="my-font-montserrat-light text-white text-center"
              href="https://www.linkedin.com/in/manzo-maigari-a7b4b727/"
              target="_blank"
            >
              <!-- <q-icon
                class="link"
                color="grey-8"
                name="ion-logo-linkedin"
                style="font-size: 2em"
              /> -->
              <i class="fab fa-linkedin"></i>
              <span class="q-ml-sm my-font-montserrat-light">Linkedin</span></a
            >
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12 q-pt-md my-font-nav">
          <div class="text-body1 my-font-montserrat-light">Contact Info</div>
          <q-separator class="bg-secondary" style="width: 50%" />
          <div class="text-body2 my-font-montserrat-light q-mt-md">
            #F6, Y.A. Ahmed House, Ahmadu Bello Way, Kaduna, Nigeria.
          </div>
          <div class="text-body2 q-mt-md my-font-montserrat-light">
            <span>Email: </span>
            <span class="ttext-secondary">hi@agrobays.com</span>
          </div>
          <!-- <div class="text-body2 q-mt-md my-font-montserrat-light">
              <span>Phone: </span>
              <span class="text-primary">+234 807 777 7777</span>
            </div> -->
        </div>
      </div>
      <q-separator class="bg-grey-9 q-px-xl q-mt-xl" />
      <div class="text-caption text-secondary my-font-montserrat-light">
        © 2021 Agrobays. All rights reserved.
      </div>
      <div class="text-caption text-secondary my-font-montserrat-light">
        By Greysoft© Technologies.
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.rower {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
}
</style>
