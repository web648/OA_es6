<template>
    <div class="my_header">
           <span>我是公共头部</span>
           <span class="login">
               <router-link tag="i" to="login">登录</router-link>
               <router-link tag="i" to="register">注册</router-link>

           </span> 
    </div>
</template>

<script>
 export default {
     data(){
         return{

         }
     }
 }
</script>

<style scoped>
    .my_header{
        background: yellowgreen;
        padding: 10px 0;
        text-align: center;
    }
</style>