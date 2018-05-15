<template>
  <div>
      <div id="index3">
          <Header></Header>
      </div>
      <div id="index2">
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
             <img src="../../static/images/ad01.png" alt="">
         </div>
      </div>
      <div class="like">
          <div class="inner">
              <div class="liketit">
                  <h1>猜你喜欢<span>更多></span></h1>
              </div>
          </div>
          <div class="likecont">
            <ul>
                <li v-for="i in likeImg">
                    <img :src="i.url">
                    <p>{{i.word}}</p>
                </li>
            </ul>
            <div class="change">换一批</div>
          </div> 
      </div>
      <div class="opera">
          <div class="inner">
              <div class="liketit">
                  <h1>戏曲<span>更多></span></h1>
              </div>
          </div>
          <div class="operacont">
              <ul>
                  <li v-for="i in opera">
                      <img :src="i.url">
                      <div class="operaright">
                          <h1>{{i.name}}</h1>
                          <h2>{{i.tit}}</h2>
                          <h3>{{i.count}}</h3>
                      </div>
                  </li>
              </ul>
              <div class="change">换一批</div>
          </div>
      </div>
      <div class="english">
          <div class="inner">
            <img src="../../static/images/english.png" alt="">
            <h1>小雅AI音箱</h1>
            <p>365种不同梯度，宝宝英语轻松学</p>
          </div>
      </div>
      <div class="like chinese">
          <div class="inner">
              <div class="liketit">
                  <h1>人文<span>更多></span></h1>
              </div>
          </div>
          <div class="likecont">
            <ul>
                <li v-for="i in chinese">
                    <img :src="i.url">
                    <p>{{i.name}}</p>
                </li>
            </ul>
            <div class="change" style="color:orange">查看更多</div>
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
        {url:"../../static/images/banner05.png"},
        {url:"../../static/images/banner06.png"},
        {url:"../../static/images/banner07.png"}
      ],
      iconImg:[
          {
            url:"../../static/images/img01.png",
            word:"大师课"
          },
          {
            url:"../../static/images/img02.png",
            word:"经典必听"
          },
          {
            url:"../../static/images/img03.png",
            word:"每日必听"
          },
          {
            url:"../../static/images/img04.png",
            word:"演员诞生"
          },
          {
            url:"../../static/images/img05.png",
            word:"郭德纲"
          },
        
      ],
      likeImg:[
          {
            url:"../../static/images/like01.png",
            word:"北京尚学堂Python系列教程"
          },
          {
            url:"../../static/images/like02.png",
            word:"爆款-互联网独角兽"
          },
          {
            url:"../../static/images/like03.png",
            word:"越剧钱惠丽-带你走进越剧"
          },
          {
            url:"../../static/images/like04.png",
            word:"程序员修真小说"
          },
          {
            url:"../../static/images/like05.png",
            word:"前端人生"
          },
          {
            url:"../../static/images/like06.png",
            word:"程序员的日常点滴"
          }
      ],
      opera:[
          {
            url:"../../static/images/opera01.png",
            name:"河南豫剧大全《朝阳沟》",
            tit:"朝阳沟",
            count:"274万"
          },
          {
            url:"../../static/images/opera02.png",
            name:"【河南地方戏名家名段】",
            tit:"徐俊霞.朝阳沟.自古道山难移来性难改",
            count:"627万"
          },
          {
            url:"../../static/images/opera03.png",
            name:"京剧其实很好玩",
            tit:"瑜老板带你玩转京剧",
            count:"183万"
          }
      ],
      chinese:[
          {
            url:"../../static/images/chinese01.png",
            name:"郭论.郭德纲品头论足",
            cont:"历史有冷暖，老郭有故事",
          },
          {
            url:"../../static/images/chinese02.png",
            name:"晓说【文化】",
            cont:"【高晓松】谈笑风生，满是干货的谈",
          },
          {
            url:"../../static/images/chinese03.png",
            name:"谢谢了，我的家",
            cont:"孔子、鲁迅、徐志摩、汪曾祺、丰子",
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
body{
    padding-top: 0
}
.wrap li{
    color: #444444;
}
.wrap i{
    color: #444444;
}
#index3{
    width: 100%;
    height: 1rem;
    position: relative;
}
#index1 .index{
    color: #ff5832;
}
#index1 .index i{
    color: #ff5832;
}
#index2 .navsmall li{
  border-bottom: 2px solid transparent;
  color: #333333;
}
#index2 .navsmall .offer{
  border-bottom: 2px solid #f86442;
  color: #f86442;
}
</style>
