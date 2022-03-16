<template>
<div class="hold">
    <div class="container q-py-xl">
            <q-btn class="back-button bg-positive"
            to="/fruits"
            flat
            color="primary"
            icon="arrow_back"
            />

    </div>
    <div class="wrapper container">
        
        <div class="holder each">
            <div class="img">
                <img src="" alt=""> <span class="text-primary">Name</span>
            </div>
            <p class="text-primary">Price</p>
            <p class="text-primary">Quantity</p>
        </div>
        <!-- {{cartt}} -->
        <!-- {{userDetails}} -->
        <div  v-for="item in cartt" :key="item.fruit.id" class="each">
            <div class="holder">
                <div class="img">
                    <img src="" alt=""> <span>{{item.fruit.name}}</span>
                </div>
                <p>{{item.fruit.price}}</p>


                <div>
                    <div class="con">
                        <!-- <q-btn class="bot"
                            disable 
                            round
                            color="primary"
                            flat
                            size="10px"
                            label="-"
                            @click="minus(item)"
                        /> -->
                        <span class="text-caption quan">{{item.qty}}</span>
                        <!-- <q-btn
                            round
                            size="10px"
                            class="bot plus-button" 
                            color="primary"
                            label="+"
                            @click="add(item)"
                            disable
                        /> -->
                    
                    </div>                          
                </div>

            </div>

                

        </div>

        <div class="total">
            <div class="holder-total">
                <p>Amount of items </p>
                <span>{{cartt.length}}</span>
            </div>
            <div class="holder-total">
                <p>Total Amount </p>
                <span>{{Math.abs(cashh)}}</span>
            </div>
        </div>

        <p class="text-weight-bold deli text-dark q-ml-sm">
         Delivery method.
        </p>
        <div class="deliv">
            <q-tabs
            v-model="tab"
            dense
            class="text-grey bgp"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
            inline-label
            >
            <q-tab icon="local_shipping" class="small" name="delivery" label="Door Delivery" />
            <q-tab icon="directions_walk"  class="q-ml-sm small" name="pickup" label="Pick Up" />
            <!-- <q-tab name="movies" label="Movies" /> -->
            </q-tabs>
            <q-tab-panels class="q-pt-lg" v-model="tab" animated>
            <q-tab-panel class="tabb no-padding" name="delivery">
                <p class="text-primary">{{ error }}</p>
                <div class="input-wrap">
                <label class="text-primary" style="font-size: 1rem;" for="">Address</label>
                <div class="input">
                    <input class="val" :disabled="this.disabled" v-model="this.address" type="text" placeholder="Barnawa close, block A flat 6. Kaduna" required/>
                    <q-btn class="bg-primary q-py-sm q-my-md btnn q-px-xl text-white" @click="change">Change delivery address</q-btn>
                    </div>
                </div>
            </q-tab-panel>

            <q-tab-panel name="pickup">
            </q-tab-panel>
               <h6>Office:</h6>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique vitae iusto ipsam.</p>
            </q-tab-panels>
        </div>
        <q-btn @click="payWithPaystack" class="bg-primary btn text-white q-px-xl q-py-sm">Pay</q-btn>

    </div>
</div>
  
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import {mapActions, mapGetters} from 'vuex'
export default {
     data(){
         return{
          tab: ref('delivery'),
          disabled: true,
          address: 'Barnawa close, block A flat 6. Kaduna',
          userDetails: JSON.parse(localStorage.getItem('userdet')),
            // cartShop: JSON.parse(localStorage.getItem('vuex')),

         }
     },

     computed:{
      ...mapGetters(['cartt']),
      ...mapGetters(['cashh']),

     },
     methods:{
        payWithPaystack(){
            console.log(this.cartt[0].fruit.id)
            let handler = PaystackPop.setup({
            key: 'pk_test_36a1170f08ef500b7c55315ea6792864953b4ca0', // Replace with your public key
            // email: document.getElementById("email-address").value,
            email: this.userDetails.email,
            amount: this.cashh,
            // amount: document.getElementById("amount").value * 100,
            ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            // label: "Optional string that replaces customer email"
            onClose: function(){
            alert('Window closed.');
            },
            callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
            }
        });
        handler.openIframe();

        },

        change(){
            let toggleDisable = !this.disabled
            this.disabled = toggleDisable
        }
    },

    //  mounted(){
    //     console.log(this.$store);
    //     console.log(this.cartShop.Cart.cart.length)
    //     this.totalFruit = this.cartShop.Cart.cart.length
    //     let totalAmt = 0
    //     this.cartShop.Cart.cart.map(e=> { console.log(e.fruit.price)
    //         totalAmt += parseInt(e.fruit.price)
    //     })
    //     this.totalAmt = totalAmt
       
    // },
}
</script>

<style scoped>

.hold{
    padding-top: 7rem;
}
p{
    margin-bottom: 0;
}

.holder{
    display: flex;
    align-items: center;
    gap: 3rem;
    justify-content: space-between;
}

.deliv{
    width: 60%;
}

.each{
    transition: all .5s ease-in-out;
    padding: 1.65rem;
    background: #fff;
    border-radius: 10px;
    height: 100%;
    margin: .75rem 0;
    width: 60%;
}
.each:hover{
    border: 1px solid #28AD62;
}
.wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #8DC34D21;
    border: 1px solid #28AD62;
    padding: 4rem 0;
}
.btnn{
    width: 50%;
}
.btn{
    display: grid;
    place-items: center;
    margin-top: 2rem;
}
.deli{
    margin-top: 3rem;
}
.con{
    display: flex !important;
    align-items: center;
    gap: 1rem;
}
.bgp {
    /* background: red !important; */
    padding: 0.1rem;
  margin: .5rem 0;
  /* background: rgba(236, 236, 236, 0.67); */
  border: 1px solid rgba(110, 110, 110, 0.2);
  box-sizing: border-box;
  border-radius: 27.5px;
  display: flex;
  align-items: center;
}

.small {
    font-size: 10px !important;
    line-height: 1.715em;
    font-weight: 500;
}
.q-tab--active{
    background-color: #2b945b;
    background: #2b945b;
    box-shadow: 0px 18px 40px rgba(211, 209, 216, 0.251);
    border-radius: 23.5px;
    padding: .25rem;
    color: #fff !important;
}


.q-tab__indicator {
    display: none;
}


.q-tab__indicator {
    display: none;
}

.input-wrap,
select {
  width: 100%;
}

.input-wrap .input {
  /* padding: 1rem; */
  background: transparent;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  font-size: 1rem;
}

.input-wrap .input input,
select {
  /* border: none; */
  border: 1px solid rgba(110, 110, 110, 0.2);
  padding: 1rem;
  /* background: transparent; */
  /* color: #959292; */
  width: 100%;
  border-radius: 9.4px;
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
.total{
    width: 60%;
}
.holder-total{
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all .5s ease-in-out;
    padding: 1.65rem;
    background: #fff;
    border-radius: 10px;
    /* height: 100%; */
    margin: 1.4rem 0;
    /* width: 60%; */
}

.holder-total:hover{
    border: 1px solid #28AD62;
}

@media(max-width:700px){
    body{
        font-size: 13px;
    }
    .each{
    width: 95%;
    font-size: 13px;
}
.deliv{
    width: 95%;
}
.total{
    width: 95%;
    font-size: 13px;
}
.holder-total{
    width: 100% !important;
}

}

@media(max-width:400px){
.btnn{
    width: 70%;
    font-size: 12px;
    margin: 0 auto;
    padding:.55rem 1rem !important;
}
}
</style>