<template>
  <div>
      <div class="meun" hidden>
          <div class="user">
              <img src="" alt="user-img">
              <span>游戏卿年</span>
          </div>
          <div class="user_progress">
              <div class="pgs lf">
                  <p><i class="icon "></i> 还差<b>99</b>经验升级</p>
                  <p></p>
              </div>
              <div class="sign_in fr">签到</div>
          </div>
          <div class="user_num">
              <span><i>6</i>被关注</span>
              <span><i>43</i>今日访问</span>
              <span><i>99</i>总访问</span>
          </div>
          <ul class="meun_list">
              <router-link to="" tag="li">礼包兑换</router-link>
              <router-link to="" tag="li">赛事查票</router-link>
              <router-link to="" tag="li">周边商城</router-link>
              <router-link to="" tag="li">我的收藏</router-link>
              <router-link to="" tag="li">吐槽反馈</router-link>
              <router-link to="" tag="li">系统设置</router-link>


          </ul>
      </div>

  </div>

</template>

<script>
  import { Toast, MessageBox } from 'mint-ui'
export default {
  data () {
    return {

    }
  },
  methods:{
    
  }
}
</script>

<style scoped lang="less">


</style>
