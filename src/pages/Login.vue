<template>
  <div class="wrapper container q-pt-sm">
    <!-- <p class="top-text text-left text-weight-bold text-primary">
      Login
    </p> -->
    <!-- <p class="text-dark">Welcome Back, Sirgappy</p> -->

    <!-- This div needs to be changed -->
    <div class="eight q-my-lg">
      <h3> <span class="login-text">Login</span> </h3>

    </div>
    
    <!-- End of This div needs to be changed -->
    <div class="text-red q-mb-sm">
      <p v-if="errors.length" class="text-white q-mb-xl resp bg-primary q-px-lg q-py-md">
        {{errors[0]}}
      </p>
    </div>
    <form @submit.prevent="login">
        <div class="input-wrap">
            <label class="text-primary" for="">Email</label> <br />

            <div class="input">
                <i class="ri-mail-line q-mr-md text-primary"></i>

                <input v-model="form.email" type="email" placeholder="Enter your email" />
            </div>
        </div>
        <div class="input-wrap">
            <label class="text-primary" for="">Password</label> <br />

            <div class="input">
               <i class="ri-lock-line q-mr-md text-primary"></i>

                <input v-model="form.password" type="password" placeholder="Enter your password" />
            </div>
            <p class="text-primary forgot">Forgot password?</p>
        </div>



    
    

        <div class="button q-pt-xl text-center">
            <q-btn type="submit" class="btn q-py-sm q-px-xl">Login</q-btn>
        </div>
    </form>

    <p class="text-dark q-pb-xl text-center">
      Don’t have an account?
      <q-btn flat to="/register" class="text-primary"> Sign Up</q-btn>
    </p>
  </div>
</template>

<script>
import { useQuasar, QSpinnerFacebook } from 'quasar'
import { onBeforeUnmount } from 'vue'
// import { useQuasar } from 'quasar'
export default {
  setup () {
        
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
      showLoading () {
        $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: 'primary',
          spinnerSize: 140,
          backgroundColor: '#ca7c06',
          message: 'Some important process is in progress. Hang on...',
          messageColor: 'black'
        })

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 3000)
      },

      onMainClick () {
        console.log('Clicked on main button')
      },

      onItemClick () {
        console.log('Clicked on an Item')
      },
    }
  },
    data(){
         return {
            resp: '',
            errors: [],

             form :{
                 email: '',
                 password:'',
             }
         }
    },
     methods:{
       login: function() {
        // console.log('working');
        let email = this.form.email
        let password = this.form.password


        // console.log(email, password)
        // this.$store.dispatch('login', { email, password })

        this.showLoading()
        this.$store.dispatch('login', { email, password }).then(() =>{
          this.showLoading()
          this.resp = "Logged In Successfully"
            this.$q.notify({
            message: this.resp,
            color: 'primary',
          })
           this.$router.replace('/dashboard')
        }).catch(() => {
            // console.log(this.$store);

            const mesg = "Please Recheck Credentials"
             this.errors.push(mesg)
            setTimeout(()=>{
                this.errors.pop()
                // this.$router.push('/login')
                  
              }, 2000)
          })
      },
     },
    //  mounted(){
    //     console.log(this.$store);
    //     console.log(JSON.parse(localStorage.getItem('vuex')));
    //     let cart = JSON.parse(localStorage.getItem('vuex'));
    //     console.log(cart.Cart.cart)
    //     cart.Cart.cart = []
    //     // while(cart.Cart.cart.length > 0) {
    //     //  cart.Cart.cart.pop();
    //     // }

    //     console.log(cart.Cart.cart)
    //     // localStorage.setItem('vuex', cart.Cart.cart)
    //     localStorage.setItem('vuex', [])
    // },
}
</script>

<style scoped>
p{
  margin-bottom: 4px;
}
.login-text{
  margin-top: -10px;
}

.top-text{
  font-size: 1rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  padding-top: 5rem;
  width: 70%;

}

.forgot {
  display: flex;
  justify-content: flex-end;
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
  /* background: linear-gradient(121.81deg, #2b945b 20.1%, #8bc34a 131.87%); */
  background-color: #fff;
  /* padding: 16px 24px 16px 24px; */
  margin: 1rem;
  border-radius: 60px;
  border: 1px solid #2b945b;
  font-size: 1.3rem !important;
  color: #2b945b;
  margin: 0.55rem 0;
  padding: 1rem;
  width: 60%;
  /* font-size: 1.6rem; */
}

.eight h3 {
  text-align: center;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bold;
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
  /* background-color: #f8f8f8; */
}

.log{
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 2.5rem auto;
}

.log .wrapp{
    display: flex;
    align-items: center;
    background: #FFFFFF;
    width: 100%;
    box-shadow: 18.587px 18.587px 37.1739px rgba(211, 209, 216, 0.25);
    border-radius: 28.5px;
    /* align-items: center; */
    /* justify-content: center; */
    padding: 0 1rem;
    /* margin:0 1rem ; */
}
/* .log .wrapp .go{
  height: 30px;
} */
.log .wrapp i{
    font-size: 2rem;
}
.log .wrapp img{
    width: 20px;
    height: 20px;
}
@media(max-width:500px){
.log .wrapp p{
    font-size: 11px;
}

}

.ri-facebook-box-fill{
    color: #4267B2;
}


.ri-google-fill{
    color: #fbbc05;
}

.log .wrap p{
    margin: 0 1rem ;
}

.flexx{
    display: flex;
    justify-content: space-between;
}

.q-tab{
    width: 50% !important;
}

@media (max-width: 400px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .log{

    width: 100%;

}

.resp{
  padding: 1rem;
  border-radius: 8px;
  font-size: 12px;
}
}
</style>