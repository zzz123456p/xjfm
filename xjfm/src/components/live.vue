<template>
  <div>
      <div id="index3">
          <Header></Header>
      </div>
      <div id="live2">
          <Navsmall></Navsmall>
      </div>
      <div class="banner">
          <wc-swiper>
            <wc-slide class="slide" v-for="(slide, key) in bannerImg" :key="key">
                <img class="swiper-image" :src="slide.url" alt="swiper-image">
            </wc-slide>
          </wc-swiper>
      </div>
      <div class="livewrap">
          <div class="level">
              今日主播榜
          </div>
          <div class="livecont">
              <ul>
                  <li>
                      <video preload="none" id="video01" src="../../static/video01.mp4" poster="../../static/video01.png">
                      </video>
                      <h1>太阳</h1>
                      <h2>高兴来了</h2>
                  </li>
                  <li>
                      <video preload="none" id="video02" src="../../static/video01.mp4" poster="../../static/video02.png">
                      </video>
                      <h1>星星</h1>
                      <h2>快乐来了</h2>
                  </li>
                  <li>
                      <video preload="none" id="video03" src="../../static/video01.mp4" poster="../../static/video03.png">
                      </video>
                      <h1>月亮</h1>
                      <h2>烦恼走了</h2>
                  </li>
                  <li>
                      <video preload="none" id="video04" src="../../static/video01.mp4" poster="../../static/video04.png">
                      </video>
                      <h1>星星</h1>
                      <h2>生气走了</h2>
                  </li>
                  <li>
                      <video preload="none" id="video05" src="../../static/video01.mp4" poster="../../static/video05.png">
                      </video>
                      <h1>月亮</h1>
                      <h2>欢乐来了</h2>
                  </li>
                  <li>
                      <video preload="none" id="video06" src="../../static/video01.mp4" poster="../../static/video06.png">
                      </video>
                      <h1>太阳</h1>
                      <h2>幸运来了</h2>
                  </li>
              </ul>
          </div>
      </div>
      
      <div id="index1">
           <Nav></Nav>
      </div>
  </div>
</template>
<script>
import "../config/rem"
import "../css/common.css"
import "../css/index.css"

import Nav from "./nav"
import Header from "./header"
import Navsmall from "./navsmall"

export default {
  data(){
    return{
      bannerImg:[
        {url:"../../static/images/banner01.png"},
        {url:"../../static/images/banner02.png"},
        {url:"../../static/images/banner03.png"},
        {url:"../../static/images/banner04.png"},
        {url:"../../static/images/banner05.png"}
      ]
    }
  },
  components:{Nav,Header,Navsmall},
  method:{
  },
  mounted(){
    var video=document.getElementById("video01");
    var video=document.getElementById("video02");
    var video=document.getElementById("video03");
    var video=document.getElementById("video04");
    var video=document.getElementById("video05");
    var video=document.getElementById("video06");
    this.controls=true;
    var current=true;
    function change(video){
        if(current){
            video.play()
            current=false
        }else{
            video.pause()
            current=true
        }
    }
    video01.addEventListener("click",function(){
        change(this)
    })
    video02.addEventListener("click",function(){
        change(this)
    })
    video03.addEventListener("click",function(){
        change(this)
    })
    video04.addEventListener("click",function(){
        change(this)
    })
    video05.addEventListener("click",function(){
        change(this)
    })
    video06.addEventListener("click",function(){
        change(this)
    })
  }
}
</script>
<style>
body{
    padding-top: 0
}
.wc-pagination{
    display: none
}
.livewrap{
    background: white;
    padding-top:0.15rem;
    padding-bottom:0.15rem;
}
.level{
    width: 90%;
    height: 1rem;
    border: 2px solid #e8e8e8;
    margin:0 auto;
    border-radius: 10px;
    color: #f86442;
    font-size: 0.3rem;
    line-height: 1rem;
    padding-left: 5px
}
.livecont{
    margin-top:15px
}
.livecont li{
    float: left;
    width: 46%;
    height: 3rem;
    overflow: hidden;
    background: white;
    margin-left: 8.5px
}
.livecont ul{
    margin-bottom: 15px;
    overflow: hidden;
}
.livecont li img{
    width: 100%;
    height: 3.4rem;
    clear: both;
}
.livecont li h1{
    font-size: 0.3rem;
    font-weight: normal;
    color: black;
}
.livecont li h2{
    font-size: 0.26rem;
    font-weight: normal;
    color: #999999;
    margin-top: 0.1rem;
}
#live2 .navsmall li{
  border-bottom: 2px solid transparent;
  color: #333333;
}
#live2 .navsmall .live{
  border-bottom: 2px solid #f86442;
  color: #f86442;
}
#index1 .index{
    color: #ff5832;
}
#index1 .index i{
    color: #ff5832;
}
video{
    width: 100%;
}
</style>
