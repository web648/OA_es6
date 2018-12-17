<template>
    <div class="editUser">
        <mt-header fixed title="资料编辑">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="add_img">
            <p>首个头图默认为头像，多个图时支持长按拖拽更换</p>
            <img src="../../../assets/img/user.jpg" alt="first">
            <img v-for="item in imgData" :key="item.val" :src="item.val" :alt="item.name">
            <i class="icon icon_addImg" @click="addImg_btn()"></i>
            <input type="file" name="upfile" hidden id="upfile" accept="image/png,image/jpg">
        </div>
        <div class="clear_both"></div>
        <ul>
            <mt-field label="社区ID" placeholder="" readonly v-model="communityID"></mt-field>
            <mt-field label="昵称" placeholder="" v-model="userName"></mt-field>
            <div class="mint-cell mint-field mint_sex">
                <label class="mint-cell-wrapper">
                    <span>性别</span>
                    <input type="text" v-model="sex" placeholder="" readonly @click="showSex()">
                </label>
            </div>
            <!-- <mt-field label="性别" placeholder="" v-model="sex" @click="showSex()" readonly></mt-field> -->
            <mt-field label="签名" placeholder="" v-model="sign"></mt-field>
            <mt-popup
            v-model="popupVisible"
            position="bottom">
                <p>请选择您的性别</p>
                <label v-for="item in sexData" :key="item.val"><input type="radio" name="sex" :value="item.name" :data-val="item.val" v-model="sex">{{ item.name }}</label>
            </mt-popup>
        </ul>
    </div>
</template>

<script>
    import { Header, Popup } from 'mint-ui';
    export default {
        data(){
            return {
                communityID:"330666888",
                userName:"游戏卿年",
                sex:"男",
                sign:"不个性，没签名",
                popupVisible: false,
                sexData:[
                    {name:"男",val:1},
                    {name:"女",val:2},
                    {name:"保密",val:3},
                ],
                imgData:[
                    {name:"百度头像", val:"http://img2.imgtn.bdimg.com/it/u=4055188882,2436207974&fm=26&gp=0.jpg"}
                ]
            }
        },
        computed:{

        },
        mounted() {

        },
        methods:{
            showSex(){
                this.popupVisible = this.popupVisible == false ? true : false;
            },
            addImg_btn(){
                document.querySelector("#upfile").click();

            }
        },
    }
</script>

<style lang="less" scoped>
.editUser{
    color: #b3b3b3;
    .add_img{
        overflow: hidden;
        img{
            float: left;
            width: 1.5rem;
            height: 1.5rem;
            margin: .2rem;
        }
        i{
            line-height: 1.7rem;
            float: left;
        }
    }
    .mint-header{
        height: 1rem;
        color: #494949;
        font-size: .36rem;
        background: #f3f0eb;
    }
    .add_img{
        margin-top: 1rem;
        background: #f3f0eb;
        padding: .3rem 0 .7rem;
        p{
            text-align: center;
        }
    }
    .mint-popup{
        display: block;
        width: 100%;
        padding: .5rem;
        p{
            display: block;
            width: 100%;
            text-align: center;
            margin-bottom: .5rem;
        }
        label{
            display: block;
            padding: 0.2rem 1rem;
            vertical-align: middle;
            input{
                border: none !important;
                margin-right: .2rem;
            }
        }
    }
    .mint_sex label{
        display: block;
        // vertical-align: middle;
        font-size: 16px;
        line-height: 48px;
        padding: 0 10px;
        span{
            float: left;
            width: 105px;
        }
        input{
            float: left;
            border: none;
            font-size: inherit;
            min-height: 43px;
            line-height: 0px;
            border-top: 1px solid rgb(241, 241, 241); 
            &:focus{
                outline: none;
                border: none;
                border-top: 1px solid rgb(241, 241, 241); 
            }
        }
    }
}

</style>