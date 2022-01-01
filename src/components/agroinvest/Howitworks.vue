<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        What we do
      </h2>
      <p class="text-center q-pb-lg q-mb-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing
      </p>
      <div class="cards bg-primary">
        <div class="card">
          <h1>1</h1>
          <i class="ri-account-circle-line text-primary"></i>

          <h4>Signup</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <div class="card">
          <h1>2</h1>
          <i class="ri-wallet-line text-primary"></i>

          <h4>Fund Wallet</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <div class="card">
          <h1>3</h1>
          <i class="ri-line-chart-line text-primary"></i>

          <h4>Invest</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        <div class="card">
          <h1>4</h1>
          <i class="ri-bank-card-line q-py-xl text-primary"></i>

          <h4>Withdrawal</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
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
  padding: 1.5rem;
}

.cards .card {
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 10px 10px rgba(43, 148, 91, 0.97);
  position: relative;
  margin: 1rem 0;
}

.cards .card h1 {
  padding: 1rem;
  border-radius: 50%;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);

  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;

  color: #fff;
  position: absolute;
  font-size: 20px;
  top: -13%;
  left: 50%;
  transform: translate(-50%);
}

.cards .card i {
  margin-top: 3rem;
  font-size: 35px;
}

.cards .card h4 {
  margin: 1rem 0 1.5rem;
  font-size: 24px;
  color: rgb(43, 148, 91);
}
</style>
