<template>
  <div>
      <div class="headerl headers">
          <div class="inner">
              <div class="letterl">
                  <router-link to="/listen">
                    <i style="color:black;margin-top:0.08rem" class="fa fa-chevron-left" aria-hidden="true"></i>
                  </router-link>
                  <div class="searchl">
                      专辑详情
                  </div>
                  <i style="float:right;opacity:0" class="fa fa-search btn" aria-hidden="true"></i>
              </div>
          </div>
      </div> 
      <div class="head" v-for="item,index in listen" v-if="index==id">
          <div class="inner">
              <div class="head_top">
                  <div class="head_top_left">
                      <img :src="item.url">
                  </div>
                  <div class="head_top_right">
                      <h1>{{item.name}}</h1>
                      <h2>主播：<span>{{item.host}}</span></h2>
                      <h2>播放：{{item.times}}</h2>
                      <h2>分类：<span>{{item.classify}}</span></h2>
                  </div>
              </div>
              <div class="head_mid">
                  <button type="submit">已订阅</button>
                  <button type="submit" style="background:#5dcaad">继续播放</button>
              </div>
          </div>
      </div>
  </div>
</template> 
<script>
import Axios from "axios"
export default {
  data(){
      return{
          id:'',
          listen:'',
          index:''
      }
  },
  methods:{
      cartView() {
        Axios({
            url:"../../static/listen.json",
            method:"get",
            params:{}
        }).then(res=>{
            this.listen=res.data
            this.id=this.$route.query.id
        })
      }
  },
  computed:{
  },
  mounted(){
        document.body.style.background="#f3f4f5"
        this.cartView()
  }
}
</script>
<style>
.head{
    height: 4.3rem;
    background: white;
}
.head_top{
    padding-top: 0.5rem;
    overflow: hidden;
}
.head_top_left{
    float: left;
    width: 2rem;
    height: 2.1rem;
    background: red;
}
.head_top_left img{
    width: 100%;
    height: 100%;
}
.head_top_right{
    float: left;
    margin-left: 0.2rem
}
.head_top_right h1{
    width: 3.8rem;
    font-weight: normal;
    font-size: 0.36rem;
    color: #333333
}
.head_top_right h2{
    font-weight: normal;
    font-size: 0.3rem;
    color: #999999
}
.head_top_right span{
    color: #4b90e2
}
.head_mid button{
    width: 40%;
    height: 0.8rem;
    background: #cccccc;
    color: white;
    font-size: 0.3rem;
    border:none;
    border-radius: 10px
}
</style>
