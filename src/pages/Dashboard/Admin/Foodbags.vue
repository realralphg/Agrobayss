<template>
  <div class="hold container">
    <form @submit.prevent="createItem">
      <!-- <div class="row">
                <input v-model="form.name" type="text" id="fancy-text"/>
                <label for="fancy-text">Name</label>
            </div> -->
      <div class="row">
        <input v-model="form.plan_id" type="number" id="fancy-text" />
        <label for="fancy-text">ID</label>
      </div>
      <div class="row">
        <input v-model="form.title" type="text" id="fancy-text" />
        <label for="fancy-text">Title</label>
      </div>

      <div class="row">
        <textarea v-model="form.description" id="fancy-textarea"></textarea>
        <label for="fancy-textarea">Description</label>
      </div>

      <button type="submit">Submit</button>
    </form>
    <h1 class="text-h5 q-py-xl">
      Vue 3 jQuery DataTable Example Tutorial - Tutsmake.com
    </h1>
    <!-- {{users}} -->

    <table class="table table-hover table-bordered" id="example">
      <thead>
        <tr>
          <th class="form-control">ID</th>
          <th class="form-control">Title</th>
          <th class="form-control">Description</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="user in users" :key="user.id">
                {{user}}
                <td>{{user.id}}</td>
                <td>{{user.title}}</td>
                <td>{{user.description}}</td>
                <td>{{user.created_at}}</td>
                <td>{{user.updated_at}}</td>
            </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
import helpers from "../../../plugins/helpers";
//Bootstrap and jQuery libraries
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import { api } from "boot/axios";
export default {
  mounted() {
    //API Call
    // api.get("admin/categories/fruitbay")
    // .then((res)=>
    // {
    //     console.log(res.data.response.items)
    //   this.users = res.data.response.items.data;
    //   setTimeout(function(){
    //   $('#example').DataTable(
    //       {
    //         pagingType: 'full_numbers',
    //         pageLength: 5,
    //         processing: true,
    //         // dom: 'Bfrtip',
    //         // buttons: ['copy', 'csv', 'print'
    //         // ]
    //       }
    //   );
    //   },
    //     1000
    //     )
    // })
    $("#example").DataTable({
      ...helpers.ajaxData("admin/foodbags"),
      dom: "Bfrtip",
      buttons: ["copy", "csv", "print", "add", "Update", "delete"],

      columns: [
        { data: "plan_id", name: "plan_id" },
        { data: "title", name: "title" },
        { data: "description", name: "description" },
      ],
    });
  },
  data() {
    return {
      users: null,
      form: {
        plan_id: "",
        title: "",
        description: "",
      },
    };
  },

  methods: {
    async createItem() {
      await api.post("admin/foodbags", this.form).then(() => {
        // this.$router.replace('/foodbag')
        this.$router.push("/admin/foodbags");
      });
      console.log(resp);
      this.form = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.hold {
  padding: 10rem;
}

$custom-easing: cubic-bezier(1, 0.1, 0, 0.9);
$blue: #2b945b;
$darkBlue: #01579b;
$gray: #ccc;
form {
  padding: 10rem;
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  h1 {
    padding-bottom: 10px;
    margin-bottom: 25px;
    font-family: "Open Sans";
    font-weight: 100;
    text-align: center;
    color: $blue;
    border-bottom: 1px solid $gray;
  }
  .row {
    margin-bottom: 25px;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  input[type="text"],
  input[type="password"],
  textarea,
  input[type="number"] {
    width: 100%;
    height: 40px;
    padding: 10px 10px 10px 90px;
    box-sizing: border-box;
    border: 1px solid $gray;
    color: #333;
    border-radius: 3px;
    transition: all 0.3s $custom-easing;
  }

  textarea {
    height: auto;
    min-height: 200px;
    padding: 50px 10px 10px 10px;
  }

  input[type="text"] + label,
  input[type="password"] + label,
  textarea + label,
  input[type="number"] + label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    font-weight: bold;
    width: 80px;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: white;
    background: $blue;
    border-radius: 3px 0 0 3px;
    transition: all 0.3s $custom-easing;
    transform: translateZ(0) translateX(0);
  }

  textarea + label {
    width: 100%;
    border-radius: 3px 3px 0 0;
  }

  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="number"]:focus + label {
    padding-left: 10px;
  }

  textarea:focus {
    padding-top: 10px;
  }

  input[type="text"]:focus + label,
  input[type="password"]:focus + label,
  input[type="number"]:focus + label {
    transform: translateZ(0) translateX(-100%);
  }

  textarea:focus + label {
    transform: translateZ(0) translateY(-100%);
  }

  input[type="checkbox"],
  input[type="radio"] {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
  }

  input[type="radio"] + label {
    position: relative;
    display: inline-block;
    overflow: hidden;
    text-indent: -9999px;
    background: $gray;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.3s $custom-easing;
    &:before {
      content: "";
      position: absolute;
      display: block;
      height: 10px;
      width: 10px;
      top: 50%;
      left: 50%;
      background: white;
      border-radius: 100%;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.3s $custom-easing 0.1s;
      transform: translateZ(0) translate(-50%, -50%) scale(0);
    }
  }

  input[type="radio"]:checked + label {
    background: $blue;
    &:before {
      transform: translateZ(0) translate(-50%, -50%) scale(1);
    }
  }

  input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    overflow: hidden;
    text-indent: -9999px;
    background: $gray;
    width: 60px;
    height: 30px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s $custom-easing;
    &:before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: $blue;
      border-radius: 100px;
      transition: all 0.3s $custom-easing 0.1s;
      transform: translateZ(0) scale(0);
    }
    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      display: block;
      height: 26px;
      width: 26px;
      background: white;
      border-radius: 100%;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
      transition: all 0.3s $custom-easing;
      transform: translateZ(0) translateX(0);
    }
  }

  input[type="checkbox"]:checked + label {
    background: $blue;
    &:after {
      left: calc(100% - 28px);
      transform: translateZ(0);
    }
  }

  button {
    position: relative;
    overflow: hidden;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: white;
    border: none;
    background: $blue;
    border-radius: 3px;
    transition: all 0.3s $custom-easing;
    transform: translateZ(0) translateX(0);
    z-index: 2;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: $darkBlue;
      height: 100%;
      width: 100%;
      border-radius: 3px;
      transition: all 0.3s $custom-easing;
      transform: translateZ(0) scale(0);
      z-index: -1;
    }
    &:hover,
    &:focus {
      &:before {
        transform: scale(1);
        transition: all 0.3s $custom-easing;
      }
    }
  }
}
</style>
