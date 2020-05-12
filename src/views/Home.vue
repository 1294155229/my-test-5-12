<template>
  <div class="home">
    <!-- 搜索区域 -->
    <searce-header></searce-header>
    <!-- 导航区域 -->
    <nav-list></nav-list>
  </div>
</template>

<script>
import SearceHeader from "../components/SearceHeader";
import NavList from "../components/NavList";
export default {
  components: {
    SearceHeader,
    NavList
  }
};
</script>

<style scoped>
.home {
  width: 7.5rem;
  height: auto;
}
.contener {
  padding: 0.32rem;
}
</style>>
