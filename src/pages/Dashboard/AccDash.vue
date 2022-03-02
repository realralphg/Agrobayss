<template>
<div class="wrapper">
    <div class="holder container">
        <h4 class="q-py-md">Overview</h4>

        <div class="add">
                <div class="hol">
                    <i class="ri-folder-2-fill text-primary"></i>
                    <div class="det">
                        <h6 class="text-weight-bold">Address</h6>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>
                </div>

                <div class="hol">
                    <i class="ri-database-2-fill text-primary"></i>
                    <div class="det">
                        <h6 class="text-weight-bold">State</h6>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>
                </div>

                <div class="hol">
                    <i class="ri-calendar-fill text-primary"></i>
                    <div class="det">
                        <h6 class="text-weight-bold">Country</h6>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>
                </div>
        </div>

        <div class="barchart">
            <BarChart/>
        </div>
    </div>
</div>
  
</template>

<script>
import BarChart from '../../components/dashboard/BarChart.vue'
export default {
components:{
    BarChart
}
}
</script>

<style scoped>

p{
    margin-bottom: 0;
}

.ri-user-fill{
    font-size: 5rem;
}
.wrapper{
    background: #e5e5e5;
    padding: 5rem 0;
}


.add, .account{
    margin: 2rem 0;
    padding: 2rem 0;
}

.add{
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 3rem;
    align-items: center;
    padding: 3rem;
}


.add .hol{
    display:flex;
    /* grid-template-columns: repeat(2, 1fr); */
    gap: 3rem;
    align-items: center;
    padding: 3rem;
    margin: 0 1rem;
    background: #fff;

}

.btns{
    display: flex;
    gap: 2rem;
    align-items: center;
}

.add i{
    font-size: 2rem;
    background: #f8f8f8;
    border-radius: 50%;
    /* padding: .75rem; */
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>