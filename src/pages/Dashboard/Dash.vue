<template>

<div class="wrapper">
    <div class="hold  q-py-xl">
        <h5 class="text-primary">Welcome</h5>
        <p class="text-primary text-weight-bold">{{userDetails.name}}</p>
    </div>

    <!-- {{chooseDays}} -->
    <!-- {{userPlan}} -->
    <!-- {{progress}} -->
    <!-- <h6 class="bg-grey-9 q-pa-md text-primary" v-if="chooseDays.days_left === 0">{{msg}}</h6> -->
    <!-- <div >
        <img :src="item.image_url" alt="">

    </div> -->

    <!-- <div class="display">
        <div class="holder">
            <div class="each">
               <h6>₦300 Plan</h6>
               <small>Total Balance</small>
               <h3 class="text-weight-bold">#5000</h3>

               <p class="text-primary q-mt-lg">Choose a comfortable plan of ₦300 per which would sum up to ₦9,000 of 30 days saving. </p>
            </div>
            <q-btn class="q-px-xl text-white bg-primary q-py-sm">Choose Plan</q-btn>
        </div>

        <div class="holder">
            <div class="each">
               <h6>₦300 Plan</h6>
               <small>Total Balance</small>
               <h3 class="text-weight-bold">#5000</h3>
            </div>
            <q-btn class="q-px-xl text-white bg-primary q-py-sm">Choose Plan</q-btn>
        </div>

        <div class="holder">
            <div class="each">
                <q-btn round class="btn" icon="add" />
               <p class="q-mt-lg text-primary">Click here to add a new plan</p>
            </div>
            <q-btn class="q-px-xl text-white bg-primary q-py-sm">Choose Plan</q-btn>
        </div>
        

    </div> -->


    <div class="main">
        <div class="main-left">
            <q-circular-progress
          show-value
          font-size="20px"
          :value='value'
          size="240px"
          :thickness="0.22"
          color="teal"
          track-color="grey-3"
          class="q-ma-md"
    >
      {{ value }}%
    </q-circular-progress>



        </div>

        <div class="main-right">

            <h3 class="text-primary text-weight-bold">{{userPlan.plan.title}}</h3>
            <div class="twos q-pt-lg q-pb-sm">
                <div class="lef">
                    <p class="text-info">Paid Days</p>
                    <!-- <small class="text-primary text-weight-bold">{{chooseDays ? chooseDays.paid_days : choosePlan.paid_days}}</small> -->
                    <small class="text-primary text-weight-bold">{{userPlan.paid_days}}</small>
                </div>
                <div class="righ">
                    <p class="text-info">Days Left</p>
                    <!-- <small class="text-primary text-weight-bold">{{chooseDays ? chooseDays.days_left : choosePlan.days_left}}</small> -->
                    <small class="text-primary text-weight-bold">{{userPlan.days_left}}</small>
                </div>
            </div>
             <div class="twos q-pt-lg q-pb-sm">
                <div class="bott q-mt-md">
                    <p class="text-info">Plan Duration</p>
                    <small class="text-primary text-weight-bold">{{userPlan.plan.duration}}</small>
                </div>
                <div class="righ">
                    <p class="text-info">Amount left to be paid</p>
                    <!-- <small class="text-primary text-weight-bold">{{chooseDays ? chooseDays.total_left : choosePlan.total_left}}</small> -->
                    <!-- <small class="text-primary text-weight-bold">{{chooseDays? chooseDays.total_left : choosePlan.total_left}}</small> -->
                    <small class="text-primary text-weight-bold">{{userPlan.total_left}}</small>

                </div>
            </div>
            

            <div class="btns">
                <q-btn class="q-py-md q-mt-xl q-px-lg" @click="foodbag" color="primary" icon="visibility" label="View Foodbags" />
                <q-btn class="q-py-md q-mt-xl q-px-lg" to="/savings" color="primary" icon="receipt" label="View Savings" />
                <q-btn class="q-py-md q-mt-xl q-px-lg" @click="prompt = true"  color="primary" icon="add" label="New Savings" />         
            </div>


            <q-dialog v-model="prompt" persistent>
                <q-card style="min-width: 400px">
                    <q-card-section>
                    <div class="text-h6">How many days would you be saving for</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                    <!-- <p>{{subError}}</p> -->
                    <q-input type="number" dense v-model="days" @keyup.enter="prompt = false" />
                    </q-card-section>

                    <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn @click="submitDays" flat label="Finish" />
                    </q-card-actions>
                </q-card>
            </q-dialog>


        </div>
    </div>
