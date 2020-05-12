<template>
  <div class="search contener">
    <div class="search-logo">
      <img src="../images/路径 5420@2x.png" alt />
    </div>
    <div class="search-box">
      <!-- <p>MANUATELER 箭头包6折起</p> -->
      <input type="text" placeholder="MANUATELER 箭头包6折起" />
      <img src="../images/搜索@2x.png" alt />
    </div>
  </div>
</template>

<style scoped>
.contener {
  padding: 0.32rem;
}
.search {
  width: 7.5rem;
  height: 1.28rem;
  background: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  padding-top: 0.45rem;
  padding-bottom: 0.07rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search-logo {
  width: 0.42rem;
  height: 0.3rem;
  position: relative;
}
.search-logo img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.search-box {
  width: 6.24rem;
  height: 0.76rem;
  box-sizing: border-box;
  padding-left: 0.85rem;
  background: rgba(237, 237, 237, 1);
  border-radius: 0.38rem;
  display: flex;
  align-items: center;
}
.search-box input {
  width: 3.72rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-weight: 400;
  line-height: 0.4rem;
  color: rgba(153, 153, 153, 1);
  background: rgba(237, 237, 237, 1);
  outline: none;
  border: none;
}
.search-box img {
  width: 0.37rem;
  height: 0.37rem;
  margin-left: 0.9rem;
}
</style>