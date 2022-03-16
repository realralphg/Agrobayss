<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap container">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        Institutions we serve
      </h2>
      <p class="text-center q-pb-lg q-mb-xl">
        We serve a plethora of instutions across Nigeria and our services are tailored 
        objectively to meet the unique demands of every client we engage. <br> From private to 
        public institutions, our services carries a mark of excellence and exclusivity.
      </p>
      <div class="cards">
        <div class="card">
          <h1 class="text-weight-bold">100k+</h1>
          <i class="ri-user-line"></i>
          <p class="text-primary">Private</p>
        </div>
        <div class="card">
          <h1 class="text-weight-bold">200+</h1>
          <i class="ri-building-line"></i>
          <p class="text-primary">Public</p>
        </div>
        <div class="card">
          <h1 class="text-weight-bold">50+</h1>
          <i class="ri-team-fill"></i>
          <p class="text-primary">Cooperatives</p>
        </div>
        <div class="card">
          <h1 class="text-weight-bold">10+</h1>
          <i class="ri-government-line"></i>
          <p class="text-primary">Government</p>
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
  grid-template-columns: repeat(auto-fit, minmax(50px, 200px));
  /* gap: 1rem; */
  /* place-items: center; */
  justify-content: center;
  position: relative;
}

.cards .card {
  border-radius: 8px;
  text-align: center;

  position: relative;
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
</style>
