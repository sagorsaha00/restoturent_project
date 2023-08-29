<template>
   <img class="logo" src="../assets/14674.jpg" alt="">
   <h1> Sign up</h1>
<div class="regerster">

 <input type="text" v-model="name" placeholder="Enter Name">
 <input type="text" v-model="email" placeholder="Enter Email">
 <input type="password" v-model="password" placeholder="Enter password">
 <button v-on:click="signup"> Sign Up</button>

 <p>
   <router-link to="/login">Login</router-link>
 </p>
</div>


    
</template>

<script>
import axios from 'axios'
 export default {
    name:'signup',
    data() 
    { 
      return {
      name:'',
       email:'',
       password:''
    }
     
    },
    methods: {
   async signup() 
   {
      console.warn("signup",this.email,this.name,this.password)
      let result = await axios.post("http://localhost:3000/user",{
         name:this.name,
         email:this.email,
         password:this.password
      });
       console.log(result);
       if(result.status == 201)
    {
       localStorage.setItem("user-info",JSON.stringify(result.data))
       this.$router.push({name:'Home'})
    }
  }
 },
 mounted() {
   let user = localStorage.getItem("user-info")
   if(user)

   {
      this.$router.push({name:'Home'})
   }
 }
}


</script>


<style>
  .logo{
   width: 100px;
   border-radius: 50%;
  }
  .regerster input, .add input{
   width: 300px;
   height: 40px;
   padding: 10px;
   padding-left: 10px;
   display: block;
   margin-bottom: 30px;
   margin-left: auto;
   margin-right: auto ;
   border: 1px solid black;
   border-radius: 4px;
    

   }
   
   .regerster button, .add button{
   border: 2px solid white;
    width: 199px;
    height: 50px;
    cursor: pointer;
    transition: .3s ease;
    
   }
 

   .regerster button:hover, .add button{
      background: #F8CC7E;
      transform: scale(.90);
   }
</style>