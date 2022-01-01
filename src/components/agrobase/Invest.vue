<template>
  <div class="q-pa-lg services q-my-lg">
    <div class="wrrap q-pa-lg">
      <div class="row align-c text-c q-pb-xl container">
        <div class="col col-md-6 col-sm-12 col-xs-12 text-center">
          <p style="font-size: 25px" class="text-body1 text-secondary q-my-xl">
            Plan, Invest <br />
            and Save with <br />
            <span style="font-size: 28px" class="text-weight-bold"
              >Agrobays.</span
            >
          </p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <p class="text-secondary">Invest in your convenience</p>
          <div class="input-email q-mt-sm">
            <div class="input">
              <input placeholder="Enter your email" type="text" />
              <button class="text-secondary">Join Us</button>
            </div>
          </div>
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
  background: #2b945b;
}

.align-c {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-email .input {
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: #fff;
  padding: 0.75rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  font-size: 14px;
  border-radius: 8px;
}

.img {
  width: 90%;
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
.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  border-radius: 8px;
  margin: 0.55rem 0;
}
</style>
