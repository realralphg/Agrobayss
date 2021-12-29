<template>
  <div class="text q-pa-lg">
    <div class="w container">
      <h2
        class="q-pa-md text-secondary text-blink text-weight-bold text-center"
      >
        Our Farm Technologies
      </h2>
      <p style="font-size: 18px" class="text-center q-pa-md text-secondary">
        Viverra ut potenti aliquam feugiat dui imperdiet <br />
        laoreet tempus sed.Elit cursus est lorem in est id nec. <br />
        Quis diam posuere at nisl eget turpis <br />
        sagittis nunc. Sagittis erat nunc in parturient.
      </p>

      <div class="img q-mt-lg">
        <div class="row align-c">
          <img class="a" src="/images/a.png" alt="" />
          <div class="q-pa-md">
            <div class="q-gutter-sm man">
              <q-btn class="qbtn" color="primary">
                Farm Accessbays
                <q-tooltip class="bg-indigo" :offset="[10, 10]">
                  Here I am!
                </q-tooltip>
              </q-btn>

              <q-btn class="qbtn" color="primary">
                Farm Riskbays
                <q-tooltip class="bg-red" :offset="[10, 10]">
                  Here I am!
                </q-tooltip>
              </q-btn>

              <q-btn class="qbtn" color="primary">
                Farm Trackbays
                <q-tooltip class="bg-purple text-body2" :offset="[10, 10]">
                  Here I am!
                </q-tooltip>
              </q-btn>

              <q-btn class="qbtn" color="primary">
                Farm Plotbays
                <q-tooltip
                  class="bg-amber text-black shadow-4"
                  :offset="[10, 10]"
                >
                  Here I am!
                </q-tooltip>
              </q-btn>
            </div>
          </div>
        </div>
        <!-- <div class="q-pa-md">
            <div class="q-gutter-sm man">
              <q-btn class="qbtn" color="primary">
                Farm Accessbays
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <q-tooltip
                  class="bg-secondary text-primary"
                  style="font-size: 12px"
                  :offset="[10, 10]"
                >
                  <ul>
                    <li>Tractors</li>
                    <li>Ware Houses</li>
                    <li>Farm Products</li>
                    <li>Bagging / Packaging</li>
                  </ul>
                </q-tooltip>
              </q-btn>

              <q-btn class="qbtn" color="primary">
                Farm Riskbays
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <q-tooltip class="bg-red" :offset="[10, 10]">
                  Here I am!
                </q-tooltip>
              </q-btn>

              <q-btn class="qbtn" color="primary">
                Farm Trackbays
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <q-tooltip class="bg-purple text-body2" :offset="[10, 10]">
                  Here I am!
                </q-tooltip>
              </q-btn>

              <q-btn class="qbtn" color="primary">
                Farm Trackbays
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <q-tooltip
                  class="bg-amber text-black shadow-4"
                  :offset="[10, 10]"
                >
                  Here I am!
                </q-tooltip>
              </q-btn>
            </div>
          </div>
        </div>-->

        <!-- <img src="/images/agrotec.png" alt="" /> -->
        <!-- <div id="q-app">
        <div class="q-pa-xl row justify-center">
            Button component started here 
          <q-btn
            color="primary"
            flat
            @mouseover="hello = true"
            icon-right="mail"
            label="Hover Me!"
          >
              Menu components started here 
            <q-menu v-model="hello" @mouseleave="hello = false" fit>
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section>New tab</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>New incognito tab</q-item-section>
                  <q-separator />
                  <q-item-section>Recent tabs</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>History</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Downloads</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Help &amp; Feedback</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#q-app",
  data() {
    return {
      // button state false or true: as default false
      hello: false,
    };
  },
};
</script>

<style scoped>
.man {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.qbtn {
  background: #fff !important;
  padding: 1rem;
  color: #2b945b !important;
  margin: 1rem 0;
  border-radius: 50px;
}
.qbtn:first-child {
  right: 45%;
  position: relative;
  z-index: 3;
}
.qbtn:first-child::before,
.qbtn:nth-child(2)::before,
.qbtn:nth-child(3)::before,
.qbtn:nth-child(4)::before {
  content: "";
  width: 70px;
  height: 5px;
  background: #fff;
  position: absolute;
  z-index: 2;
  left: -40%;
  top: 50%;
}

.qbtn:nth-child(4) {
  right: 45%;
}

/* .qbtn span {
  margin-left: 2rem;
  padding: 1rem;
  background-color: #2b945b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.qbtn span i {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
} */
.align-c {
  display: flex;
  align-items: center;
}
.text-blink {
  position: relative;
}
.text-blink::before {
  content: "";
  position: absolute;
  background: #fff;
  left: 20%;
  top: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transform: translate(-20%, -50%);
  animation: pulse infinite 1s;
}

@keyframes pulse {
  0% {
    /* box-shadow: 0 0 0 0 #a2042a; */
    box-shadow: 0 0 0 0 #2b945b;
  }
  70% {
    box-shadow: 0 0 0 2rem rgba(253, 87, 191, 0);
  }
  100% {
    /* box-shadow: 0 0 0 0 #a2042a; */
    box-shadow: 0 0 0 0 #fff;
  }
}
.text {
  background: url("/images/bgtech.png"), #2b945b center center/cover no-repeat;
}

.img .a {
  width: 30%;
  background-color: #fff;
  padding: 2rem;

  border: 5px solid #8bc34a;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 500px) {
  .img .a {
    width: 80%;
  }
  h2 {
    font-size: 25px;
    line-height: 1.5;
  }

  .man {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    left: 60%;
  }

  .text-blink::before {
    left: -5%;
  }
}
</style>
