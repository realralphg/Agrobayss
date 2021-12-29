<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        Simple Investments
      </h2>
      <p class="text-center q-pb-lg q-mb-lg">
        Choose Our Investment Plan and Farm Products
      </p>
      <div class="cards">
        <div class="card">
          <img src="images/agrofarm5.png" alt="" />

          <h4>Signup</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

          <div class="small q-my-lg text-center">
            <strong class="q-my-md">#100,000</strong> <br />
            <small>Per Unit</small>
          </div>

          <button class="q-px-lg q-py-sm q-mt-md text-secondary bg-negative">
            Start Investment
          </button>
        </div>
        <div class="card">
          <img src="images/agrofarm6.png" alt="" />

          <h4>Fund Wallet</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

          <div class="small q-my-lg text-center">
            <strong class="q-my-md">#100,000</strong> <br />
            <small>Per Unit</small>
          </div>

          <button class="q-px-lg q-py-sm text-secondary q-mt-md bg-negative">
            Start Investment
          </button>
        </div>
        <div class="card">
          <img src="images/agrofarm3.png" alt="" />
          <h4>Invest</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

          <div class="small q-my-lg text-center">
            <strong class="q-my-md">#100,000</strong> <br />
            <small>Per Unit</small>
          </div>

          <button class="q-px-lg text-secondary q-py-sm q-mt-md bg-negative">
            Start Investment
          </button>
        </div>
        <div class="card">
          <img src="images/agrofarm4.png" alt="" />

          <h4>Withdrawal</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>

          <div class="small q-my-lg text-center">
            <strong class="q-my-md">#100,000</strong> <br />
            <small>Per Unit</small>
          </div>

          <button class="q-px-lg text-secondary q-py-sm q-mt-md bg-negative">
            Start Investment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .services {
  background: #2b945b;
} */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  place-items: center;
  position: relative;
  padding: 1rem;
}

.cards .card {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  min-height: 550px;
  text-align: center;
  border: 1px solid #2b945b;
  position: relative;
}

.cards .card h1 {
  font-size: 20px;
}

.cards .card i {
  margin-top: 3rem;
}
.cards .card img {
  min-height: 250px;
}

.cards .card h4 {
  margin: 1rem 0 1.5rem;
  font-size: 24px;
  color: rgb(43, 148, 91);
}

button {
  border: none;
  border-radius: 8px;
}
</style>
