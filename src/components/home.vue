<template>
  <div class="content">
    <header>
      <ul class="head_list">
        <v-meun></v-meun>
        <router-link to="" tag="li">端游专区</router-link>
        <router-link to="" tag="li">手游专区</router-link>
        <router-link to="" tag="li">微端专区</router-link>
      </ul>
    </header>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
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
        bannerList:[
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331434&di=0472f0c63230933b5aa9c77c7adbd3ab&imgtype=0&src=http%3A%2F%2Fp3.pstatp.com%2Forigin%2F37ed00020220047d914b',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331433&di=54d70ddacf2fe1a49bebaefa7039f27a&imgtype=0&src=http%3A%2F%2Fp3.pstatp.com%2Forigin%2F37ee0005176c91572872',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331433&di=ca3a7b87c5717a262ba6f6c91f329950&imgtype=0&src=http%3A%2F%2Fp9.pstatp.com%2Forigin%2F37f10002f7d7266cf902',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331433&di=095322f5db87be4f55a6f7e6f7762181&imgtype=0&src=http%3A%2F%2Fp1.pstatp.com%2Forigin%2F37ef0005127e4e56ef82',
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331431&di=8741abce9160af73b298428b8ffc7812&imgtype=0&src=http%3A%2F%2Fbbsimg.gamersky.com%2Fattachments%2Fforum%2F201206%2F02%2F213600ea6l28swx1s6826z.jpg'
        ]
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

</style>
