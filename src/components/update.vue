<template>
        <Header />

 <h1>Hello,Wellcome On Update Resturant page</h1>

</template>

<script>
import Header from './Header.vue'
export default {
    name:'update' ,
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