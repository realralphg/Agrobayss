<template>
  <div class="q-pa-md q-my-xl home">
    <div class="row align-c text-c show container">
      <div class="col-md-12 col-sm-12 cen col-xs-12">
        <h2
          style="font-size: 50px"
          class="text-h3 q-my-lg text-weight-bold text-secondary"
        >
          AgroTech
        </h2>

        <p style="font-size: 25px" class="text-body1 text-secondary q-mt-lg">
          Amazing how little drops of water make <br />
          a mighty ocean? Get food every 30days <br />
          you never knew you were saving for!
        </p>

        <button class="text-secondary btn">Create an Account</button>

        <!-- <div class="input-email q-mt-lg">
          <div class="input q-px-lg">
            <input placeholder="Enter your email" type="text" />
            <button class="text-secondary">Register</button>
          </div>
        </div> -->
      </div>
      <!-- <div class="boxes col-md-12 q-my-xl">
        <div class="boxes-wrap container">
          <div class="box">
            <p>AgroFoods</p>
          </div>
          <div class="box">
            <p>AgroFarms</p>
          </div>
          <div class="box">
            <p>AgroTech</p>
          </div>

          <div class="box">
            <p class="">AgroInvest</p>
          </div>
        </div>
      </div> -->
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
.home {
  position: relative;
  height: 100vh;
  background: url("/images/trac.jpg") center center/cover no-repeat;
  z-index: 1;
  background-blend-mode: multiply;
}

.show {
  position: relative;

  z-index: 2;
  top: 50%;
  /* left: 50%; */
  transform: translateY(-50%);
}

.home::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.55;
  background: rgba(11, 101, 52, 0.6);
  /* background: #0b6534; */
  z-index: 1;
  background-blend-mode: multiply;
}

/* .show {
  position: relative;
  z-index: 1;
} */

.align-c {
  display: flex;
  align-items: center;
}

h5 {
  line-height: 1.3;
}

.input-email {
  display: flex;
  justify-content: center;
}

.input-email .input {
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: #fff;
  padding: 0.65rem;
  width: 50%;
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

/* .boxes-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.boxes-wrap .box {
  height: 100%;
  border: 2px solid #2b945b;
  color: #2b945b;
  background: #fff;
  padding: 0.45rem 1.5rem;
  margin: 1rem;
}
.boxes-wrap .box p {
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0 !important;
  color: #2b945b;
} */

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 1rem;
  border-radius: 8px;
  margin: 0.55rem 0;
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
