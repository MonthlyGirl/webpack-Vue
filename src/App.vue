<template>
  <div class="appson">
    <div class="logo">
      <img :src="logo" alt="">
      <a href="https://guestljz.gitee.io/2021/01/19/webpack/"></a>
      <p v-text="msg"></p>
      <a href="https://guestljz.gitee.io/2021/01/19/webpack/">guetsljz Blog</a>
    </div>
    
  </div>
</template>
<script>
import logo from './asset/logo.png'
export default {
  data() {
    return {
      msg:"webpack构建Vue环境",
      logo
    }
  },
}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
 .logo{
   width: 100%;
   height: 100%;
   text-align:center;
   &>img{
     /* display: inline-block; */
     width: 500px;
     height: 500px;
    
   }
   & > a{
     width: 100%;
     display:inline-block;
     height: 10px;
   }
 }
</style>