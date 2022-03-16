<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap container">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        What we do
      </h2>
      <p class="text-center q-pb-lg q-px-lg q-mb-xl">
        To deliver a community of modern agric and agribusiness enthusiasts, 
        we have divided our operations into <br> three main categories, under which all 
        our operations are classsified.
      </p>
      <div class="cards">
        <div class="card">
          <!-- <img src="/images/til.svg" alt="" /> -->
          <i class="ri-restaurant-line"></i>

          <h4>AgroFoods</h4>
          <p>
            Whether you are a student, a civil servant or self-employed, AgroFoods 
            helps you save a penny for a pound of food. Get weekly deliveries of the best fruits 
            and vegetables grown in hydroponics and monthly deliveries of well-sorted foodbags.
          </p>
          <div class="learn"><button class="btn button12 btn-white"><span>Visit</span></button></div>

          <!-- <div class="learn"><button class="btn btn-white">Visit</button></div> -->
        </div>
        <div class="card">
          <!-- <img src="/images/farm.png" alt="" /> -->
          <!-- <i class="ri-pie-chart-line"></i> -->
          <i class="ri-plant-line"></i>


          <h4>AgroFarms</h4>
          <p>
            At AgroFarms, we leverage cutting-edge technologies and engineering to farm in a 
            unique way that makes farming attractive. Thousands of small holder farmers find fulfilment 
            being part of an outgrowers scheme that improves their farming experience.
          </p>
          <div class="learn"><button class="btn button12 btn-white"><span>Visit</span></button></div>

          <!-- <div class="learn"><button class="btn btn-white">Visit</button></div> -->
        </div>
        <div class="card">
          <!-- <img src="/images/tech.png" alt="" /> -->
          <!-- <i class="ri-caravan-line"></i> -->
          <i class="ri-macbook-line"></i>

          <h4>AgroTech</h4>
          <p>
            Innovative agriculture is at the center of all we do at Agrobays, which is why we 
            re-invest more than a quarter of our revenue on research and development. We are constantly 
            re-defining modern farming to be more attractive, predictable, sustainable and affordable.
          </p>
          <div class="learn"><button class="btn button12 btn-white"><span>Visit</span></button></div>

          <!-- <div class="learn"><button class="btn btn-white">Visit</button></div> -->
        </div>
        <!-- <div class="card">
          <img src="/images/investment.png" alt="" />
          <i class="ri-bar-chart-line"></i>
          <h4>AgroInvest</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates odit aliquid deserunt molestiae odio?
          </p>
          <div class="learn"><button class="btn btn-white">Visit</button></div>
        </div> -->
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
  min-height: 450px;
}
.cards .card p{
min-height: 190px;
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


.button12 {
  cursor: pointer;
  /* background-color: #000; */
  /* width: 330px;
  height: 64px; */
  /* padding:20px 50px; */
  /* line-height: 64px; */
  position: relative;
  /* transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%); */
  z-index: 0;
  /* background:#9A8A62; */
  background: #2b945b;
  color: #fff;
  /* margin-left:20px; */
  /* height: 40px; */
}
.button12 span {
  color: #fff;
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 35px;
  position: absolute;
  left: 13%;
  transform: translateX(-25%);
  text-transform: uppercase;
  font: bold 18px/66px Arial;
  transform: scaleX(0.6);
  letter-spacing: 3px;
  transform-origin: center left;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
  height: 20px;
}
.button12 em {
  position: absolute;
  height: 1px;
  background: #fff;
  width: 47%;
  right: 23px;
  top: 50%;
  transform: scaleX(0.25);
   -webkit-transform:scaleX(0.25);
  transform-origin: center right;
  transition: all 0.3s ease;
  z-index: 1;
}
.button12:before,
.button12:after {
  content: '';
  /* background: #fff; */
  background-color: rgba(255, 255, 255, 0.55);
  color: #2b945b;
  height: 50%;
  width: 0;
  position: absolute;
  /* border-radius: 8px; */
  transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  -webkit-transition:0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.button12:before {
  top: 0;
  left: 0;
  right: auto;
}
.button12:after {
  bottom: 0;
  right: 0;
  left: auto;
color: #2b945b;
}

.button12:hover:before {
  width: 100%;
  right: 0;
  left: auto;

}
.button12:hover:after {
  width: 100%;
  left: 0;
  right: auto;
  color: #2b945b;

}

.button12:hover{
 color: #2b945b;
}
.button12:hover span {
  color: #000;
}
.button12:hover em {
  background: #000;
  transform: scaleX(.51);
  transform: scaleX(.51);
}
</style>
