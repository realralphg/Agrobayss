<template>
  <div class="how bg-warning q-py-xl">
    <h2
      style="font-size: 40px"
      class="text-h3 q-mb-lg text-center text-weight-bold text-primary"
    >
      Our Plans
    </h2>

    <p
      style="font-size: 17px"
      class="text-positive q-px-xl text-center text-body1"
    >
      Our plans are tailored to help various class of earners find satisfaction using our service.
      Whether you are a low, medium or high income earner, you can choose a package that fits 
      your pocket and enjoy your harvest in 30days.
    </p>

    <div class="row align-c text-c q-pt-xl container">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <div class="holderr">
          <div class="hold">
            <h6 class="text-primary">₦300 Plan</h6>
            <p style="font-size: 16px" class="text-body1 text-positive">
              Choose a comfortable plan of ₦300 per which would sum up to ₦9,000
              of 30 days saving. A food bag worth ₦9,000 with various food items
              would be delivered to you.
            </p>
          </div>
          <div class="hold">
            <h6 class="text-primary">₦500 Plan</h6>
            <p style="font-size: 16px" class="text-body1 text-positive">
              Choose a comfortable plan of ₦500 per which would sum up to ₦
              15,000 of 30 days saving. A food bag worth ₦15,000 with various
              food items would be delivered to you.
            </p>
          </div>
          <div class="hold">
            <h6 class="text-primary">₦1000 Plan</h6>
            <p style="font-size: 16px" class="text-body1 text-positive">
              Choose a comfortable plan of ₦1000 per which would sum up to
              ₦30,000 of 30 days saving. A food bag worth ₦30,000 with various
              food items would be delivered to you.
            </p>
          </div>
        </div>
      </div>
      <div class="col col-md-6 col-sm-12 q-mt-lg col-xs-12">
        <img class="q-px-lg" src="/images/plans.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 90%;
}
.align-c {
  display: flex;
  align-items: center;
}
.button {
  border: none;
  padding: 1rem;
  background-color: #c0e5b72b;
}

.holderr {
  border-left: 4px solid #2b945b;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0, 0.5);
  margin: 0 auto;
  position: relative;
  padding-left: 3rem;
  text-align: left;
  /* width: 70%; */
}

.holderr .hold::after {
  position: absolute;
  display: block;
  /* top: 50%; */
  transform: translateY(-50%);
}

.holderr .hold:nth-child(1),
.holderr .hold:nth-child(2),
.holderr .hold:nth-child(3) {
  position: relative;
}
.holderr .hold:nth-child(1)::after {
  content: "1";
  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 4px solid #2b945b;
  background-color: #fff;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(2)::after {
  content: "2";
  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 4px solid #2b945b;
  background-color: #fff;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}
.holderr .hold:nth-child(3)::after {
  content: "3";
  /* box-shadow: 0 0 0 4px #fd57bf; */
  top: 15%;
  border: 4px solid #2b945b;
  background-color: #fff;
  border-radius: 10px;
  left: -4.6rem;
  height: 3rem;
  border-radius: 1.5rem;
  width: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #313534; */
}

/* .holderr .hold:nth-child(1):after {
  
} */

@media (max-width: 400px) {
  .holderr .hold:nth-child(1)::after {
    content: "1";
    /* box-shadow: 0 0 0 4px #fd57bf; */
    top: 9%;
  }
  .holderr .hold:nth-child(2)::after {
    content: "2";
    /* box-shadow: 0 0 0 4px #fd57bf; */
    top: 9%;
  }
  .holderr .hold:nth-child(3)::after {
    content: "3";
    /* box-shadow: 0 0 0 4px #fd57bf; */
    top: 9%;
  }
}
</style>
