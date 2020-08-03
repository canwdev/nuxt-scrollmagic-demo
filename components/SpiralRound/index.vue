<template>
  <div
    class="spiral-round"
    :class="[huashao ? 'huashao': null, 'spiral-type-'+type]"
    :style="{
      width: radius,
      height: radius
    }"
    title="花里胡哨的特效而已。"
  ></div>
</template>

<script>
  export default {
    name: 'SpiralRound',
    props: {
      huashao: { // 花里胡哨特效
        type: Boolean,
        default: false
      },
      radius: {
        type: [String, Number],
        default: '200px'
      },
      type: {
        type: [String, Number],
        default: 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .spiral-round
    display inline-block
    width 200px
    height 200px
    margin 20px
    border-radius 50%
    box-shadow 0 0 50px rgba(0, 0, 0, 0.33) inset

    *
      transition all 1s

    &.huashao
      cursor: pointer;

      &:before
        $wid = 30px
        width $wid
        height $wid
        position: absolute
        content ' '
        border-radius 50%
        background $colorBlack

      &:after
        $wid = 15px
        position: absolute
        top 0
        left $wid
        border-left-width ($wid * 5)
        border-top-width $wid
        border-bottom-width $wid
        border-style solid
        border-color rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) $colorBlack
        content ' '
        transform-origin left
        animation spin 0.5s infinite linear

    &.spiral-type-1
      background: url("./img/spiral03.jpg") no-repeat center / cover
      animation spin 5s infinite linear reverse

      &.huashao
        &:hover
          animation-duration 1s

        &:active
          animation-duration 2s
          background-image url("./img/spiral02.jpg")

    &.spiral-type-2
      background: url("./img/spiral01.png") no-repeat center / cover
      animation spin 3s infinite linear

      &.huashao
        &:active
          background-image url("./img/spiral04.jpg")
          animation-direction reverse

        &:hover
          animation-duration 1s

        &:before
          $wid = 10px
          width $wid
          height $wid

        &:after
          $wid = 5px
          animation-duration 0.2s
          left $wid
          border-left-width ($wid * 5)
          border-top-width $wid
          border-bottom-width $wid

</style>
