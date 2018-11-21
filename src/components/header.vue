<template>
    <header>
      <ul class="head_list">
        <v-meun></v-meun>
        <router-link to="" tag="li"  v-for="item in head_nav" :key="item.key" :data-id="item.value">{{ item.name }}</router-link>
      </ul>
    </header>
</template>

<script>
    import { Actionsheet } from "mint-ui"
 export default {
     data(){
         return{
            head_nav:[
                {name:"端游专区",value:"1"},
                {name:"手游专区",value:"2"},
                {name:"微端专区",value:"3"},
                // {name:"待定",value:""},
            ]
         }
     },
     methods:{

     },
    //  component(Actionsheet.name, Actionsheet)
 }
</script>

<style scoped lang="less">
header{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    padding: 0 .3rem;
    background: #fff;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .head_list{
        display: flex;
        li{
        flex: 1;
        justify-content: center;
        text-align: center;
        &:nth-of-type(1){
            padding-left: .5rem;
        }
        }
    }
}
</style>