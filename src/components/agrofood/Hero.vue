<template>
  <div class="q-pa-md sec q-my-xl">
    <div class="row align-c text-c container">
      <div class="col-md-6 col-sm-12 q-mb-xl col-xs-12">
        <h2
          style="font-size: 50px"
          class="text-h2 q-my-lg text-weight-bold text-primary"
        >
          AgroFoods
        </h2>

        <!-- <h5 style="font-size: 30px" class="text-h3 q-my-lg">
          <span class="text-accent text-h3">Save</span> like an Ant, <br />
          <span class="text-accent text-h3">Eat</span> like an
          <span class="skew">Elephant</span>.
        </h5> -->
        <div class="text-h3 text-info text-weight-bold">
          <span class="text-accent">Save</span> like an Ant,
        </div>
        <div class="text-h3 text-info text-weight-bold">
          <span class="text-accent">Eat</span> like an <span>Elephant</span>
        </div>

        <p style="font-size: 20px" class="text-body1 text-positive q-mt-lg">
          Amazing how little drops of water make <br />
          a mighty ocean? Get a <span class="text-primary text-bold">Food Bag</span> every 30days <br />
          you never knew you were saving for!
        </p>

        <div class="input-email q-mt-lg">
          <div class="input q-px-lg">
            <input placeholder="Enter your email " type="text" />
            <button class="text-secondary">Start Saving </button>
          </div>
        </div>           
      </div>
      <div class="col col-md-6 col-sm-12 col-xs-12">
        <img class="img" src="/images/group.png" />
      </div>

      <div>
        <div style="font-size: 20px" class="text-body1 text-positive q-mt-lg">
          Book weekly delivery of the best
          <span class="text-primary text-bold q-mr-md"> Fruits & Veggies</span>    
          <q-btn to="/login" class="text-secondary btn">Fruits & Veggies </q-btn>     
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
.sec {
  margin-top: 5rem;
}
h5 span.skew {
  position: relative;
}
h5 span.skew::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
  height: 3px;
  color: #ffff;
  background-color: #2b945b;
  /* width: 500px; */
  /* height: 60%;
  height: 100%;
  border: solid 2px #000;
  border-color: #000 transparent transparent transparent;
  border-radius: 140%/100px 100px 0 0; */
}
.align-c {
  display: flex;
  align-items: center;
}

h5 {
  line-height: 1.3;
}

.input-email .input {
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: rgba(229, 229, 229, 0.4);
  padding: 1rem;
  width: 70%;
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

  .btn {
  border: none;
  background: linear-gradient(121.81deg, #ca7c06 20.1%, #fcb64e 131.87%);
  padding: 0.75rem;
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
