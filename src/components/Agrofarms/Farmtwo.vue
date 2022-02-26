<template>
  <div class="q-pa-md bg-negative">
    <div class="top container">
      <div class="row align-c text-c">
        <div class="col col-md-6 col-sm-12 col-xs-12 q-pr-xl q-pb-xl">
          <img src="/images/agrofarm4.png" />
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <h2
            style="font-size: 40px"
            class="text-h3 q-my-lg text-weight-bold text-secondary"
          >
            Rice Farm
          </h2>

          <p style="font-size: 20px" class="text-body1 text-secondary q-mt-lg">
            As a well consumed staple food in Nigeria, we have over 500 hectares of rice farms
            where mechanized large scale farming is practiced. We also run an outgrowers
            scheme in rice production to help farmers get premium value for the efforts.
          </p>

          <button class="bg-secondary text-primary btn btn-white">
            Learn More
          </button>
        </div>
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
  padding: 0.75rem;
  border-radius: 8px;
  margin: 0.55rem 0;
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
}
</style>
