<template>
  <div class="meun">
      <li class="icon icon_meun" @click="show_meun()"></li>
      <div class="meun_box" v-show="is_show">
          <i class="edit icon icon_edit"></i>
          <div class="user">
              <img src="../assets/img/user.jpg" alt="user-img">
              <span>{{ user_name }}</span>
          </div>
          <div class="user_progress">
              <div class="pgs fl">
                  <i class="icon"></i> 还差<b>{{ sign_num }}</b>经验升级
                  <div class="pgs_bar">
                      <p></p>
                      <p></p>
                  </div>
              </div>
              <div :class="signBtn_style" @click="signBtn()">{{ sign_text }}</div>
          </div>
          <div class="user_num">
              <span><i>6</i>被关注</span>
              <span><i>43</i>今日访问</span>
              <span><i>99</i>总访问</span>
          </div>
          <ul class="meun_list">
              <router-link v-for="item in meunList" :key="item.name" tag="li" :class="item.className" :to="item.url">
                  {{ item.name }}
              </router-link>
          </ul>
      </div>

  </div>

</template>

<script>
  import { Toast, MessageBox } from 'mint-ui'
export default {
  data () {
    return {
        is_show: true,
        user_name: "游戏卿年",
        sign_num: 19,
        sign_text: "签到",
        signBtn_style:"sign_btn fr",
        meunList:[
            {
                name:"礼包兑换",
                url:"/",
                className:"icon icon_gift",
            },
            {
                name:"赛事查票",
                url:"/",
                className:"icon icon_ticket",
            },
            {
                name:"周边商城",
                url:"/",
                className:"icon icon_store",
            },
            {
                name:"我的收藏",
                url:"/",
                className:"icon icon_collect",
            },{
                name:"吐槽反馈",
                url:"/",
                className:"icon icon_feedback",
            },{
                name:"系统设置",
                url:"/",
                className:"icon icon_setting",
            },
        ]
    }
  },
  methods:{
    show_meun(){
        console.log(this.is_show);
        this.is_show = this.is_show== false ? true : false; 
    },
    signBtn(){
        if( this.sign_text == "签到"){
            this.sign_num -= 5;
            this.sign_text = "已签到";
            this.signBtn_style = "sign_btn sign_btn_active fr";
        }else{ Toast("签到成功，请明天再来")}
    }
  }
}
</script>

<style scoped lang="less">
.meun{
    position: relative;
    // padding-right: .3rem;
    .meun_box{
        width: 80%;
        height: 100%;
        padding: 1rem .5rem .3rem;
        position: fixed;
        top: 0rem;
        left: 0rem;
        z-index: 99;
        box-sizing: border-box;
        color: #fff;
        background: rgba(38, 38, 38, 0.95);
        box-shadow: .1rem .1rem 3rem #000;
        .edit{
            position: absolute !important;
            top: 0;
            right: .25rem;
        }
        .user{
            width: 2rem;
            height: 2rem;
            text-align: center;
            margin: 0 auto;
            img{
                display: block;
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 auto;
                border-radius: 50%;
            }
            span{
                font-weight: bold;
                font-size: .48rem;
            }
        }
        .user_progress{
            display: block;
            padding-top: .3rem;
            overflow: hidden;
            line-height: .48rem;
            .pgs{
                width: 72%;
                text-align: right;
                padding-top: .48rem;
                .pgs_bar{
                    width: 100%;
                    p{
                        height: 5px;
                        &:first-child{
                            width: 100%;
                            margin-top: 5px;
                            background: #999;
                        }
                        &:last-child{
                            margin-top: -5px;
                            width: 90%;
                            background: #f60;
                        }
                    }
                }           
            }
            .sign_btn{
                width: 23%;
                text-align: center;
                line-height: .64rem;
                color: #fff;
                background: #f60;
                margin-top: .6rem;
                border-radius: .05rem;
            }
            .sign_btn_active{
                background: rgb(192, 192, 192) !important;
            }
        }
        .user_num{
            display: flex;
            margin: .5rem 0 .4rem;
            span{
                flex: 1;
                justify-content: flex-start;
                text-align: center;
                line-height: .52rem;
                font-size: .12rem;
                border-left: 1px solid #999;
                margin-left: -1px;
                i{  
                    display: block;
                    font-size: .36rem;
                    font-weight: bold;
                    font-style: normal;
                }
                &:first-child{
                    border: none;
                }
            }
        }
        .meun_list{
            // overflow: hidden;
            li{
                color: #fff;
                font-size: .32rem;
                padding-left: .5rem;
            }
        }
    }
}

</style>
