<template>
  <div>
      <div id="index3">
          <Header></Header>
      </div>
      <div id="classify2">
          <Navsmall></Navsmall>
      </div>
      <div class="recent">
          <ul>
              <li class="recentleft">最近浏览</li>
              <li>音乐</li>
              <li>幻想</li>
              <li style="maring-right:0">言情</li>
          </ul>
      </div>
      <div class="recent book">
          <ul>
              <li class="recentleft1" style="margin-left:3px">有声书</li>
              <li>言情</li>
              <li>悬疑</li>
              <li style="margin-right:0">都市</li>
              <li>幻想</li>
              <li>武侠</li>
              <li style="margin-right:0">历史</li>
          </ul>
      </div>
      <div class="recent book" style="padding-top:0.2rem">
          <ul>
              <li class="recentleft1" style="margin-left:3px">儿童</li>
              <li>故事</li>
              <li>儿歌</li>
              <li style="margin-right:0">卡通</li>
              <li>家教</li>
              <li>国学</li>
              <li style="margin-right:0">科普</li>
          </ul>
      </div>
      <div class="recent book" style="padding-top:0.2rem">
          <ul>
              <li class="recentleft1" style="margin-left:3px">相声评书</li>
              <li>单田芳</li>
              <li>郭德纲</li>
              <li style="margin-right:0">热门相声</li>
              <li>单口相声</li>
              <li>名家评书</li>
              <li style="margin-right:0">新锐笑将</li>
          </ul>
      </div>
      <div class="kind">
          其他分类
      </div>
      <div class="classifies">
          <ul>
              <li style="margin-left:3px">音乐</li>
              <li>历史</li>
              <li>感情生活</li>
              <li>人文</li>
              <li style="margin-left:3px">音乐</li>
              <li>历史</li>
              <li>感情生活</li>
              <li>人文</li>
              <li style="margin-left:3px">音乐</li>
              <li>历史</li>
              <li>感情生活</li>
              <li>人文</li>
          </ul>
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
  components:{Nav,Header,Navsmall}
}
</script>
<style>
.recent{
    height: 1.5rem;
    background: white;
}
.recent ul{
    line-height: 1.5rem;
}
.recent li{
    float: left;
    width: 24%;
    text-align: center;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.28rem;
    margin-right: 3px;
    background: #f8f8f8;
    margin-top: 0.4rem;
    border-radius: 0.4rem
}
.recent .recentleft{
    color: #666666;
    border-radius: 0;
    background:none;
}
.book{
    height: 1.5rem;
    background: white
}
.book .recentleft1{
    height: 1.45rem;
    line-height: 1.45rem;
}
.book li{
    margin-top: 2px;
    border-radius: 0
}
.kind{
    height: 1.2rem;
    background: white;
    font-size: 0.3rem;
    line-height: 1.2rem;
    padding-left: 0.4rem
}
.classifies{
    overflow: hidden;
    background: white;
}
.classifies li{
    float: left;
    width: 24%;
    text-align: center;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 0.28rem;
    margin-right: 3px;
    background: #f8f8f8;
    margin-top: 3px;
}
#classify2 .navsmall li{
  border-bottom: 2px solid transparent;
  color: #333333;
}
#classify2 .navsmall .classify{
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
