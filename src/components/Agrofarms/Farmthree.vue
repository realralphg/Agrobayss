<template>
  <div class="q-pa-md q-my-lg">
    <div class="row align-c text-c q-pt-xl container">
      <div class="col-md-6 q-pb-lg col-sm-6 col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-primary"
        >
          Livestock Farm
        </h2>

        <p style="font-size: 20px" class="text-body1 text-positive q-mt-lg">
          Agrobays has various livestock farms of small rumnants, piggery, poultry 
          and cattles that are grown for meat, diary, eggs and leather. Our patnership
          with global agric institutioins has helped us maintain international best 
          practices and a constant remarkable high productivity.
        </p>

        <button class="bg-secondary text-primary btn btn-white">
          Learn More
        </button>
      </div>
      <div class="col col-md-6 col-sm-6 col-xs-12 text-center">
        <img src="/images/agrofarm5.png" />
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
