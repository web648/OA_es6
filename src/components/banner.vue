<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in bannerList" :key="item.key"><img :src="item" alt="banner" class="banner_list"></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import $http from '../https'
    export default {
        data(){
            return{
                bannerList:[
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331434&di=0472f0c63230933b5aa9c77c7adbd3ab&imgtype=0&src=http%3A%2F%2Fp3.pstatp.com%2Forigin%2F37ed00020220047d914b',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331433&di=54d70ddacf2fe1a49bebaefa7039f27a&imgtype=0&src=http%3A%2F%2Fp3.pstatp.com%2Forigin%2F37ee0005176c91572872',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331433&di=ca3a7b87c5717a262ba6f6c91f329950&imgtype=0&src=http%3A%2F%2Fp9.pstatp.com%2Forigin%2F37f10002f7d7266cf902',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331433&di=095322f5db87be4f55a6f7e6f7762181&imgtype=0&src=http%3A%2F%2Fp1.pstatp.com%2Forigin%2F37ef0005127e4e56ef82',
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542804331431&di=8741abce9160af73b298428b8ffc7812&imgtype=0&src=http%3A%2F%2Fbbsimg.gamersky.com%2Fattachments%2Fforum%2F201206%2F02%2F213600ea6l28swx1s6826z.jpg'
                ],
                testData:{
                    name:'Shber',
                    age:'18',
                    join:"web"
                }
            }
        },
        created() {
            this.ajaxData();
        },
        methods: {
          ajaxData(){
                const ajaxUrl = 'http://jsonplaceholder.typicode.com/posts';
                $http.post(ajaxUrl, this.testData)
                    .then(res=>console.log(res)).then(console.log('二营长'))
                    .catch(err=>console.error(err))
          }  
        },
    }
</script>

<style scoped lang="less">
    .mint-swipe{
        margin-top: 1rem;
        height: 4rem !important;
        // margin: .3rem -0.3rem;
        img{
            width: 100%;
            height: auto;
        }
    }
    .mint-swipe-indicator.is-active{
        background:#f60 !important;
    }
</style>