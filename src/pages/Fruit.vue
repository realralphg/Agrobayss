<template>
<div class="holded container">
    <div class="kl">
        <q-btn class="back-button bg-primary text-white"
          to="/fruits"
          flat
          color=""
          icon="arrow_back"
        />

    </div>
<div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" :img-src="userr.img || sto.image"/>
      <!-- <q-carousel-slide :name="1" :img-src="`http://greyfoods.test/menu/${userr.img || sto.image}`"/> -->
      <!-- <q-carousel-slide :name="2" :img-src="postss[0][1].strCategoryThumb" />
      <q-carousel-slide :name="3" :img-src="postss[0][2].strCategoryThumb" />
      <q-carousel-slide :name="4" :img-src="postss[0][3].strCategoryThumb" /> -->
    </q-carousel>
  </div>
  <!-- <p class=" lead q-py-md">Rice and beef</p> -->
  <p class="lead q-py-md">{{userr.name || sto.name}}</p>

  <!-- <p>{{userr}}</p> -->
  <!-- <p>{{sto}}</p> -->
  

  <div class="det q-py-sm">
      <p class="price text-weight-bold">
          <!-- &#8358;<input type="text" v-model="this.amount" :placeholder="parseInt(sto.price) " style="border: none; width: 70px; text-align: center;"> -->
          &#8358;<span style="border: none; width: 70px; text-align: center;"> {{ this.amount }} </span>
      </p>

      <div class="con">
               <q-btn class="bot" 
               round
                color="primary"
                flat
                size="10px"
                label="-"
                @click="minus(this.price)"
               />
               <span class="text-caption quan">{{ this.noOfPlates }}</span>
               <!-- <input v-model="this.noOfPlates" class="text-caption quan"/> -->
               <q-btn
               round
                size="10px"
               class="bot plus-button" 
                color="primary"
                label="+"
                @click="add(this.price)"
               />
      </div>
  </div>
      <p class="text-caption text-primary">No. plates available: {{userr.quantity || sto.quantity}}</p>

  <div class="des q-py-md">
      <h4 class="des-title">Description</h4>
      <!-- <p class="q-my-lg">Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</p> -->
      <p class="q-my-xs">{{userr.des || sto.des}}</p>

  </div>

  <!-- <p>{{postss[0][1]}}</p> -->

  <div class="tops">
      <h6 class="des-title">Choice of toppings</h6>
      <div class="holder">
          <div class="dol"  :key="index" v-for="(item, index) in toppings">
              <div class="item">
                  <img :src="`${this.url + 'topping/' + item.topping_profile_url}`" alt="">
                  <!-- <img :src="`http://greyfoods.test/topping/${item.topping_profile_url}`" alt=""> -->
                  <!-- <p class="q-ml-lg">salad</p> -->
                  <p class="top-title q-ml-md">{{ item.name }}</p>
              </div>
              <div class="itemr">
                  <p class="top-title q-mr-md">&#8358;{{ item.price }}</p>
                  <input @click="checked(this.amount, item.price, index)" v-model="check[index]" type="checkbox" name="" id="">
                  <!-- <input @click="checked(index)" type="checkbox" name="" class="check"> -->
              </div>
              
          </div>
      </div>
  </div>
        <div class="th">
            <q-btn @click="addPlate(this.noOfPlates, this.amount)" no-caps class="btnn text-center text-white bg-primary q-mt-lg q-py-sm"> <i class="q-mr-lg res text-primary ri-restaurant-fill"></i>Add to plate</q-btn>
        </div>
</div>
  
</template>

<script>
import { ref } from 'vue'
import { api } from 'boot/axios'
import {mapGetters, mapActions} from 'vuex'


