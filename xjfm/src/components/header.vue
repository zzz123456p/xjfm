<template>
  <div>
      <div class="header">
          <div class="inner">
              <div class="letter">
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <div class="search">
                      <input type="search" placeholder="蒙曼 | 日语">
                      <i class="fa fa-search btn" aria-hidden="true"></i>
                  </div>
                  <i class="fa fa-clock-o" aria-hidden="true" style="margin-left:0.3rem;margin-right:0.4rem"></i>
                  <i class="fa fa-download" aria-hidden="true"></i>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import "../config/rem"
import "../css/common.css"
import "../css/font-awesome-4.7.0/css/font-awesome.min.css"
export default {
  
}
</script>
<style>
.header{
    width: 100%;
    height: 1rem;
    background: white;
}
.inner{
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
}
.letter i{
    display: block;
    font-size: 0.5rem;
    color: #666666;
    padding-top: 0.25rem;
    float: left;
}
.letter .search{
    float: left;
    position: relative;
}
.letter .search .btn{
    position: absolute;
    top: 10px;
    left: 0.4rem;
    color: #cdcdcd;
    font-size: 0.25rem;
    font-weight: normal;
}
.letter input{
    float: left;
    width: 3.5rem;
    height: 0.6rem;
    background: #eff1f4;
    border-radius: 20px;
    border:none;
    margin-top: 0.23rem;
    margin-left: 0.3rem;
    padding-left: 0.6rem;
    outline: none;
}
</style>
