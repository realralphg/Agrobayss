<template>
  <div class="wrapper container">
    <div class="heeder">
      <q-btn to="/" class="icon">
        <i class="ri-arrow-left-line text-primary text-weight bold"></i>
      </q-btn>

      <div class="logo">
        <img src="/images/lo.png" alt="" />
      </div>
    </div>
    <h1 class="text-h3 text-left text-weight-bold text-primary q-my-lg q-pa-md">
      Register
    </h1>

    <div class="eight q-my-lg">
      <h3>OR</h3>
    </div>
    <div class="input-wrap">
      <label class="text-primary" for="">Full Name</label> <br />

      <div class="input">
        <i class="far q-mr-md fa-user text-primary"></i>

        <input type="text" placeholder="eg. Ademola" />
      </div>
    </div>
    <div class="input-wrap">
      <label class="text-primary" for="">Email</label> <br />

      <div class="input">
        <i class="ri-mail-line q-mr-md text-primary"></i>

        <input type="email" placeholder="Enter your email" />
      </div>
    </div>
    <div class="input-wrap">
      <label class="text-primary" for="">Password</label> <br />

      <div class="input">
        <i class="ri-lock-line q-mr-md text-primary"></i>

        <input type="text" placeholder="Enter your password" />
      </div>
    </div>
    <div class="input-wrap">
      <label class="text-primary" for="">Phone Number</label> <br />

      <div class="input">
        <i class="ri-phone-fill q-mr-md text-primary"></i>

        <input type="text" placeholder="Enter your Phone Number" />
      </div>
    </div>
    <div class="input-wrap">
      <label class="text-primary" for="">Country</label> <br />

      <div class="input">
        <i class="ri-user-add-line q-mr-md text-primary"></i>

        <select id="">
          <option value="">Select your country</option>
          <option value="Afganistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antigua & Barbuda">Antigua & Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
        </select>
      </div>

      <div class="button text-center">
        <button class="btn">Register</button>
      </div>

      <p class="text-center text-positive">
        Already have an account?
        <q-btn to="/login" class="text-primary"> Login</q-btn>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.heeder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heeder i {
  font-size: 35px;
}

.heeder .icon {
  cursor: pointer;
}

.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}

.input-wrap,
select {
  width: 100%;
}

.input-wrap .input {
  /* border: 1px solid #2b945b; */
  padding: 0.75rem;
  margin: 1rem 0;
  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.45rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.btn {
  border: none;
  background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%);
  padding: 16px 24px 16px 24px;
  margin: 1rem;
  border-radius: 8px;
  color: #fff;
  margin: 0.55rem 0;
  width: 50%;
}

.eight h3 {
  text-align: center;

  text-transform: uppercase;
  font-size: 26px;
  letter-spacing: 1px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 16px 0;
  grid-gap: 22px;
}

.eight h3:after,
.eight h3:before {
  content: " ";
  display: block;
  border-bottom: 1px solid #ccc;
  background-color: #f8f8f8;
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
}
</style>
