<template>
  <div id="app">
     <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo hidden-md-and-down"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1"><router-link :to="{ path: '/bill' }">账单明细</router-link></el-menu-item>
      <el-menu-item index="2"><router-link :to="{ path: '/statistics' }">数据统计</router-link></el-menu-item>
      <el-menu-item index="3" disabled>我的用户</el-menu-item>
    </el-menu>
    <router-view/>
     <footer class="hidden-lg-and-up">
       <div class="s sss"><router-link :to="{ path: '/bill' }" class="ss">账单明细</router-link></div>
       <div class="s"><router-link :to="{ path: '/statistics' }" class="ss">数据统计</router-link></div>
     </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
footer{
        position:fixed;
        width: 100%;
        bottom:0;
        height: 8%;
        background-color: rgb(84, 92, 100);;
    }
    .s {
      float: left;
      width: 50%;
      height: 100%;
      display:table;
    }
    .ss{
      font-size: 2rem;
      color: #fff;
      line-height: 100%;
      display:table-cell;
      vertical-align:middle;
    }
    .sss {
        border-right:2px solid #fff;
    }

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
