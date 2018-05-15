<template>
  <div>
      <div class="headerl headers">
          <div class="inner">
              <div class="letterl">
                  <router-link to="/mine">
                    <i style="color:black;margin-top:0.08rem" class="fa fa-chevron-left" aria-hidden="true"></i>
                  </router-link>
                  <div class="searchl">
                      设置
                  </div>
                  <i style="float:right;opacity:0" class="fa fa-search btn" aria-hidden="true"></i>
              </div>
          </div>
      </div>
      <div class="setcont">
          <ul>
              <li>
                  <div class="setcontl">
                    智能硬件
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    车载模式
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    华为手表
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
          </ul>
          <ul>
              <li>
                  <div class="setcontl">
                    特色闹铃
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    定时关闭
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
          </ul>
          <ul>
              <li>
                  <div class="setcontl">
                    账号绑定
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    修改密码
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
          </ul>
          <ul>
              <li>
                  <div class="setcontl">
                    推送设置
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    隐私设置
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
          </ul>
          <ul>
              <li>
                  <div class="setcontl">
                    下载和缓存设置
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
          </ul>
          <ul>
              <li>
                  <div class="setcontl">
                    特色功能
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    新版本介绍
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    检查更新
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
              <li>
                  <div class="setcontl">
                    关于
                  </div>
                  <div class="setcontr">
                    <i class="fa fa-chevron-right iconr" aria-hidden="true"></i>
                  </div>
              </li>
          </ul>
      </div>
      <div class="logout">
          退出登录
      </div>
  </div>
</template>
<script>
import "../config/rem"
import "../css/common.css"
import "../css/headerl.css"

import "../css/font-awesome-4.7.0/css/font-awesome.min.css"
export default {
  
}
</script>
<style>
body{
    padding-bottom: 0;
    padding-top: 0
}
.setcont ul{
    margin-top: 15px;
}
.setcont li{
    height: 1rem;
    background: white;
    border-bottom: 1px solid #e8e8e8
}
.setcont .setcontl{
    float: left;
    font-size: 0.32rem;
    color: black;
    line-height: 1rem;
    margin-left: 0.4rem;
}
.setcont .setcontr{
    float: right;
}
.setcont .setcontr i{
    display: block;
    font-size: 0.36rem;
    color: #adadad;
    line-height: 1rem;
    margin-right: 0.4rem;
}
.logout{
    width: 90%;
    margin: 15px auto;
    height: 1rem;
    background: #f86442;
    text-align: center;
    line-height: 1rem;
    font-size: 0.32rem;
    color: white;
    border-radius: 15px;
}
</style>
