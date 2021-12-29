<template>
  <div class="q-pa-md bg-primary q-my-lg">
    <div class="row align-c text-c q-pt-xl container">
      <div class="col-md-6 q-pb-lg col-sm-6 col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-secondary"
        >
          Select a plan
        </h2>

        <p style="font-size: 20px" class="text-body1 text-secondary q-mt-lg">
          Choose a comfortable plan of your choice, from #300, #500 or#1000
          daily... You can even save for several days at once.
        </p>

        <button class="text-secondary btn">Get started</button>
      </div>
      <div class="col col-md-6 col-sm-6 col-xs-12">
        <img src="/images/farmer.png" />
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
