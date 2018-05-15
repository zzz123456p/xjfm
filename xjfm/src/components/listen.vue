<template>
  <div>
    <div id="listen2">
      <Headerl></Headerl>
    </div>
    <div class="navl" style="margin-top:1rem">
      <ul>
        <li>
          <i class="fa fa-download" aria-hidden="true"></i>
          <p>下载</p>
          <span>805</span>
        </li>
        <li>
          <i class="fa fa-history" aria-hidden="true"></i>
          <p>历史</p>
          <span>30</span>
        </li>
        <li>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <p>已购</p>
          <span>1</span>
        </li>
        <li>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
          <p>喜欢</p>
          <span>2</span>
        </li>
      </ul>
    </div>
    <div class="listencont">
      <div class="listencont_tit">
        <ul>
          <li class="fir">我的订阅</li>
          <li>推荐订阅</li>
          <li style="float:right;font-size:0.24rem;margin-right:-0.1rem">最近更新</li>
        </ul>
      </div>
      <div class="listencont_cont">
          <ul>
              <li v-for="(i,index) in listen" @click="lis(index)">
                  <img :src="i.url">
                  <div class="listencont_cont_right">
                      <h1>{{i.name}}</h1>
                      <h2>{{i.tit}}</h2>
                      <h3>{{i.count}}</h3>
                      <span>{{i.new}}</span>
                  </div>
              </li>
          </ul>
          <div class="change">+添加订阅</div>
      </div>
    </div>
    <div id="listen1">
      <Nav></Nav>
    </div>
  </div>
</template>
<script>
import Nav from "./nav"
import Headerl from "./headerl"
import "../css/listen.css"
import Axios from "axios"
import router from 'vue-router'
export default {
  data(){
    return{
      listen:"",
      item:"",
      id:""
    }
  },
  components:{Nav,Headerl},
  mounted(){
    this.cartView()
  },
  methods:{
    cartView() {
      Axios({
        url:"../../static/listen.json",
        method:"get",
        params:{}
      }).then(res=>{
        this.listen=res.data
      })
    },
    lis(index){
      this.item=this.listen[index].id
      this.$router.push({path:'contact',query:{id:this.item}})
    }
  }
}
</script>
<style>
#listen2{
    width: 100%;
    height: 1rem;
    position: fixed;
    top: 0;
    z-index: 999;
}
.wrap li{
    color: #444444;
}
.wrap i{
    color: #444444;
}
#listen1 .listen{
    color: #ff5832;
}
#listen1 .listen i{
    color: #ff5832;
}
</style>
