<template>
  <div class="links">
    <NLink
      v-for="(item, index) in links"
      :key="index"
      :to="item.to"
      target="_blank"
    >{{ item.title }}</NLink>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {title: 'demo 1', to: '/demo_1'},
          {title: 'iphone xs', to: '/demo_2_iphone_xs'},
          {title: 'demo 3', to: '/demo_3'},
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .links {
    max-width 500px
    margin 30px auto
    background $colorGrey
    border-radius $borderRadius
    display flex
    padding 10px
    box-sizing border-box
    flex-wrap wrap

    a {
      display inline-flex
      align-items: center;
      justify-content: center;
      width: 100px
      height: 50px
      text-align: center;
      color: $colorBlack
      text-decoration: none

      &:hover {
        color: $colorTheme
        background $colorWhite
        border-radius $borderRadius
      }
    }
  }
</style>
