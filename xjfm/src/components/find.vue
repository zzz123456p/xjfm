<template>
  <div>
    <div id="find2">
      <div class="headerl">
        <div class="inner">
            <div class="letterl">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <div class="searchl">
                    发现
                </div>
                <i style="float:right" class="fa fa-search btn" aria-hidden="true"></i>
            </div>
        </div>
      </div>
    </div>
    <div class="findcont" style="margin-top:1rem">
      <ul>
        <li>
          <i style="text-align:left;margin-left:0.05rem" class="fa fa-music" aria-hidden="true"></i>
          <span>听友圈</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="color:#50e3c2" class="fa fa-diamond" aria-hidden="true"></i>
          <span>喜马精选</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li>
          <i style="color:#f52362;font-size:0.6rem" class="fa fa-rebel" aria-hidden="true"></i>
          <span>全民朗读</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="color:#53cff1;font-size:0.6rem" class="fa fa-reddit" aria-hidden="true"></i>
          <span>大咖主播</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li>
          <i style="color:#4b98fe;font-size:0.7rem" class="fa fa-question-circle" aria-hidden="true"></i>
          <span>问答</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
      <ul>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="color:#91cf4c" class="fa fa-shopping-bag" aria-hidden="true"></i>
          <!-- <i class="fa fa-shopping-bag" aria-hidden="true"></i> -->
          <span>商城</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="color:#f5a623;font-size:0.5rem" class="fa fa-credit-card" aria-hidden="true"></i>
          <span>逸听卡</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li style="border-bottom:1px solid #e8e8e8">
          <i style="color:#4a90e2;font-size:0.5rem" class="fa fa-gamepad" aria-hidden="true"></i>
          <span>游戏</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
        <li>
          <i style="color:#ee5f5f;font-size:0.5rem" class="fa fa-calendar-o" aria-hidden="true"></i>
          <span>活动</span>
          <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
    <div id="find1">
      <Nav></Nav>
    </div>
    
  </div>
</template>
<script>
import Nav from "./nav"
import "../css/headerl.css"
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
/* body{
  padding-top: 1rem;
} */
#find2{
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
#find1 .find{
    color: #ff5832;
}
#find1 .find i{
    color: #ff5832;
}
</style>
