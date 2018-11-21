<template>
  <div class="content">
    <v-header></v-header>
    <v-banner></v-banner>
    <ul>
      <li v-for="item in dataList" :key="item.key"><img :src="item.img_url" alt=""></li>
    </ul>
  </div>

</template>

<script>
  import { Toast, MessageBox, Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'test',
  data () {
    return {
        dataList:[],
    }
  },
  mounted() {
      // GET /someUrl
      this.$http.get('/api/test', {
        page_no:1,
        page_size:10
      }).then(res => {
            this.dataList = res.body.data;
            console.log(res);

      }, res => {
          Toast("数据请求失败，请稍后再试")
      });
  },
  methods:{
    
  }
}
</script>

<style scoped lang="less">

</style>
