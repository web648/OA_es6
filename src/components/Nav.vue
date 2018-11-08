<template>
    <div class="nav_list">
        <slot>
            <ul>
                <router-link to="aboutUs" tag="li">关于</router-link>
                <!-- <router-link to="callme" tag="li">联系</router-link> -->
                <router-link to="/" tag="li" exact>主页</router-link>
                <router-link to="setting" tag="li">设置</router-link>
                <router-link to="other" tag="li">其他</router-link>
            </ul>
        </slot>
    </div>
</template>

<script>
    export default{
        data (){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style scoped>
    .nav_list{
        display: block;
        width: 100%;
        position: fixed;
        left:0;
        bottom: 0;
        /* display: flex;  */
    }
    .nav_list li{
        /* flex: 1; */
        width: 25%;
        text-align: center;
        float: left;
        /* justify-content: space-between; */
        color: gray;
        padding: 10px 0;
    }
</style>

