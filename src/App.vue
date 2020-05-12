<template>
  <div id="app">
    <div class="nav">
      <router-link tag="div" to="/">
        <span class="iconfont">&#xe61e;</span>首页
      </router-link>
      <router-link tag="div" to="/find">
        <span class="iconfont">&#xe636;</span>发现
      </router-link>
      <router-link tag="div" to="/shop">
        <span class="iconfont">&#xe60f;</span>店铺
      </router-link>
      <router-link tag="div" to="/cart">
        <span class="iconfont">&#xe658;</span>购物车
      </router-link>
      <router-link tag="div" to="/my">
        <span class="iconfont">&#xe758;</span>我
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 1814336 */
  src: url("https://at.alicdn.com/t/font_1814336_73mnfq1wedi.eot");
  src: url("https://at.alicdn.com/t/font_1814336_73mnfq1wedi.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1814336_73mnfq1wedi.woff2")
      format("woff2"),
    url("https://at.alicdn.com/t/font_1814336_73mnfq1wedi.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1814336_73mnfq1wedi.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1814336_73mnfq1wedi.svg#iconfont")
      format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.nav {
  width: 7.5rem;
  height: 0.98rem;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  bottom: 0;
  left: 0;
  margin-top: 1.07rem;
  display: flex;
  font-size: 0.2rem;
}
.nav > div {
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.2rem;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.nav span {
  font-size: 0.4rem;
}
.nav > div.router-link-exact-active {
  color: rgba(234, 63, 74, 1);
}
</style>
