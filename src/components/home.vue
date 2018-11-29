<template>
  <div class="content">
    <v-header></v-header>
    <v-banner></v-banner>
    <div class="top_banner">
      <h3><i>置顶</i>本周六，超多绝版道具，神器限时免费送，送，送  </h3>
      <img src="../assets/img/top_banner.jpg" alt="top_banner" width="100%">
    </div>
    <div class="to_vote">
      <h3><b class="icon icon_vote"></b>[投票]本周六，极品装备任性领  </h3>
      <img src="../assets/img/to_vote.jpg" alt="top_banner" width="100%">
    </div>
    <homeContent></homeContent>
  </div>

</template>

<script>
  import { Toast, MessageBox, Swipe, SwipeItem } from 'mint-ui'
  import homeContent from '../views/publice/navItem/homeContent'
export default {
  name: 'test',
  data () {
    return {
        dataList:[],
    }
  },
  components:{
    homeContent
  },
  mounted() {
      // GET /someUrl
      // this.$http.get('/api/test', {
      //   page_no:1,
      //   page_size:10
      // }).then(res => {
      //       this.dataList = res.body.data;
      //       console.log(res);

      // }, res => {
      //     Toast("数据请求失败，请稍后再试")
      // });
  },
  methods:{
    
  }
}
</script>

<style scoped lang="less">
  .top_banner , .to_vote{
    width: 100%;
    overflow: hidden;
    padding: 0  .2rem;
    box-sizing: border-box;
    h3{
      font-size: .32rem;
      margin-top: .3rem;
      margin-bottom: .2rem; 
      i{
        font-style: normal;
        color: #b47c41;
        font-size: .24rem;
        padding: 1px 7px;
        border: 1px solid #b47c41;
        border-radius: .08rem;
        margin-right: .1rem;
      }
    }
  }
</style>
