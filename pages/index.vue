<template>
  <!--  假文 by http://more.handlino.com/-->
  <div class="page-index page-common">
    <div style="height: 100vh; position: relative; z-index: 0">
      <div id="sectionHero" class="section-row fvh fcenter section--hero">
        <div class="container">
          <div class="intro">
            <h1>00. Hello World</h1>
            <p>他，在學期末之後，架構了一個網站寫好原始碼之後過來打分數，看似完美，在學期末之後，但從頭到尾那些網頁也不是他自己寫的</p>
          </div>
        </div>
      </div>
    </div>

    <div id="section01" class="section-row fvh bg-grey section--01">
      <div class="block block1"></div>
      <div class="block block2"></div>

      <div class="container">
        <div class="intro">
          <h1>01. 還不賴，還不賴，還不賴？</h1>
          <p class="para">
            還不賴，還不賴，還不賴，還不賴？我們多長一歲年紀往往只是加重我們頭上的枷，同時她們講你生前的故事，留下在我們心頭的只是些揶揄的鬼影；我們在這道上偶爾停步迴想的時候，耳不塞，扮一個漁翁，圓滿這全程的寂寞，雪西裡與普陀山，你才知道靈魂的愉快是怎樣的，單是活著的快樂是怎樣的，身影似的不可解脫。</p>
        </div>
      </div>
    </div>

    <div class="section-row fvh">
      <div id="trackAnim" class="bg-layer">

        <div class="track-photo">
          <div class="layer ly01">3</div>
          <div class="layer ly02">2</div>
          <div class="layer ly03">1</div>
        </div>

      </div>
    </div>

    <div class="section-row fvh fcenter section--02">
      <div class="container">
        <div class="intro">
          <h1>02. 看似完美，…</h1>
          <p>
            請他的交通大學資訊工程系朋友幫忙他，在學期末之後，架構了一個網站寫好原始碼之後過來打分數，看似完美，在學期末之後，但從頭到尾那些網頁也不是他自己寫的，我一個商學院的朋友打給我，而他想幫我介紹一下，混合這些，或許整個世界根本沒有感覺，以及進入最穩定大公司當工程師的機會？</p>
        </div>
      </div>
    </div>

    <div class="section-row fvh2 bg-grey section--03">
      <div class="bg-layer">
        <div class="container">
          <div class="box"></div>
        </div>
      </div>

      <div class="fg-layer">
        <div class="container">
          <div class="intro">
            <h1>03. 生，沒有錢，早起的蟲蟲被鳥吃。</h1>
            <p>
              他那資質的敏慧，這次我再來歐洲你已經早一個星期回去，誰不曾擁著半夜的孤衾飲泣？別人可以拷貝我的模式，誠信絕對不是一種銷售，記住，創業時期千萬不要找明星團隊，就要找一群人去寫，現在颱風帶來的風，如果九二一發生在台北市，但並不編列特別預算，可是這裡面很多都無關，還要求發卡公司要寄送帳單，以後不會有哪一個政黨、哪一位委員、或哪一個政府部門，這都不是事實，還是將來要用另外一套系統，不會去考慮調漲香菸的價錢以做為來源。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  if (process.client) {
    // 引入GSAP
    var {TweenMax, TimelineMax} = require('gsap')

    // 引入ScrollMagic
    var ScrollMagic = require('scrollmagic')
    // 使用imports-loader解决webpack神坑
    // https://www.reddit.com/r/Frontend/comments/4dshb8/new_to_webpack_problem_using_scrollmagic_gsap/
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min')
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min')
  }

  export default {
    mounted() {
      if (process.client) {
        this.$nextTick(() => {

          this.initScrollMagic()

        })
      }
    },

    methods: {
      // 初始化所有滚动动画
      initScrollMagic() {
        this.scrController = new ScrollMagic.Controller()
        console.log('创建 ScrollMagic 控制器', this.scrController)

        // sectionHero
        ;(() => (
          new ScrollMagic.Scene({
            triggerElement: '#sectionHero',
            duration: '100%',
            triggerHook: 0
          }).setPin('#sectionHero')
            .setTween('#sectionHero .container', {
              // y: '-300%',
              scale: 0.8,
              color: '#fff'
            })
            // .addIndicators({name: '#sectionHero'})
            .addTo(this.scrController)
        ))()

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


        ;(()=>{
          let photosSl = '#trackAnim .track-photo'
          new TimelineLite()
            .set(photosSl, {
              rotationX: '0deg',
              ease: Power1.easeOut
            })
            .set(photosSl+' .layer', {
              rotationY: '0deg',
              ease: Power1.easeOut
            })

          let tlPhotos = new TimelineLite()
            .to(photosSl, 2, {
              rotationX: '-15deg',
              ease: Power1.easeOut
            })
            .to(photosSl+' .layer', 2, {
              rotationY: '-45deg',
              ease: Power1.easeOut
            }, '-=2')
            .to(photosSl, 2, {
              right: '15%',
              ease: Power1.easeOut,
            },)
            .to(photosSl+' .ly03', 2.1, {
              left: '-50%',
              opacity: 0.8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
            })
            .to(photosSl+' .ly02', 2.8, {
              left: '-25%',
              opacity: 0.8,
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
            }, '-=2.0')
            .to(photosSl+' .layer', 8, {

            })

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

    beforeDestroy() {
      // 销毁ScrollMagic
      if (this.scrController) {
        this.scrController.destroy(true)
        console.log('销毁 ScrollMagic 控制器', this.scrController)
      }

    }
  }
</script>

<style lang="stylus">
  .page-index
    overflow-x hidden
    .section-row
      padding 50px 10px
      box-sizing border-box
      line-height: 1.5
      position: relative


      &.section--hero
        visibility visible

      .track-photo
        position: absolute
        top 22%
        right 40%
        width 486px
        height 598px
        transform-style preserve-3d
        //transform rotateX(-15deg) rotateY(-45deg)
        .layer
          position: absolute
          top 0
          left 0
          width 100%
          height 100%
          font-size 300px
          display flex
          align-items center
          justify-content center
          transform rotateY(-45deg)
          transform-style preserve-3d
          will-change transform
          color: #fff

          &:nth-child(1)
            background #ff5252
          &:nth-child(2)
            background #00c853
          //transform scale(0.8)
          &:nth-child(3)
            background #ffea00
      //transform scale(0.5)

      &.section--01
        position: relative
        z-index 1
        .block
          position: absolute
          width 50px
          height 50px
          background magenta
          box-shadow 0 3px 10px rgba(0,0,0,.23)

        .block1
          top 40%
          left 0
          background #ff80ab

        .block2
          top 50%
          right 0
          background #1de9b6

      &.section--03
        .bg-layer
          height 100vh
          position sticky
          .box
            background: repeating-linear-gradient(30deg,
            #fff, #fff 15px, #f8bbd0 0, #f8bbd0 30px)

            width 200px
            height 200px
            margin 50px
            border-radius 20px
            box-shadow 0 0 50px #b3b3b3
        .fg-layer
          .intro
            padding-top: 100vh
</style>
