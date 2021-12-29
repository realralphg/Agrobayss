<template>
  <div class="q-pa-md q-my-lg">
    <div class="row align-c text-c q-pt-xl container">
      <div class="col-md-6 q-pb-lg col-sm-6 col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-md text-weight-bold text-primary"
        >
          Select a plan
        </h2>
        <h5 class="text-body1 text-positive q-mt-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h5>

        <p style="font-size: 20px" class="text-body1 text-positive q-mt-lg">
          Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus
          sed.Elit cursus est lorem in est id nec. Quis diam posuere at nisl
          eget turpis sagittis nunc. Sagittis erat nunc in parturient.
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
