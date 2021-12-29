<template>
  <div class="q-pa-md q-my-xl home">
    <div class="row align-c text-c show container">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-center text-primary"
        >
          New Opportunities
        </h2>

        <p
          style="font-size: 25px"
          class="text-body1 text-center text-secondary q-mt-lg"
        >
          We help people leverage farmimg through Technology
        </p>

        <div class="cards">
          <div class="card text-primary">
            <i class="ri-hand-coin-line"></i>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptates odit aliquid deserunt molestiae odio?
            </p>
          </div>
          <div class="card text-primary">
            <i class="ri-numbers-line"></i>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptates odit aliquid deserunt molestiae odio?
            </p>
          </div>
          <div class="card text-primary">
            <i class="ri-shield-check-line"></i>

            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptates odit aliquid deserunt molestiae odio?
            </p>
          </div>
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
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
  position: relative;
}

.cards .card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* box-shadow: 2px 10px 10px rgba(221, 238, 229, 0.97); */
  min-height: 200px;
  transition: all 0.5s ease-in-out;
}
.cards .card:hover {
  background-color: #2b945b;
  transform: scale(1.1);
}
.cards .card:hover p {
  color: #fff;
}
.cards .card:hover i {
  background-color: #fff;
  color: #2b945b;
}

.cards .card i {
  padding: 1.5rem;
  border-radius: 50%;
  background: #2b945b;
  color: #fff;
  margin: 2rem 0;
  font-size: 35px;
}

/* .cards .card i {
  padding: 1.5rem;
  border-radius: 50%;
  background: #2b945b;
  color: #fff;
  font-size: 35px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
} */

.cards .card p {
  margin: 2rem 0;
}
</style>