export default {
    data(){
        return {
            url: process.env.baseURL,
            availableQuantity: '',
            noOfPlates: '1',
            price: '',
            amount: '',
            toppings:[],
            check: {}
        }
    },
  setup () {
    return {
      slide: ref(1),
      sto: JSON.parse(localStorage.getItem('det')), 
      postss:[]
    }
  },
  created (){
      const {posts} = this.sto
    //   console.log(this.sto.name);
      this.price = this.sto.price
      this.amount = this.sto.price
      this.availableQuantity = this.sto.quantity
      this.postss.push(posts)
      this.getToppings()
  },
//   mounted:{
//       const get = JSON.parse(localStorage.getItem('det'))
//       console.log(get);
//   },
  computed:{
      ...mapGetters(['userr']),
      sum() {
          return this.amount = this.price
      }
      
  },
  methods:{
        ...mapActions(['topping', 'addOrder']),
        getToppings(){
            api.get('/api/topping').then((res) => {
                this.toppings = res.data.data;
                // console.log(res.data.data);
            }).catch((err) => {console.log(err)})
        },
      add(price) {
          ++this.noOfPlates
          console.log(price);
          this.amount = parseInt(this.amount) + parseInt(price)
        //   this.amount = parseInt(this.noOfPlates) * parseInt(this.price)
      },
      minus(price) {
          --this.noOfPlates
          this.amount = parseInt(this.amount) - parseInt(price)
        //   this.amount = parseInt(this.noOfPlates) * parseInt(this.price)
      },
    //   plate() {
    //     this.amount = this.price / this.noOfPlates
    //     this.$router.replace('/plate')
    //   },
    //   checked(amount, price) {          
    //         this.amount = parseInt(amount) + parseInt(price)
    //     //   if(this.check == true){
    //     //     console.log(price);
    //     //     this.amount = parseInt(this.amount) + parseInt(price)
    //     //   }
    //     //     this.amount = parseInt(this.amount) - parseInt(price)
    //   },
    checked(amount, price, key){

        // console.log(this.check)
        if(this.check[key] === !true || this.check[key] === undefined){
            this.amount = parseInt(this.amount) + parseInt(price)


        }else{
            this.amount = parseInt(this.amount) - parseInt(price)


        }
        
    },

      addPlate(noOfPlates, amount) {
          this.addOrder({ amount, noOfPlates }).then(() => {
                this.$router.replace('/plate')
          })
          console.log(noOfPlates);
      }
  }
}
</script>
<style scoped>
input[type="checkbox"]{
    cursor: pointer;
}

input[type='checkbox']{
  accent-color: #fe724c;
  color: #fff;
}
.quan{
        border: none;
    width: 10px;
    /* padding: 0 10px; */
    margin: 0 0.4rem;
}
.top-title{
    font-size: .8rem;
    font-weight: bold;
}
.des{
    font-size: .75rem;
}
.des-title{
    font-size: 1.1rem;
    font-weight: bold;
}
p{
    margin-bottom: 0;
}

.btnn{
  border-radius: 30px;
  font-size: 1rem;
  line-height: 123%;
  padding: 0.5rem 1.5rem 0.6rem 0.5rem;
}

.res{
    background: #fff;
    padding: .55rem;
    width: 40px;
    text-align: center;
    border-radius: 50%;
}
.sp{
    padding:.55rem 1rem;
    background: #fff;
    box-shadow: 0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
}
.th{
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.det{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 
.holder{
    display: grid;
    grid-template-columns: repeat(1,1fr);
    grid-template-rows: repeat(2,1fr);
} */


.dol{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
}

.item,.itemr{
    display: flex;
    align-items: center;
}

.item img{
    width: 50px;
    height: 30px;
}

.price{
    border: 1px solid #fe724c;
    padding: .2rem .4rem; 
    font-size: 1.rem;
    border-radius: 5px;
}

.bot{
    border: 1px solid #fe724c;

}

.lead{
    font-size: 1.4rem;
    font-weight: bold;
}

.con span{
    margin: 0 1rem;
}


.kl{
    padding: 6rem 0 !important;
}
@media(max-width: 500px){
  .btnn{

    width: 100%;
}
}
</style>