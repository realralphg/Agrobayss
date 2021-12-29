<template>
  <div class="how q-mb-xl bg-warning">
    <div class="section q-pa-xl bg-primary">
      <p class="text-center q-py-lg text-secondary" style="font-size: 25px">
        Subscribe to get exciting news and stories <br />
        of all our works.
      </p>

      <!-- <div class="botton text-center">
        <button class="button q-pa-xl text-secondary">
          Learn More<i class="fas fa-chevron-right text-secondary q-ml-xl"></i>
        </button>
      </div> -->
      <div class="input-email q-mt-lg">
        <div class="input">
          <input placeholder="Enter your email" type="text" />
          <button class="text-secondary">Join Us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-email .input {
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: #fff;
  /* background: rgba(229, 229, 229, 0.4); */
  padding: 1rem;

  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.input-email input {
  border: none;
  /* background: rgba(229, 229, 229, 0.4); */
  background: none;
}

.input-email button {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 0.75rem;
  border-radius: 8px;
}

@media (max-width: 400px) {
  .input-email .input {
    padding: 0.75rem;
  }

  .input-email button {
    padding: 0.45rem;
    border-radius: 8px;
  }
}

@media (max-width: 630px) {
  .text-c {
    text-align: center;
  }

  .input-email {
    margin: 0 auto;
  }

  .input-email .input {
    padding: 0.5rem;
    width: 100%;
    justify-content: space-around;
  }
  .input-email button {
    padding: 0.45rem;
    border-radius: 8px;
    font-size: 14px;
    min-width: 40%;
  }

  .input-email input {
    width: 50%;
  }
}
</style>
