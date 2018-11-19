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

  </div>

</template>

<script>
  import { Toast, MessageBox } from 'mint-ui'
export default {
  name: 'test',
  data () {
    return {

    }
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
