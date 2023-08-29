<template>
        <Header />

 <h1>Hello,Wellcome On Add Resturent page</h1>
 <form class="add"> 

   <input type="text" placeholder="enter name" name="name">
   <input type="text" placeholder="Enter Address" name="address">
   <input type="text" placeholder="enter Contact" name="Contact">
   <button >Add Resturant </button>
 </form>

</template>

<script>
import Header from './Header.vue'
export default {
    name:'Add',
    components:{
        Header
    },
    mounted() {
   let user = localStorage.getItem("user-info")
   if(!user)

   {
      this.$router.push({name:'signup'})
   }
 }
}
</script>

<style>
 h1{
    margin-top: 120px;
 }
</style>