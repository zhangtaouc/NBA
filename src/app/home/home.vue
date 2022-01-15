<style lang="css" scoped src="./home.css"></style>
<template>
  <div class="NBA">
    <!-- 内容区域 -->
    <div class="content">
      <!-- 赛程 -->
      <div class="schedule">
        <commonHeader :title="title"/>
      </div>
    </div>
    <div class="tab">
      <div class="schedule">赛程</div>
      <div class="rank">排名</div>
      <div class="news">新闻</div>
      <div class="me">我</div>
    </div>
  </div>
</template>
<script>
module.exports = require("./home.js");
</script>