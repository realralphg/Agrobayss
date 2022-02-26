<template>
  <div class="q-pa-md q-my-lg">
    <div class="row align-c text-c q-pt-xl container">
      <div class="col-md-6 q-pb-lg col-sm-6 col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-md text-weight-bold text-primary"
        >
          Beyond Traditional Agriculture
        </h2>

        <p style="font-size: 20px" class="text-body1 text-positive q-mt-lg">
         We are changing the face of agriculture in Africa! <br><br>
         Many young Africans see farming as a mundane practice because of the traditional ways 
         of farm cultivation using hand tools. We are making farming and farm products attractive to 
         the young African population through the inclusion of technology and mechanization. <br> <br> 
         Agrobays' AgroFoods specializes in the delivery of well-packaged food items and vegetables to subscribers; 
         AgroFarms cultivates a variety of crops and livestocks through technology and mechanization across Nigeria 
         and also leverage small holder farmers in an outgrowers scheme; The AgroTech arm focuses on 
         Agric Technologies which includes drone technologies for application of herbicides, irrigation and 
         survellance; Farm Riskbay, which forcasts the viability of crops to be farmed in a given geography;
         Farm Accessbay, a platform which provides access to buyers of farm products, as well as resources 
         such as; warehouses, tractors, fertilizers, herbicides, labour farm technology and Farm Trackbay which helps
         farm project managers track farm activities anywhere, from onboarding to conclusion.

        </p>
        <div class="btns">
          <button class="text-secondary btn">Get started</button>
          <button class="bg-secondary text-primary btn btn-white">
            View More
          </button>
        </div>
      </div>
      <div class="col col-md-6 col-sm-6 col-xs-12 text-center">
        <img src="/images/agrobays1.png" />
      </div>
    </div>

    <!-- <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.align-c {
  display: flex;
  align-items: center;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

.btns {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-white {
  margin-left: 1rem;
  border: 1px solid #2b945b;
}

@media (max-width: 400px) {
}

@media (max-width: 520px) {
  .text-c {
    text-align: center;
  }

  .btn {
    border: none;
    background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
    padding: 10px 14px 10px 14px;
    margin: 1rem;
    border-radius: 8px;
    margin: 0.55rem;
    font-size: 13px;
  }
}
</style>
