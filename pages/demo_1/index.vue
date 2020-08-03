<template>
  <div class="page-index page-common">
    <div style="height: 100vh; position: relative; z-index: 0">
      <div id="sectionHero" class="section-row height-100vh flex f-aic section-hero">
        <div class="container-auto">
          <div class="intro">
            <h1>00. 给岁月以文明，而不是给文明以岁月。</h1>
            <p>其实，从这个位置上看，整个宇宙的运动都被距离抹去了，远去的太阳和飞船前方的银河系星海也处于永恒的静止中，时间似乎停止了流动。</p>
          </div>
        </div>
      </div>
    </div>

    <div id="section01" class="section-row height-100vh bg-grey section-01">
      <div class="block block1"></div>
      <div class="block block2"></div>

      <div class="container-auto">
        <div class="intro">
          <h1>01. 方寸之间，深不见底啊。</h1>
          <p class="para">
            不同维度之间没有黑暗森林，低维威胁不到高维，低维的资源对高维没有用。但同维的都是黑暗森林。死亡是唯一一座永远亮着的灯塔，不管你向哪里航行，最终都得转向它指引的方向。一切都会逝去，只有死神永生。</p>
        </div>
      </div>
    </div>

    <div class="section-row height-100vh">
      <div id="trackAnim" class="bg-layer">

        <div class="track-photo">
          <div class="layer ly01">3</div>
          <div class="layer ly02">2</div>
          <div class="layer ly03">1</div>
        </div>

      </div>
    </div>

    <div class="section-row height-100vh flex f-aic section-02">
      <div class="container-auto">
        <div class="intro">
          <h1>02. 不择手段地前进！</h1>
          <p>
            任何东西都不可能挡住它后面的东西，任何封闭体的内部也都是能看到的。由于光速不可超越，如果光出不去，那就什么都出不去，没有任何东西可以飞出太阳系黑洞的视界，这个星系将与宇宙的其余部分彻底隔绝，变成一个绝对封闭的世界。</p>
        </div>
      </div>
    </div>

    <div class="section-row bg-grey section-03">
      <div class="sticky">
        <div class="container-auto">
          <h1 class="box huashao box1">在中国，任何超脱飞扬的思想都会砰然坠地，因为现实的引力太沉重了。</h1>
        </div>
      </div>

      <div class="content">
        <div class="container-auto">
          <div class="intro">
            <h1>03. 红岸基地原址</h1>
            <p>
              叶文洁不知道，就在这时，地球文明向太空发出的第一声能够被听到的啼鸣，已经以太阳为中心，以光速飞向整个宇宙。恒星级功率的强劲电波，如磅礴的海潮，此时已越过了木星轨道。 这时，在12000兆赫波段上，太阳是银河系中最亮的一颗星。</p>
          </div>
        </div>
      </div>

    </div>


    <div class="section-row height-100vh">
      <div class="container-auto">
        <div class="intro">
          <h1>04. 不要返航，这里不是家！</h1>
          <p>
            宇宙的熵在升高，有序度在降低，像平衡鹏那无边无际的黑翅膀，向存在的一切压下来，压下来。可是低熵体不一样，低熵体的熵还在降低，有序度还在上升，像漆黑海面上升起的磷火，这就是意义，最高层的意义，比乐趣的意义层次要高。要维持这种意义，低熵体就必须存在和延续。
            <NLink to="/">Back Home</NLink>
          </p>

          <SpiralRound :huashao="true"/>
          <SpiralRound :huashao="true" type="2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import SpiralRound from '~/components/SpiralRound'

  if (process.client) {
    // Import GSAP3
    const {gsap} = require("gsap");
    gsap.install(window); // Fix ScrollMagic with GSAP3

    // Import ScrollMagic
    var ScrollMagic = require('scrollmagic')
    // 使用 imports-loader 解决 webpack神坑
    // https://www.reddit.com/r/Frontend/comments/4dshb8/new_to_webpack_problem_using_scrollmagic_gsap/
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min')
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min')
  }

  export default {
    components: {
      SpiralRound,
    },
    mounted() {
      if (process.client) {
        this.$nextTick(() => {

          this.initScrollMagic()

        })
      }
    },
    beforeDestroy() {
      // 销毁ScrollMagic
      if (this.scrController) {
        this.scrController.destroy(true)
        console.log('销毁 ScrollMagic 控制器', this.scrController)
      }

    },

    computed: {
      ...mapState(['isMobile'])
    },

    methods: {
      // 初始化所有滚动动画
      initScrollMagic() {
        this.scrController = new ScrollMagic.Controller()
        console.log('创建 ScrollMagic 控制器', this.scrController)

        // sectionHero
        new ScrollMagic.Scene({
          triggerElement: '#sectionHero',
          duration: '100%',
          triggerHook: 0
        }).setPin('#sectionHero')
          .setTween('#sectionHero .container-auto', {
            // y: '-300%',
            scale: 0.8,
            color: '$colorWhite'
          })
          // .addIndicators({name: '#sectionHero'})
          .addTo(this.scrController)



        // section01
        ;(() => {

          // 一些随意的动画
          let h1Selector = '#section01 h1'
          let tlH1 = new TimelineMax()
            .from(h1Selector, 10, {
              scale: 0,
              transformOrigin: 'left',
              autoAlpha: 0,
              color: '#536DFE',
              rotation﻿: -180
            })
            .to(h1Selector, 1, {
              color: '#f50057',
              transformOrigin: 'left',
              scale: '1.5'
            })
          let tlP = new TimelineMax()
            .from('#section01 p', 30, {
              autoAlpha: 0,
              delay: 10
            })
          let timeline1 = new TimelineMax().add([tlH1, tlP])


          new ScrollMagic.Scene({
            triggerElement: '#section01',
            duration: '35%',
          }).setPin(h1Selector)
            .setTween(timeline1)
            // .addIndicators({name: '#section01'})
            .addTo(this.scrController)


          let b1Selector = '#section01 .block1'
          let tlBlock1 = new TimelineMax()
            .to(b1Selector, 1, {
              left: '95%',
              ease: Bounce.easeIn
              // repeat: 2,
              // yoyo: true
            })
          let b2Selector = '#section01 .block2'
          let tlBlock2 = new TimelineMax()
            .to(b2Selector, 1, {
              right: '95%',
              ease: Bounce.easeOut
            })


          let timeline2 = new TimelineMax().add([tlBlock1, tlBlock2])


          new ScrollMagic.Scene({
            triggerElement: '#section01',
            duration: '100%',
          })
            .setTween(timeline2)
            // .addIndicators({name: '#section01 2'})
            .addTo(this.scrController)

        })()


        ;(() => {
          let photosSl = '#trackAnim .track-photo'
          new TimelineLite()
            .set(photosSl, {
              rotationX: '0deg',
              ease: Power1.easeOut
            })
            .set(photosSl + ' .layer', {
              rotationY: '0deg',
              ease: Power1.easeOut
            })

          let tlPhotos = new TimelineLite()
            .to(photosSl, 2, {
              rotationX: '-15deg',
              ease: Power1.easeOut
            })
            .to(photosSl + ' .layer', 2, {
              rotationY: '-45deg',
              ease: Power1.easeOut
            }, '-=2')

          if (this.isMobile) {
            tlPhotos.to(photosSl, 2, {
              right: '-5%',
              ease: Power1.easeOut
            },)
          } else {
            tlPhotos.to(photosSl, 2, {
              right: '15%',
              ease: Power1.easeOut
            },)
          }

          tlPhotos.to(photosSl + ' .ly03', 2.1, {
            left: '-50%',
          })
            .to(photosSl + ' .ly02', 2.8, {
              left: '-25%',
            }, '-=2.0')
            .to(photosSl, 8, {})

          new ScrollMagic.Scene({
            triggerElement: '#trackAnim',
            duration: '100%',
            triggerHook: 0
          })
            .setPin('#trackAnim')
            .setTween(tlPhotos)
            // .addIndicators({name: 'trackAnim'})
            .addTo(this.scrController)


        })()
      }

    },


  }
</script>


<style lang="stylus">
  @import "index.styl"
</style>


