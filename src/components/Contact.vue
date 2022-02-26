<template>
  <div class="wrapper q-pb-xl">
    <div class="row bord container">
      <div class="col-md-4 q-pa-lg bgg col-sm-12 col-xs-12">
        <h2
          style="font-size: 40px"
          class="
            text-h3
            q-px-xl q-my-lg
            text-center text-weight-bold text-secondary
          "
        >
          Contact Details
        </h2>

        <!-- <q-separator class="text-center bg-secondary" style="width: 50%" /> -->
        <div class="inp">
          <q-input class="q-my-lg text-secondary" bottom-slots label="#F6, Y.A. Ahmed House, Ahmadu Bello Way, Kaduna, Nigeria">
            <template v-slot:prepend>
              <q-icon class="text-secondary" name="place" />
            </template>
            <!-- <template v-slot:append>
              <q-icon name="close" class="cursor-pointer" />
            </template> -->

            <!-- <template v-slot:hint> Field hint </template> -->
          </q-input>
          <q-input class="q-my-lg text-secondary" bottom-slots label="+234 809 917 9487">
            <template v-slot:prepend>
              <q-icon class="text-secondary" name="call" />
            </template>
            <!-- <template v-slot:append>
              <q-icon name="close" class="cursor-pointer" />
            </template> -->

            <!-- <template v-slot:hint> Field hint </template> -->
          </q-input>
          <q-input class="q-my-lg text-secondary" bottom-slots label="https://agrobays.com">
            <template v-slot:prepend>
              <q-icon class="text-secondary" name="language" />
            </template>
            <!-- <template v-slot:append>
              <q-icon name="close" class="cursor-pointer" />
            </template> -->

            <!-- <template v-slot:hint> Field hint </template> -->
          </q-input>
          <q-input class="q-my-lg text-secondary" bottom-slots label="hi@agrobays.com">
            <template v-slot:prepend>
              <q-icon class="text-secondary" name="mail" />
            </template>
            <!-- <template v-slot:append>
              <q-icon name="close" class="cursor-pointer" />
            </template> -->

            <!-- <template v-slot:hint> Field hint </template> -->
          </q-input>
        </div>
      </div>
      <div class="col col-md-8 col-sm-12 col-xs-12 q-pa-lg">
        <h2
          style="font-size: 40px"
          class="text-h3 q-my-lg text-weight-bold text-primary"
        >
          Contact Us
        </h2>
        <p class="text-positive q-px-xl">
          Your email address will not be published. Required fields are marked
          with
        </p>
        <div class="input-group">
          <div class="shorts">
            <div class="short">
              <input
                type="
                    "
                placeholder="Full Name"
                class="short"
              />
            </div>
            <div class="short">
              <input
                type="
                    "
                placeholder="Email"
                class="short"
              />
            </div>
          </div>

          <div class="long">
            <input type="text" placeholder="Subject" />
          </div>
          <div class="long">
            <textarea class="text-positive" placeholder="">Message </textarea>
          </div>

          <button>Send a message</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.input-group .shorts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  /* justify-content: space-between; */
}

.input-group .shorts input {
  width: 100%;
  /* margin-right: 1rem; */
  background: #ffffff;
  /* border: 0.5px solid #5a4a4a; */
  /* box-sizing: border-box; */
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
}

.input-group .long input,
.input-group textarea {
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
}
.input-group .long input::placeholder,
.input-group textarea::placeholder {
  color: #959292 !important;
}

.input-group button {
  border: none;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background: linear-gradient(
    116.07deg,
    #2b945b 33.57%,
    rgba(139, 195, 74, 0.89) 123.58%
  );
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
}
.input-group input,
.input-group textarea {
  border: 1px solid #2b945b;
}
/* .wrapper {
  background: #e5e5e53d;
  padding: 3rem 0;
  border-top-left-radius: 30%;
} */

.bgg {
  background: linear-gradient(
    116.07deg,
    #2b945b 51.38%,
    rgba(139, 195, 74, 0.89) 123.58%
  );
  border: 1px solid #2b945b;
}
.align-c {
  display: flex;
  align-items: center;
}

.bord {
  border: 1px solid #2b945b;
  border: 1px solid #2b945b;
}
</style>
