<template>
  <div class="boxes q-my-xl">
    <div class="boxes-wrap container">
      <div class="box">
        <p>AgroFoods</p>
      </div>
      <div class="box">
        <p>AgroFarms</p>
      </div>
      <div class="box">
        <p>AgroTech</p>
      </div>

      <div class="box">
        <p>AgroInvest</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.boxes-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.boxes-wrap .box {
  height: 100%;
  border: 2px solid #2b945b;
  padding: 0.45rem 1.5rem;
  margin: 1rem;
}
.boxes-wrap .box p {
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
  margin: 0 !important;
  color: #2b945b;
}
</style>
