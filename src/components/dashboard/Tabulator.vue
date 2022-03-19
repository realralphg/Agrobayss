<template>
  <div class="tabulator-responsive-collapse" ref="table"></div>
</template>

<script>
// import {Tabulator} from 'tabulator-tables';
import { ref } from 'vue'
import {TabulatorFull as Tabulator} from 'tabulator-tables'; 
import "tabulator-tables/dist/css/tabulator.css"
import 'tabulator-tables/dist/css/tabulator_bootstrap4.css'
// import  "vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4";
export default {
    setup(){
         return{
         tabulator: null,
         tableData : [{id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1},
            {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true},
            {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true"},
            {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980"},
            {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999"},
            {id:6, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1},]
        }
    },
    watch:{
    //update table if data changes
    tableData:{
      handler: function (newData) {
        this.tabulator.replaceData(newData);
      },
      deep: true,
    }
    },
    mounted(){
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      reactiveData:true, //enable data reactivity
      layout:"fitColumns",
      responsiveLayout:"true",  //hide columns that dont fit on the table
      fitColumns:true,
      tooltips:true,            //show tool tips on cells
      addRowPos:"top",          //when adding a new row, add it to the top of the table
      history:true,    
      responsiveLayout:true,         //allow undo and redo actions on the table
      pagination:"local",       //paginate the data
      paginationSize:7,         //allow 7 rows per page of data
      paginationCounter:"rows", //display count of paginated rows in footer
      movableColumns:true,      //allow column order to be changed
      resizableRows:true, 
      initialSort:[             //set the initial sort order of the data
        {column:"name", dir:"asc"},
      ],
      columns: [{ title: "Name", field: "name", width: 150 },
        { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
        { title: "Favourite Color", field: "col" },
        { title: "Date Of Birth", field: "dob", hozAlign: "center" },
        { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
        { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" 
        }], //define table columns
    });
  },
}
</script>

<style scoped>

</style>