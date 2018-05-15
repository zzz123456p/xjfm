<template>
  <div>
    <div class="mine_top">
      <img src="../../static/images/bg.jpg" alt="">
      <div class="bgs">
        <div class="headerl headerm">
          <div class="inner">
              <div class="letterl letterm">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <div class="searchl searchm"></div>
                  <router-link to="/set">
                    <i style="float:right" class="fa fa-cog btn" aria-hidden="true"></i>
                  </router-link>
              </div>
          </div>
        </div>
        <div class="headimg">
          <div class="headleft"></div>
          <div class="headright">
            <h1>一缕阳光yhf</h1>
            <h2>关注12 | 粉丝0</h2>
          </div>
        </div>
        <div class="headbot">
          <ul>
            <li>
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              <p>历史</p>
            </li>
            <li>
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <p>订阅</p>
            </li>
            <li>
              <i class="fa fa-download" aria-hidden="true"></i>
              <p>下载</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="record">
      开始录音
    </div>
    <div class="findcont maincont">
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i class="fa fa-exchange" aria-hidden="true"></i>
          <span>主播工作台</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-align-left" aria-hidden="true"></i>
          <span>我的作品</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i class="fa fa-diamond" aria-hidden="true"></i>
          <span>我的巅峰会员</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="text-align:left;margin-left:0.05rem" class="fa fa-music" aria-hidden="true"></i>
          <span>我的已购</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li style="border-bottom:1px solid #e8e8e8">
          <i class="fa fa-diamond" aria-hidden="true"></i>
          <span>我的钱包</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="text-align:left;margin-left:0.05rem" class="fa fa-music" aria-hidden="true"></i>
          <span>我的优惠券</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-diamond" aria-hidden="true"></i>
          <span>分享赚钱</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i class="fa fa-diamond" aria-hidden="true"></i>
          <span>扫一扫</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="text-align:left;margin-left:0.05rem" class="fa fa-music" aria-hidden="true"></i>
          <span>夜间模式</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-diamond" aria-hidden="true"></i>
          <span>我的积分</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="text-align:left;margin-left:0.05rem" class="fa fa-music" aria-hidden="true"></i>
          <span>帮助与反馈</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-diamond" aria-hidden="true"></i>
          <span>设置</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
    <div id="mine1">
      <Nav></Nav>
    </div>
  </div>
</template>
<script>
import Nav from "./nav"
import "../css/headerl.css"
import "../css/mine.css"
import "../css/find.css"
export default {
  data(){
    return{
      
    }
  },
  components:{Nav},
}
</script>
<style>
.wrap li{
    color: #444444;
}
.wrap i{
    color: #444444;
}
#mine1 .mine{
    color: #ff5832;
}
#mine1 .mine i{
    color: #ff5832;
}
.headerm{
  position: relative;
  background: transparent;
  border:none;
  color: white;
}
.headerm .letterl{
   background: transparent;
}
.headerm .letterl i{
  color: white;
}
.headerm .letterm .searchm{
  color: white;
}
body{
  padding-top: 0
}
.maincont{
  margin-bottom: 0.8rem;
}
.maincont  ul li i{
  color: #999999
}
</style>
