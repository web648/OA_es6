<template>
    <div class="my_header">
            <mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
                    <router-link to="/" slot="left">
                      <mt-button icon="back"></mt-button>
                    </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
    </div>
</template>

<script>
    import { Actionsheet } from "mint-ui"
 export default {
     data(){
         return{

         }
     },
     methods:{

     },
    //  component(Actionsheet.name, Actionsheet)
 }
</script>

<style scoped>
    .my_header{
    }
</style>