<template>
  <div class="page">
    <v-nav>
      <v-nav-item path="/news" label="消息中心" icon="xiaoxi1"></v-nav-item>
      <v-nav-item path="/public/yuannews" label="院内新闻" icon="iconxw"></v-nav-item>
      <router-link :to="{ path: '/' }" class="tab-item" style="background:#01295c;">
        <span class="iconfont icon-zonghe home" style="font-size:3rem;"></span>
      </router-link>
      <v-nav-item path="/public/email/0" label="邮件管理" icon="icon"></v-nav-item>
      <v-nav-item path="/setting" label="设置" icon="gerenzhongxin"></v-nav-item>
    </v-nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
