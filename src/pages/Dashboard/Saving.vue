<template>



<div class="wrapper container">

    <div class="btn">
        <q-btn class="q-px-lg q-my-sm bg-primary text-white" to="new">
            New Saving

        </q-btn>
    </div>
    <div class="table">
        <FruitbayCategory/>
        <Tabulator/>
    </div>
    

</div>
  
</template>

<script>

import FruitbayCategory from '../../components/dashboard/FruitbayCategory.vue'
import Tabulator from '../../components/dashboard/Tabulator.vue'
export default {
components:{
    FruitbayCategory, Tabulator
}
}
</script>

<style scoped>
.wrapper{
    padding: 6rem 3rem;
}

.btn{
    display: flex;
    justify-content: flex-end;
}

</style>