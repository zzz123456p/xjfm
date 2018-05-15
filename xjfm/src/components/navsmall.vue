<template>
  <div>
    <div class="inner">
      <div class="navsmall">
        <ul>
          <router-link to="/classify">
            <li class="classify">分类</li>
          </router-link>
          <router-link to="/">
            <li class="offer">推荐</li>
          </router-link>
          <router-link to="/fine">
            <li class="fine">精品</li>
          </router-link>
          <router-link to="/live">
            <li class="live">直播</li>
          </router-link>
          <router-link to="/broadcast">
            <li class="broadcast">广播</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "../css/common.css"
export default {
  
}
</script>
<style>
.navsmall{
  height: 1rem;
}
.navsmall li{
  float: left;
  font-size: 0.3rem;
  color: #333333;
  line-height: 0.9rem;
  border-bottom: 2px solid transparent;
  padding: 0 0.2rem;
  margin-right: 10px;
}

</style>
