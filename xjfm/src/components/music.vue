<template>
  <div>
    <div class="mine_top" style="height:7rem">
      <img style="height:7rem" src="../../static/images/bg.jpg" alt="">
      <div class="bgs" style="height:7rem">
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
      </div>
    </div>
    <div class="mus">
      <audio src="../../static/music01.mp3" controls="controls"></audio>
    </div>
    <div class="m_tit">
      <div class="m_tit_left">
        <img src="../../static/images/listen06.png">
      </div>
      <div class="m_tit_right">
        <h1>陪你读书(第四期-数据类型)</h1>
        <h2>4024人订阅</h2>
      </div>
    </div>
    <Nav></Nav>
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
.wrap .index{
  color: #444444;
}
.wrap .index i{
  color: #444444;
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
.mus{
  height:1.3rem;
  margin-top:15px;
  position: relative;
}
.mus audio{
  width: 100%;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
}
.mus li{
  width: 20%;
  text-align: center;
  float: left;
}
.mus li i{
  display: block;
  font-size: 0.5rem;
  color: #9a9a9a;
  margin-top: 0.2rem;
}
.mus li p{
  font-size: 0.3rem;
  color: #9a9a9a;
  margin-top: 0.1rem;
}
.mus li .play{
  margin-top: 0;
  line-height: 1.5rem;
  color: #f66847
}
.m_tit{
  width:100%;
  height: 2.3rem;
  background:white;
  margin-bottom: 1.1rem
}
.m_tit_left{
  float: left;
  width: 1rem;
  height: 1rem;
  margin-left: 0.4rem;
  margin-top: 0.6rem
}
.m_tit_left img{
  width: 100%;
  height: 100%;
}
.m_tit_right{
  float: left;
  margin-left: 0.4rem;
  margin-top: 0.6rem
}
.m_tit_right h1{
  font-size: 0.3rem;
  color: #333333;
  font-weight: normal;
  margin-top: 0.1rem
}
.m_tit_right h2{
  font-size: 0.20rem;
  color: #999999;
  font-weight: normal;
  margin-top: 0.1rem
}
</style>
