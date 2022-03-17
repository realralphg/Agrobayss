<template>

<div class="wrapper">
    <!-- {{choosePlan}} -->
    <div class="hold">
        <h2 class="text-primary">{{choosePlan.plan.title}} Foodbags</h2>
        <small>Pick your favourite yummy combination</small>
    </div>
    <!-- {{choosePlan.plan}} -->


    <div class="plan-wrap">
        <div class="display">
            <div class="holder">
                <!-- <div class="each">
                   <h4>{{choosePlan.plan.food_bag}}</h4>
                   <p class="text-primary q-mt-lg">{{plan.description}}</p>
                </div> -->
                <div class="desc">
                    <!-- <div class="img">
                        <q-btn>
                    </div> -->
                    <img class="foodb" :src="choosePlan.plan.image_url" />

                    <div v-for="foodbag in choosePlan.plan.food_bag" :key="foodbag.id" class="goobag">
                        <h5 class="text-primary q-pa-lg text-center">{{foodbag.title}}</h5>
                        <ul>
                            <li v-for="item in foodbag.foods" :key="item.id" class="items">
                                <!-- <p>{{item.image_url}}</p> -->
                                <div class="item-wrap">
                                    <img class="item-img" :src="item.image_url" alt=""> 

                                    <div class="hold">
                                        <p class="text-primary">{{item.name}}</p>
                                        <strong class="text-black">{{item.weight}}</strong>
                                    </div>  
                                </div>
                            </li>

                        </ul>
                        <q-btn class="bg-primary q-py-sm q-px-lg q-ma-xl text-white" @click="choosebag(foodbag.id)">Choose Foodbag</q-btn>

                    </div>
                   
                </div>
                <!-- <q-btn @click="choosePlan(plan.id)" class="q-px-xl text-white bg-primary q-py-sm">Choose Plan</q-btn> -->
            </div>
            

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
    ...mapGetters(['choosePlan']),
    ...mapGetters(['chooseBag']),
    ...mapGetters(['msg']),
    },

    methods:{
        choosebag(id){
            console.log(id)
             this.$store.dispatch('chooseBag', {id}).then(()=>{
                this.showLoading()
                this.$q.notify({
                message: this.msg,
                color: 'primary',
               })
            })
        }
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
p{
    margin-bottom: 0;
}
.plan-wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    padding-bottom: 5rem;

}

/* 
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
    display: flex;
    gap: 2rem;
    align-items: center;
}

.display .each:hover{
    background: #2b945b;

}

.display .each:hover h4{
    color: #fff;
}

.display .each:hover p{
    color: #fff !important;
} */


/* .item-img{
    width: 80px;
    height: 80px;
} */
.goobag{
    width: 100%;
}
.desc{
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding: 5rem 0;
}
.desc ul{
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
/* gap: 2rem; */
}

.desc ul li{
    display: flex;
    /* align-items: center; */
    /* flex-direction: column; */
    /* justify-content: center; */
    gap: 1rem;
    width: 250px;
}

.desc img.foodb{
    width: 40%;
}

.desc .item-wrap{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 1rem;
}

.items{
background: #e5e2e2;
display: flex;
flex-direction: column;
align-items: flex-start;
position: relative;
cursor: pointer;
position: relative;
min-width: 100px;
min-height: 100px;
gap: 1rem;
margin:1rem;
padding: 1rem;
}

.items img{
width: 80px;
height: 80px;
}

/* .desc .item-wrap{
    display: flex;
    gap: 1rem;
} */
</style>