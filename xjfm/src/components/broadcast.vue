<template>
  <div>
      <div id="index3">
          <Header></Header>
      </div>
      <div id="broadcast2">
          <Navsmall></Navsmall>
      </div>
      <div class="banner">
          <wc-swiper>
            <wc-slide class="slide" v-for="(slide, key) in bannerImg" :key="key">
                <img class="swiper-image" :src="slide.url" alt="swiper-image">
            </wc-slide>
          </wc-swiper>
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
        {url:"../../static/images/banner05.png"},
        {url:"../../static/images/banner04.png"},
        {url:"../../static/images/banner07.png"},
        {url:"../../static/images/banner03.png"}
      ]
    }
  },
  components:{Nav,Header,Navsmall},
  mounted(){
    
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
#broadcast2 .broadcast li{
  border-bottom: 2px solid transparent;
  color: #333333;
}
#broadcast2 .broadcast .fine{
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
