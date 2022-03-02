<template>
  <div class="q-pa-md q-my-lg bg-primary">
    <div class="row align-c text-c q-pb-xl q-pt-xl container">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-secondary"
        >
          Get Food Bag
        </h2>

        <p style="font-size: 20px" class="text-body1 text-secondary q-mt-lg">
          Select your desired Food Bag from the list and choose delivery option,
          Pickup or Home Delivery.
        </p>

        <button class="text-secondary btn">Get started</button>
      </div>
      <div class="col col-md-6 col-sm-12 col-xs-12 text-center">
        <img src="/images/agrofood2.png" />
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
img {
  width: 70%;
}
.align-c {
  display: flex;
  align-items: center;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 0.75rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

@media (max-width: 400px) {
}

@media (max-width: 520px) {
  .text-c {
    text-align: center;
  }
}
</style>
