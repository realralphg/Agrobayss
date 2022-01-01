<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap q-pa-lg container">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        Segments
      </h2>
      <!-- <p class="text-center q-pb-lg q-mb-xl">
        Understanding how Agrobays works
      </p> -->
      <div class="cards q-pa-lg">
        <div class="card">
          <i class="ri-download-cloud-line"></i>
          <p class="text-primary">Production Forecast</p>
        </div>
        <div class="card">
          <i class="ri-error-warning-line"></i>
          <p class="text-primary">Risk Management</p>
        </div>
        <div class="card">
          <i class="ri-community-line"></i>
          <p class="text-primary">Farming Companies</p>
        </div>
        <div class="card">
          <i class="ri-award-line"></i>
          <p class="text-primary">Government & Advisories</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
  position: relative;
  border-left: 10px solid #2b945b;
  box-shadow: 2px 10px 10px 10px rgba(197, 190, 190, 0.97);
}

.cards .card {
  border-radius: 8px;
  text-align: center;

  position: relative;
  padding-top: 1rem;
}

.cards .card i {
  padding: 1.5rem;
  border-radius: 50%;
  background: #2b945b;
  color: #fff;
  font-size: 35px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
}

.cards .card p {
  margin-top: 2rem;
}
.cards .card h1 {
  font-size: 30px;
}

@media (max-width: 500px) {
  .cards {
    padding: 0 !important;
  }

  .card {
    margin: 1rem 0;
  }
}
</style>
