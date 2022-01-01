<template>
  <div class="q-pa-md services q-my-lg">
    <div class="wrrap container">
      <h2
        style="font-size: 40px"
        class="text-h3 q-my-md text-center text-weight-bold text-primary"
      >
        Invest on your Convenience
      </h2>
      <p class="text-center text-positive q-pb-lg q-mb-lg">
        Choose a comfortable plan of your choice, from #300, #500 or#1000
        daily... You can even save for several days at once.
      </p>

      <div class="learn">
        <div class="row">
          <div class="col-md-6">
            <div class="inn-inn">
              <div class="inn">
                <h2 class="text-secondary">Long terms Investment</h2>
                <p>Invest on your convenince for long term.</p>

                <button
                  class="q-px-lg q-py-sm q-mt-md text-secondary bg-negative"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="holderr">
              <div class="inner-inner q-ml-lg q-mb-lg">
                <div class="inner">
                  <h2 class="text-secondary">Long terms Investment</h2>
                  <p>Invest on your convenince for long term.</p>

                  <button
                    class="q-px-lg q-py-sm q-mt-md text-secondary bg-negative"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div class="hol q-ml-lg">
                <p class="text">Invest on your convenince for long term.</p>

                <button
                  class="q-px-lg q-py-sm q-mt-xs text-secondary bg-negative"
                >
                  Learn More
                </button>
              </div>
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
h2 {
  font-size: 23px;
  font-weight: 700;
}

p {
  font-weight: 300;
  color: #fff;
}

p.text {
  color: #000;
}
button {
  border: none;
  border-radius: 8px;
}

.inn-inn {
  width: 100%;
  height: 100%;
  min-height: 400px;
  background: url("/images/garden.png") center center/cover no-repeat;
  position: relative;
}

.inner-inner {
  height: 100%;

  min-height: 400px;
  background: url("/images/medium.png") center center/cover no-repeat;
  position: relative;
}

.inn-inn::before,
.inner-inner::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.27);
}

.inn,
.inner {
  position: absolute;
  bottom: 0;
  padding-left: 1rem;
  padding-bottom: 1rem;
  z-index: 2;
}
</style>
