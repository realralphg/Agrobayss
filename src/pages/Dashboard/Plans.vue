<template>

<div class="wrapper">
    <!-- {{plans}} -->
    <div class="hold">
        <h2 class="text-primary">Food Savings</h2>
        <small>Select food Plan and saving on the go!</small>
    </div>



    <div class="plan-wrap">
        <div v-for="plan in plans" :key="plan.id" class="display">
            <div class="holder">
                <div class="each">
                <!-- <h4>₦300 Plan</h4> -->
                <h4>{{plan.title}}</h4>
                <p class="text-primary q-mt-lg">{{plan.description}}</p>
                <!-- <p class="text-primary q-mt-lg">Choose a comfortable plan of ₦300 per which would sum up to ₦9,000 of 30 days saving. </p> -->
                </div>
                <q-btn @click="choosePlan(plan.id)" class="q-px-xl text-white bg-primary q-py-sm">Choose Plan</q-btn>
            </div>

            <!-- <div class="holder">
                <div class="each">
                <h4>₦500 Plan</h4>
                <p class="text-primary q-mt-lg">Choose a comfortable plan of ₦500 per which would sum up to ₦ 15,000 of 30 days saving.</p>
                </div>
                <q-btn class="q-px-xl text-white bg-primary q-py-sm">Choose Plan</q-btn>
            </div> -->

            <!-- <div class="holder">
                <div class="each">
                <h4>₦1000 Plan</h4>
                <p class="text-primary q-mt-lg">Choose a comfortable plan of ₦1000 per which would sum up to ₦30,000 of 30 days saving.</p>
                </div>
                <q-btn class="q-px-xl text-white bg-primary q-py-sm">Choose Plan</q-btn>
            </div> -->
            

        </div>

    </div>

    
</div>
  
</template>

<script>
import axios from 'axios'
import { api } from 'boot/axios'
import {mapActions, mapGetters} from 'vuex'
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
import { ref } from 'vue'
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
      showLoading () {
        $q.loading.show()

        // hiding in 2s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 4000)
      },
    }},
    computed: {
    ...mapGetters(['plans']),
    ...mapGetters(['msg']),
    },
      mounted(){
        const token = localStorage.getItem('token')
        this.$store.dispatch('getPlans', {token})
    },
    methods:{
        choosePlan(id){
            console.log(id)
            this.showLoading()
            this.$store.dispatch('choosePlan', {id}).then(()=>{
                this.showLoading()
                this.$q.notify({
                message: this.msg,
                color: 'primary',
               })

               this.$router.replace('/myplan')

            })
        }
    },
    // mounted(){
    //      this.showLoading()
    // }
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
p{
    margin-bottom: 0;
}
.plan-wrap{
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
    min-height: 250px;
    border-radius: 15px;
}

.display .holder{
    text-align: center;
    margin: 2rem 0;
}

.display .each:hover{
    background: #2b945b;

}

.display .each:hover h4{
    color: #fff;
}

.display .each:hover p{
    color: #fff !important;
}
</style>