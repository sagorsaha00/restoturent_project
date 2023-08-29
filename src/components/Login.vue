<template>
        
<img class="logo" src="../assets/14674.jpg" alt="">
<h1>Login</h1>

<div class="login">
    <input type="text" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter password">
    <button v-on:click="login">Login</button>
    <p>
        <router-link to="/sign-up">sign-up</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data() {
        return{
            email:'',
            password:''
        }
    },
    methods:{
      async  login() {
          let result = await axios.get(
            `http://localhost:3000/user?email=${this.email}&password=${this.password}`
          );
          if(result.status == 200 && result.data.length > 0)
    {
       localStorage.setItem("user-info",JSON.stringify(result.data[0]))
       this.$router.push({name:'Home'})
    }
        },
        
   
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
.login input{
    width: 200px;
    padding: 20px;
    display: block;
    border: 2px solid black;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
}
.login button{
    width: 10%;
    padding: 10px;
    border-radius: 4px;
    transition: .2s ease;
    border: 0px;


}

.login button:hover{
    background: #F8CC7E ;
    cursor: pointer;
    transform: scale();
}
</style>