<template>
  <div class="q-pa-md">
    <div class="top container">
      <div class="row align-c flex text-c">
        <div class="col col-md-6 col-sm-12 col-xs-12 q-py-xl">
          <img src="/images/agrofood1.png" />
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <h2
            style="font-size: 40px"
            class="text-h3 q-my-lg text-weight-bold text-primary"
          >
            Save Money
          </h2>

          <p style="font-size: 20px" class="text-body1 text-positive q-mt-lg">
            After selecting your desired plan, select the number of days you
            wish to save for on the savings calendar and save each time. Ensure
            to complete savings before the due date.
          </p>

          <button class="text-secondary btn">Get started</button>
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
