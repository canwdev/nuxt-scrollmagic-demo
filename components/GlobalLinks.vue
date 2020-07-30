<template>
  <div class="links-container">
    <h1>Demos</h1>
    <div class="links-wrap">
      <NLink
        class="link-item"
        v-for="(item, index) in links"
        :key="index"
        :to="item.to"
      >{{ item.title }}
      </NLink>
    </div>

    <h1>Documents</h1>
    <div class="links-wrap">
      <ul>
        <li><a target="_blank" href="https://scrollmagic.io/">ScrollMagic</a></li>
        <li><a target="_blank" href="https://greensock.com/3-migration">GSAP3 升级指南</a></li>
        <li><a target="_blank" href="https://greensock.com/gsap3-features">Top 5 Features of GSAP 3</a></li>
      </ul>
    </div>
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
  .links-container {
    max-width 500px
    margin 0 auto
  }
  .links-wrap {
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
      height: 50px
      text-align: center;
      color: $colorBlack
      text-decoration: underline
      padding 0 10px

      &.link-item {
        text-decoration: none
        width: 100px
      }

      &:hover {
        color: $colorTheme
        background $colorWhite
        border-radius $borderRadius
      }
    }

    ul {
      width: 100%
    }
  }
</style>
