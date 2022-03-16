<template>

<div class="wrapper">
    <!-- {{choosePlan}} -->
    <div class="hold">
        <h2 class="text-primary">Foodbags</h2>
        <small>Pick your favourite yummy combination</small>
    </div>



    <div class="plan-wrap">
        <div class="display">
            <div class="holder">
                <!-- <div class="each">
                   <h4>{{choosePlan.plan.food_bag}}</h4>
                   <p class="text-primary q-mt-lg">{{plan.description}}</p>
                </div> -->
                <div class="desc">
                    <img class="foodb" src="/images/agrofood2.png" />
                   <ul v-for="item in choosePlan.plan.food_bag[0].foods" :key="item.id" class="items">
                       <li>
                           <div class="item-wrap">
                               <div class="hold">
                                  <img class="item-img" :src="item.image_url" alt=""> 
                                   <p class="text-primary">{{item.name}}</p>
                                   <strong class="text-black">{{item.weight}}</strong>
                               </div>  
                           </div>
                       </li>
                   </ul>
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
    computed: {
    ...mapGetters(['choosePlan']),
    },
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

.desc{
    display: flex;
    align-items: center;
    /* justify-content: center; */
}


.desc ul li{
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    justify-content: center;
    gap: 1rem;
}

.desc img.foodb{
    width: 40%;
}

.desc .item-wrap{
    display: flex;
    align-items: center;
    gap: 3rem;
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
margin: 0 1rem;
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