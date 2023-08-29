<template>

<header>
   
        <a href="" class="logo"> Logo </a>

      <div class="navigation">

       <router-link to="/">  Home</router-link>   
       <router-link to="/add"> Add Resturant</router-link>     
       <router-link to="/update">Update Resturant  </router-link>     
     <a  v-on:click="logout" href="">Logout</a>
 
      </div><router-link to=""></router-link>
    </header>
        
    
</template>

<script>
    export default{
        name:'Header',
        methods:{
          logout()
          {
            alert('do you went logout')
            localStorage.clear();
            this.$router.push({name:'Login'})
          }
        }
    }
</script>


<style>
 
 header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  background: transparent;
  display: flex;
  justify-content: space-around;
  text-align: center;
 }
.logo{
  font-size: 30px;
    text-decoration: none;
    font-family: tahoma;
    color: black;
    margin-left: -150px;

}
.navigation a{
  margin-left: 30px;
  text-decoration: none;
  font-family: tahoma;
   color: black;
   margin-right: 30px;
   text-align: center;
   position: relative;
   
}
.navigation a::after {
   content: '';
   position: absolute;
   width: 100%;
   height: 3px;
   background: rgb(6, 6, 6);
   left: 0;
   bottom: -6px;

 
   border-radius: 4px;
   transform: scaleX(0);
   transition: transform .5s;
    
}
.navigation a:hover::after{
    transform: scaleX(1);
    transform-origin: left;
}
</style>