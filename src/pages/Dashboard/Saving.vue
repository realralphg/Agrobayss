<template>



<div class="wrapper container">

    <div class="btn">
        <q-btn class="q-px-lg q-my-sm bg-primary text-white" to="new">
            New Saving

        </q-btn>
    </div>
    <Table/>

</div>
  
</template>

<script>

import Table from '../../components/dashboard/Table.vue'
export default {
components:{
    Table
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