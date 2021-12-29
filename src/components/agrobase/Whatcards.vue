<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap container">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        What we do
      </h2>
      <p class="text-center q-pb-lg q-mb-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        inventore eligendi adipisci.
      </p>
      <div class="cards">
        <div class="card">
          <!-- <img src="/images/til.svg" alt="" /> -->
          <i class="ri-plant-line"></i>

          <h4>AgroFoods</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates odit aliquid deserunt molestiae odio?
          </p>
          <div class="learn"><button class="btn btn-white">Visit</button></div>
        </div>
        <div class="card">
          <!-- <img src="/images/farm.png" alt="" /> -->
          <i class="ri-pie-chart-line"></i>

          <h4>AgroFarms</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates odit aliquid deserunt molestiae odio?
          </p>
          <div class="learn"><button class="btn btn-white">Visit</button></div>
        </div>
        <div class="card">
          <!-- <img src="/images/tech.png" alt="" /> -->
          <i class="ri-caravan-line"></i>

          <h4>AgroTech</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates odit aliquid deserunt molestiae odio?
          </p>
          <div class="learn"><button class="btn btn-white">Visit</button></div>
        </div>
        <div class="card">
          <!-- <img src="/images/investment.png" alt="" /> -->
          <i class="ri-bar-chart-line"></i>
          <h4>AgroInvest</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates odit aliquid deserunt molestiae odio?
          </p>
          <div class="learn"><button class="btn btn-white">Visit</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.services {
  background: linear-gradient(
    182.13deg,
    rgba(43, 148, 91, 0.5) -215.9%,
    rgba(255, 255, 255, 0.05) 98.21%
  );
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
  position: relative;
}

.cards .card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* box-shadow: 2px 10px 10px rgba(43, 148, 91, 0.97); */
  position: relative;
  margin-top: 1.5rem;
}

.cards .card i {
  padding: 1.5rem;
  object-fit: contain;
  border-radius: 50%;
  background: #2b945b;
  color: #fff;
  position: absolute;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: -10%;
  font-size: 35px;
  left: 50%;
  transform: translate(-50%);
}

.cards .card h4 {
  margin: 3rem 0 1.5rem;
  font-size: 24px;
  color: rgb(43, 148, 91);
}

.btn {
  border: none;

  padding: 10px 2rem 10px;
  margin: 1rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}

.btn-white {
  margin-left: 1rem;
  background: #fff;
  color: #2b945b;
  border: 1px solid #2b945b;
}
</style>
