<template>
  <div class="wrapper">
    <!-- <div class="head text-center">
      <h2 class="text-primary text-h4 text-weight-bold">Our Mission</h2>
      <p class="text-positive" style="font-size: 20px">
        Our mission is simple... to help families achieve a healthy feeding plan
        with utmost convenience.
      </p>
    </div> -->

    <div class="row align-c text-c q-pt-xl container">
      <div class="col-md-6 col-sm-12 q-my-lg col-xs-12">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-primary"
        >
          Why save with us?
        </h2>
        <div class="mark">
          <div class="mark-items">
            <i class="fas fa-check"></i>
            <span>Our platform is user friendly, efficient and reliable.</span>
          </div>
          <div class="mark-items">
            <i class="fas fa-check"></i>
            <span>Saving petty cash over a period of time makes good feeding affordable.</span>
          </div>
          <div class="mark-items">
            <i class="fas fa-check"></i>
            <span>Getting a Food Bag after 30days of small savings is exciting.</span>
          </div>
          <div class="mark-items">
            <i class="fas fa-check"></i>
            <span>A planned and controlled feeding system is the new normal.</span>
          </div>
          <div class="mark-items">
            <i class="fas fa-check"></i>
            <span>With this plan you can save to feed friends and family.</span>
          </div>
        </div>
      </div>
      <div class="col col-md-6 text-center col-sm-12 col-xs-12">
        <img src="/images/frame.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 70%;
}
.wrapper {
  background: #e5e5e53d;
  padding: 3rem 0;
  border-top-left-radius: 30%;
}
.align-c {
  display: flex;
  align-items: center;
}

.mark .mark-items {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
.mark .mark-items i {
  color: #fff;
  background-color: #2b945b;
  padding: 0.75rem;
  margin: 0 1rem;
}
.mark .mark-items span {
  color: #959292;
  font-size: 18px;
}
</style>
