<template>
  <div class="content">
      <ul class="cmt_list" v-html="cmt_html">
             
      </ul>
      <div class="cmt_box">
        <div class="cmt_btn">
            <span @click="cmt_btn" >评论</span>
            <span @click="cmt_reply">回复</span>
        </div>
        <input type="text" name="add_cmt" placeholder="请输入评论" v-show="cmt_show" v-model="cmt_text">
        <input type="text" name="add_cmt1" placeholder="请输入回复" v-show="cmt_show1" v-model="cmt_text1">

        <i @click="cmt_save($event)" v-show="cmt_show || cmt_show1 " :name="cmt_type">保存</i>
        <i @click="cmt_close" v-show="cmt_show || cmt_show1">取消</i>
        <mt-button @click="test_fn()" size="large" type="primary">按钮</mt-button>
      </div>

  </div>

</template>

<script>
  import { Toast, MessageBox } from 'mint-ui'
export default {
  name: 'test',
  data () {
    return {
      cmt_show:false,
      cmt_show1:false,
      cmt_text:'',
      cmt_text1:'',
      cmt_type:'',
      cmt_html:'<li name="李云龙">李云龙：<h3>二营长我的意大利炮哪去了？ </h3></li>'
    }
  },
  methods:{
    cmt_btn(){
      console.log(this.cmt_show)
        this.cmt_show = this.cmt_show == false ? true : false;
        this.cmt_show1 = false;
        this.cmt_type = "comment";
    },
    cmt_reply(){
      this.cmt_show1 = this.cmt_show1 == false ? true : false;
      this.cmt_show = false;
      this.cmt_type = "reply";

    },
    cmt_save(event){
      let _self = event.currentTarget;
          console.log(this.cmt_type);
            if( this.cmt_type == "comment"){
              this.cmt_html += `<li name="二营长"> 二营长：${ this.cmt_text }<li>`
            }else{
              this.cmt_html += `<li name="李云龙"> 李云龙回复二营长： ${ this.cmt_text1 }<li>`

            }
            this.cmt_text = "";
            this.cmt_text1 = "";
      console.log(this.cmt_text);
      console.log(this.cmt_text1);

    },
    cmt_close(){
      this.cmt_show = false;
      this.cmt_show1 = false;
      this.cmt_text = "";
      this.cmt_text1 = "";
    },
    test_fn(){
            Toast("MintUi引入成功");
            //  MessageBox.confirm('确定执行此操作?').then(action => {
            //   alert(12111);
            // });
    }
  }
}
</script>

<style scoped>
.content{
  padding:10px 5px;
}
.cmt_box{
  padding-top: 10px;
}
.cmt_box i{
  font-style: normal;
  font-size: 12px;
  color: #fff;
  padding: 2px 10px;
  border-radius: 5px;
}
.cmt_box i:nth-of-type(1){
  background: greenyellow;
}
.cmt_box i:nth-of-type(2){
  background: gray;
}
.cmt_list li{
  display: inline-block;
}
.cmt_btn{
  padding-bottom: 5px;
}

</style>
