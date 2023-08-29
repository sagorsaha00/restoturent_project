<!-- eslint-disable vue/require-v-for-key -->
<template>
        <Header />

 <h1>Hello {{name}} ,Wellcome On Home page</h1>
 <table border="1">
    <tr>
        <td>id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
    </tr>
    
    <tr v-for="item in resturant" :key="item.id">
        <td> {{ item.id }} </td>
    <td> {{ item.name }} </td>
    <td> {{ item.address }} </td>
    <td> {{ item.contact}} </td>
    </tr>
 
   
 </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'Home' ,
    data(){
        return{
            name:'',
            resturant:[],
        }
    },
    components:{
        Header
    },
    async mounted() {
   let user = localStorage.getItem("user-info")
   this.name = JSON.parse(user).name
   if(!user)

   {
      this.$router.push({name:'signup'})
   }
   let result =await axios.get("http://localhost:3000/resturant");
   console.warn(result);
   this.resturant = result.data
 }
}
</script>

<style>
 h1{
    margin-top: 120px;
 }

 td{
    width: 170px;
    height: auto;
 }
</style>