<template>
  <div class="nav">
    <ul>
      <li
        v-for="(list,index) in navList"
        :key="list + index"
        @click="handelClick(index)"
        :class="{active:index == showIndex}"
      >{{list}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        "今日特卖",
        "品牌推荐",
        "美妆个护",
        "食品饮料",
        "服饰箱包",
        "我来测试",
        "我来测试",
        "我来测试"
      ],
      showIndex: 0
    };
  },
  methods: {
    handelClick(index) {
      this.showIndex = index;
    }
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 0.93rem;
}
ul {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: scroll;
  box-sizing: border-box;
  padding-left: 0.33rem;
  padding-top: 0.27rem;
  padding-bottom: 0.04rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
ul::-webkit-scrollbar {
  display: none;
}
li {
  height: 100%;
  font-size: 0.28rem;
  font-weight: 400;
  line-height: 0.5rem;
  color: rgba(24, 24, 24, 1);
  margin-right: 0.36rem;
  height: 100%;
  box-sizing: border-box;
}
.active {
  border-bottom: 0.05rem solid rgba(234, 63, 74, 1);
}
</style>