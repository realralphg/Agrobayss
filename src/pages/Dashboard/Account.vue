<template>
<div class="wrapper">
    <div class="holder container">
        <div class="account">
            <div class="icon">
                <i class="ri-user-fill text-primary"></i>
            </div>

            <div class="details">
                <h6>
                    Lorem, ipsum dolor.
                </h6>

                <p>Lorem ipsum dolor sit amet.</p>
                <strong>0000000000</strong>
                <div class="btns q-my-sm">
                    <q-btn class="bg-primary q-px-lg text-white q-py-sm">Edit</q-btn>
                    <q-btn class="bg-dark q-px-lg q-py-sm text-white">Start a new saving</q-btn>
                </div>
            </div>
        </div>

        <div class="add">
                <div class="hol">
                    <i class="ri-home-line text-primary"></i>
                    <div class="det">
                        <h6 class="text-weight-bold">Address</h6>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>
                </div>

                <div class="hol">
                    <i class="ri-home-line text-primary"></i>
                    <div class="det">
                        <h6 class="text-weight-bold">State</h6>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>
                </div>

                <div class="hol">
                    <i class="ri-home-line text-primary"></i>
                    <div class="det">
                        <h6 class="text-weight-bold">Country</h6>
                        <small>Lorem ipsum dolor sit.</small>
                    </div>
                </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {

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
    background: #fff;
    margin: 2rem 0;
    padding: 2rem 0;
}

.account{
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
}

.btns{
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
    /* width: 100%; */
}

.add i{
    font-size: 2rem;
}


@media(max-width:400px){
    .btns{
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: .85rem;
    }
}
</style>