</div>
  
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
export default {
    setup () {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()
    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
        userPlan : null,
      prompt: ref(false),
      days: ref(''),
      subError:'',
      showLoading () {
        $q.loading.show()

        // hiding in 2s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 4000)
      },
    }},
    data(){
        return{
            userDetails: JSON.parse(localStorage.getItem('userdet')),
            value: 0,
        }
    },
    computed: {
    ...mapGetters(['choosePlan']),
    ...mapGetters(['chooseDays']),
    ...mapGetters(['msg']),
    ...mapGetters(['progress']),
    ...mapGetters(['useer']),
        
  },
  created(){
      this.userPlan = this.chooseDays || this.choosePlan || this.useer.subscription
    //   let paidDays = this.chooseDays? this.chooseDays.paid_days : this.choosePlan.paid_days
      let paidDays = this.userPlan.paid_days
      let daysLeft = this.userPlan.days_left
    //   let daysLeft = this.chooseDays? this.chooseDays.days_left : this.choosePlan.days_left
    //   console.log(daysLeft)
      if(daysLeft === 0){
          this.value = 100
      }else{
          this.value = Math.floor(paidDays/daysLeft * 100) 
      }
    //   this.value = this.progress
     
    //  Math.floor(this.value)
    },

    methods:{
        foodbag(){
            this.showLoading()
            this.$router.replace('/foodbag')
        },
        submitDays(){
            const dayss = this.days
            console.log('submitted')
            if(dayss <= 0 ){
                this.$q.notify({
                message: 'You have to save for at least 1 day.',
                color: 'primary',
               })
                this.prompt = true
            } else if(dayss > (this.userPlan.plan.duration - this.userPlan.plan.paid_days)){
                this.$q.notify({
                message: `You cannot save for more than ${this.userPlan.plan.duration} days.`,
                color: 'primary',
               })
                // this.subError= `You cannot save for more than ${this.choosePlan.plan.duration} days.`
                this.prompt = true
            }else{
                this.$store.dispatch('days', {dayss}).then(()=>{
                this.showLoading()
                this.$q.notify({
                message: this.msg,
                color: 'primary',
               })
               setTimeout(function () {
                location.reload(true)
                }, 1500)
            }).catch((err) => console.log(err))
            this.days = ''
            this.prompt = false
            
            }
            
        }
    },
    mounted(){
    //     if(!this.choosePlan){
    //     this.$router.replace('/plans')
    // }
    console.log(this.choosePlan)
        console.log(this.$store)
    }
    
}
</script>

<style scoped>
h4{
    font-weight: 700;
    color: #2b945b;
}
.wrapper{
    padding: 7rem;
}
.hold{
    display: flex;
    align-items: center;
    gap: 1rem;
}
p{
    margin-bottom: 0;
}
.display{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    padding-bottom: 5rem;

}


.display .holder .each{
    padding: 2rem;
    border: 2px solid #2B945B;
    margin: 1rem 0;
    transition: all .5s ease-in-out;
    min-height: 200px;
    border-radius: 15px;
    background: url('/images/vec.png'), no-repeat bottom center;
}

.display .holder{
    text-align: center;
    margin: 2rem 0;
}

.display .each:hover{
    background: #2b945b;

}
.display .each h3,.display .each h6, .display .each small{
    color: #2b945b;
}
.display .each:hover h3,.display .each:hover h6, .display .each:hover small{
    color: #fff;
}

.display .each:hover p{
    color: #fff !important;
}
.btn{
    background-color: #2b945b;
    color: #fff;
}

.display .each:hover .btn{
    color: #2b945b;
    background: #fff;
}

.main{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
    align-items: center;
    background: #FFFFFF;
    padding: 3rem;
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    border-radius: 30px;
}

.main .left-right{
    border-left: 2px solid #e4e4e4;
}

.main .main-right .twos{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: center;
    border-bottom: 2px solid #e4e4e4;
}

.btns{
    display: flex;
    align-items: center;
    gap: 2rem;
}
</style>