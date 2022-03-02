<template>
<div class="container">
  <BarChart :chartData="testData" />
</div>
</template>

<script>
import { defineComponent } from 'vue';
import { DoughnutChart, BarChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart, BarChart },
  setup() {
    const testData = {
      labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      label: 'Bar Chart',
      datasets: [
        {
          data: [30, 40, 60, 70, 5,100, 30, 50, 40, 20, 11, 12],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#2b945b', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED','#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { testData };
  },
});
</script>