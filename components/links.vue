<template>
  <div class="links">
    <NLink to="/">首页</NLink>
    <NLink to="/ipxs01">ipxs01</NLink>
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
    padding 0 10px
    line-height $global_nav_height
    a
      color: #fff
      &:hover
        color: $theme_color
    
    .__tmp
      display none
</style>
