<template>
  <div>
      <div id="index3">
          <Header></Header>
      </div>
      <div id="fine2">
          <Navsmall></Navsmall>
      </div>
      <div class="banner">
          <wc-swiper>
            <wc-slide class="slide" v-for="(slide, key) in bannerImg" :key="key">
                <img class="swiper-image" :src="slide.url" alt="swiper-image">
            </wc-slide>
          </wc-swiper>
      </div>
      <div class="icon">
          <div class="inner" >
            <ul class="icon1">
                <li class="slideIcon" v-for="(slide, key) in iconImg" :key="key">
                    <img class="swiper-image" :src="slide.url">
                    <p>{{slide.word}}</p>
                </li>
            </ul>
         </div>
         <div class="ad">
             <img  style="margin-top:30px" src="../../static/images/ad01.png" alt="">
         </div>
      </div>
      <div class="like">
          <div class="inner">
              <div class="liketit">
                  <h1>热门新品<span>更多></span></h1>
              </div>
          </div>
          <div class="likecont">
            <ul style="padding-bottom:20px">
                <li v-for="i in likeImg">
                    <img :src="i.url">
                    <p>{{i.word}}</p>
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
        {url:"../../static/images/banner07.png"},
        {url:"../../static/images/banner06.png"},
        {url:"../../static/images/banner05.png"},
        {url:"../../static/images/banner04.png"},
        {url:"../../static/images/banner03.png"},
        {url:"../../static/images/banner02.png"},
        {url:"../../static/images/banner01.png"}
      ],
      iconImg:[
          {
            url:"../../static/images/img06.png",
            word:"天天好书"
          },
          {
            url:"../../static/images/img07.png",
            word:"听北京"
          },
          {
            url:"../../static/images/img08.png",
            word:"听单"
          },
          {
            url:"../../static/images/img09.png",
            word:"小雅音箱"
          },
          {
            url:"../../static/images/img10.png",
            word:"边听边读"
          }
      ],
      likeImg:[
          {
            url:"../../static/images/like02.png",
            word:"爆款-互联网独角兽"
          },
          {
            url:"../../static/images/like03.png",
            word:"越剧钱惠丽-带你走进越剧"
          },
          {
            url:"../../static/images/like05.png",
            word:"前端人生"
          }
      ]
    }
  },
  components:{Nav,Header,Navsmall},
  mounted(){
    
  }
}
</script>
<style>
.wc-pagination{
    display: none
}
#fine2 .navsmall li{
  border-bottom: 2px solid transparent;
  color: #333333;
}
#fine2 .navsmall .fine{
  border-bottom: 2px solid #f86442;
  color: #f86442;
}
#index1 .index{
    color: #ff5832;
}
#index1 .index i{
    color: #ff5832;
}
</style>
