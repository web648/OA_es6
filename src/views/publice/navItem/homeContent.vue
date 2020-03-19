<template>
    <div>
        <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="false" ref="loadmore">
            <ul class="centent_list">
                <router-link to="/" tag="li" v-for="item in dataList" :key="item.key" class="lists">
                    <div class="list_left fl">
                        <p>{{ item.title }}</p>
                        <span><i class="time fl">11/26</i> <i class="icon icon_visit visit_num fr">{{ item.visit_num }}</i><i class="icon icon_reply reply_num fr">{{ item.reply_num }}</i></span>
                    </div>
                    <img :src="item.img_url" alt="" class="list_right fr">
                </router-link>
            </ul>
        </mt-loadmore>
        <div @click="changeParentFn">子组件向父组件传值测试</div>
    </div>
</template>

<script>
    // import { Loadmore, InfiniteScroll } from 'mint-ui'

    export default {
        props:{
             parentData:{
                 type:String,
                 required:true,
             }   
        },
        data(){
            return{
              dataList:[],
              childData:"子组件数据",  
            }

        },
        mounted() {
            // GET /someUrl
            this.AjaxData();
            console.log(this.parentData,"父组件数据");
            
        },
        // components:{
        //     Loadmore
        // },
        methods:{
            changeParentFn(){
                this.$emit("childToParent","子组件向父组件传值");
            },
            AjaxData(){
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
            loadTop(){
                this.AjaxData();
            },
            loadBottom(){
                console.log("loadBottom");
                this.AjaxData();
            },
        }
    }
</script>
<style scoped lang="less">
    .centent_list{
        overflow: hidden;
        padding: 0 .2rem 1.2rem;
        .lists{
            padding: .3rem 0;
            overflow: hidden;
            .list_left{
                width: 70%;
                p{
                    text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-bottom: .4rem;
                }
                span{
                    i{font-style: normal;}
                }
            }
            .list_right{
                width: 28%;
            }
        }
    }
</style>
