<template>
  <div class="q-pa-md q-my-xl home">
    <div class="h">

      <div class="row align-c text-c show container">
        <div class="col-md-6 lef col-sm-12 col-xs-12">
          <h2
            style="font-size: 70px"
            class="text-h3 q-my-lg text-weight-bold text-secondary"
          >
            Agrobays
          </h2>

          <p style="font-size: 30px" class="text-body1 lead text-secondary q-mt-lg">
            21st Century Agriculture. <br />
            Exploring agriculture with technology and mechanization.
          </p>

          <div class="input-email q-mt-lg">
            <div class="input q-px-lg">
              <input placeholder="Enter your email" type="text" />
              <button class="text-secondary">Register</button>
            </div>
          </div>
        </div>
          <!-- <div class="col col-md-6 col-sm-12 col-xs-12">
            <img class="img" src="/images/group.png" />
          </div> -->
      </div>

      <div class="boxes q-my-lg">
        <div class="boxes-wrap container">
          <q-btn class="btn3" to="/agrofoods"
            >AgroFoods</q-btn
          >

          <q-btn class="btn3" to="/agrofoods"
            >AgroFarms</q-btn
          >

          <q-btn class="btn3" to="/agrofoods"
            >AgroTech</q-btn
          >

            <!-- <q-btn to="/agroinvest">
              <div class="box">
                <p>AgroInvest</p>
              </div>
            </q-btn> -->
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
.home {
  position: relative;
  height: 100vh;
  background: url("/images/bay1.jpeg") center center/cover no-repeat;
  z-index: 1;

}
.lead{
  line-height: 1.3;
}

.h{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 90%;
}

.show {
  position: relative;
  z-index: 2;
  margin-top: 7rem;
}

.home::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.75;
  background: rgba(11, 101, 52, 0.6);
  /* background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%); */
  z-index: 1;
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

.input-email .input {
  border-radius: 10px;
  border: 1px solid rgba(229, 229, 229, 0.4);
  background: #fff;
  padding: 0.65rem;
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

.boxes-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.boxes-wrap .box {
  height: 100%;
  border: 2px solid #fff;
  padding: 0.45rem 1.5rem;
  margin: 1rem;
}
.boxes-wrap .box p {
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0 !important;
  color: #fff;
}

.btn3{
  color:#fff;

  border:1px solid #fff; 
  padding: .75rem 1.5rem;
  margin:  3rem 1rem;
   -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
  transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
}

.btn3::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #000;
  -webkit-transform: scaleX(.3);
  transform: scaleX(.3);
  opacity: 0;
  transition: all .3s
}
.btn3:hover::before{
  opacity: 1;
  background-color: #8bc34a;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  transition: -webkit-transform .6s cubic-bezier(.08, .35, .13, 1.02), opacity .4s;
  transition: transform .6s cubic-bezier(.08, .35, .13, 1.02), opacity
}

@media (max-width: 500px) {
  .input-email .input {
    padding: 0.75rem;
  }

  .input-email button {
    padding: 0.45rem;
    border-radius: 8px;
  }

  .boxes-wrap .box {
    margin: 0.2rem;
  }
  h2{
    font-size: 40px !important;
  }

  p.lead{
    font-size: 20px !important;
  }

  .btn3{
  color:#fff;

  border:1px solid #fff; 
  padding: .35rem .75rem;
  margin:  2rem 1rem;
   -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
  transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
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
