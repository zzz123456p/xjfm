<template>
  <div>
      <div class="wrap">
          <ul>
              <router-link to="/">
                <li class="index">
                    <i class="fa fa-globe indexx" aria-hidden="true"></i>
                    <p>首页</p>
                </li>
              </router-link>
              <router-link to="/listen">
                <li class="listen">
                    <i class="fa fa-headphones" aria-hidden="true"></i>
                    <p>我听</p>
                </li>
              </router-link>
              <router-link to="/music">
                <li style="position:relative">
                    听 
                    <div class="listento">
                        <div class="img"></div>
                    </div>
                </li>
              </router-link>
              <router-link to="/find">
                <li class="find">
                    <i class="fa fa-window-maximize" aria-hidden="true"></i>
                    <p>发现</p>
                </li>
              </router-link>
              <router-link to="/mine">
                <li class="mine">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    <p>我的</p>
                </li>
              </router-link>
          </ul>
      </div>
  </div>
</template>
<script>
import "../config/rem"
import "../css/nav.css"
import "../css/font-awesome-4.7.0/css/font-awesome.min.css"
export default {
  
}
</script>
<style>
/* .is-active{
    color: #ff5832;
} */
.wrap .index{
    color: #444444;
}
.wrap .index i{
    color: #444444;
}
</style>
