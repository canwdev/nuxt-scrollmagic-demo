<template>
  <div class="page-common cupertino-page black">

    <div class="section-row fcenter fvh section--00">
      <div class="container">
        <div class="intro">
          <h1 style="text-align: center;">大屏幕上见。</h1>
        </div>
      </div>
    </div>

    <div id="sfx1" class="section-row section--01">
      <div class="container intro-wrap">
        <div class="intro texture texture-1">
          <h2>超视网膜显示屏，两款大作一起登场。</h2>
          <p>它们经过精心定制，是 iPhone 色彩精准度最高的 OLED 显示屏，支持 HDR 显示，并能呈现真实深邃的黑色。其中，iPhone XS Max 更拥有 iPhone 迄今最大的显示屏。</p>
          <div class="manifesto-shadow"></div>
        </div>
      </div>

      <div class="compare-wrap">
        <div class="hardware-aligner">

          <div class="iphone8-models">

          </div>

          <div class="iphonexs-models">
            <div class="hardware scaling-hardware">
              <img src="~/assets/img/cupertino/models/xs-scaling.png">
            </div>

            <div class="sliding-hardware">

              <div class="hardware hardware-iphonexsmax">
                <img src="~/assets/img/cupertino/models/hardware_display_iphonexsmax_gold_portrait_large-1.png">
              </div>

              <div class="hardware hardware-iphonexs">
                <img src="~/assets/img/cupertino/models/hardware_display_iphonexs_gold_portrait_large-1.png">
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>

    <div class="section-row fcenter fvh  section--02">
      <div class="container">
        <div class="intro texture texture-2">
          <h2>材质样样出众。</h2>
          <p>iPhone 迄今最坚固耐用的玻璃面板，由原子级工艺造就的夺目新款金色外观，精密打造的手术级不锈钢边框，以及更胜以往的抗水防尘特性<sup>2</sup>。</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  if (process.client) {
    var {TweenMax, TimelineMax} = require('gsap')

    var ScrollMagic = require('scrollmagic')
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min')
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min')
  }

  export default {
    head: {
      title: 'Phone Xs - Apple'
    },
    mounted() {
      if (process.client) {
        this.initScrollMagic()
      }
    },
    beforeDestroy() {
      if (this.scrController) {
        this.scrController.destroy(true)
      }
    },
    methods: {
      initScrollMagic() {
        this.scrController = new ScrollMagic.Controller()

        ;(() => {
          // 第一阶段：放大后缩小
          let tlShadow = new TimelineMax()
            .from('#sfx1 .manifesto-shadow', 1, {autoAlpha: 0})

          let scalingSl = '#sfx1 .scaling-hardware'
          let tlScaling = new TimelineMax()
            .from(scalingSl, 1, {width: '100%', transformOrigin: 'top'})
            .to(scalingSl, 1, {yPercent: -20}, '-=1')
            .to(scalingSl, 1, {yPercent: 0}, '1')

          let timeline1 = new TimelineMax().add([tlShadow, tlScaling])

          let sfx1CwSl = '#sfx1 .compare-wrap'
          new ScrollMagic.Scene({
            triggerElement: sfx1CwSl,
            duration: '100%',
            triggerHook: 1
          })
            .setTween(timeline1)
            .addIndicators()
            .addTo(this.scrController)

          // 第二阶段：固定屏幕，文字显示，Xs和XsMax展开，文字消失，出现Phone8和底部文字

          let xsMaxSl = '#sfx1 .hardware-iphonexsmax'
          let xsSl = '#sfx1 .hardware-iphonexs'
          new TimelineMax()
            .set(xsMaxSl, {left: '35.6%', autoAlpha: 0})
            .set(xsSl, {right: '36%', autoAlpha: 0})

          new ScrollMagic.Scene({
            triggerElement: sfx1CwSl,
            duration: '200%',
            triggerHook: 0
          })
            .setPin(sfx1CwSl)
            .addIndicators()
            .addTo(this.scrController)
            .on('enter', () => {
              new TimelineMax().to(scalingSl, 0.5, {autoAlpha: 0})
              new TimelineMax().to(xsMaxSl, 0.5, {autoAlpha: 1})
              new TimelineMax().to(xsSl, 0.5, {autoAlpha: 1})
            })
            .on('leave', () => {
              new TimelineMax().to(scalingSl, 0.5, {autoAlpha: 1})
              new TimelineMax().to(xsMaxSl, 0.5, {autoAlpha: 0})
              new TimelineMax().to(xsSl, 0.5, {autoAlpha: 0})
            })

        })()
      }

    },
  }
</script>

<style lang="stylus" scoped>
  @import "~assets/css/cupertino.styl"
  @import "./style.styl"
</style>
