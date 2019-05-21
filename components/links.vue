<template>
  <div class="links">
    <NLink to="/">首页</NLink>
    <NLink to="/demo01">demo01</NLink>
  </div>
</template>

<style lang="stylus" scoped>
  .links
    position fixed
    z-index 999
    top: 0
    left: 0
    right: 0
    background rgba(0, 0, 0, 0.6)
    padding 10px 10px
    a
      color: #fff
      &:hover
        color: $theme_color
    
    .__tmp
      display none
</style>
