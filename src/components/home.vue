<template>
  <div class="content">
    <div @childToParent="childToParentFn($event)">{{test}}</div>
    <v-header></v-header>
    <v-banner></v-banner>
    <div class="top_banner">
      <h3 ref="test_h3"><i>置顶</i>本周六，超多绝版道具，神器限时免费送，送，送  </h3>
      <img src="../assets/img/top_banner.jpg" alt="top_banner" width="100%">
    </div>
    <div class="to_vote">
      <h3><b class="icon icon_vote"></b>[投票]本周六，极品装备任性领  </h3>
      <img src="../assets/img/top_vote.jpg" alt="top_banner" width="100%">
    </div>
    <homeContent :parentData="parentData"></homeContent>
  </div>

</template>

<script>
  import { Toast, MessageBox, Swipe, SwipeItem, Indicator  } from 'mint-ui'
  import homeContent from '../views/publice/navItem/homeContent'
  export default {
    name: 'test',
    data () {
      return {
          dataList:[],
          parentData:"父组件数据",
          test:"父组件数据"
      }
    },
    components:{
      homeContent
    },
    mounted() {
      console.log(this.$refs.test_h3,"this.$refs");
      console.log(this.$children,"this.$children");
      console.log(this.$root,"this.$root");
      
      
    },
    createdBefore(){
      Indicator.open('加载中...');
    },
    created() {
      Indicator.close()
      // this.test = false;
    },
    methods:{
      childToParentFn(data){
        this.test = data;
      }
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
