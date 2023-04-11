20230411更新：推荐使用 GSAP 的 ScrollTrigger 插件来代替 ScrollMagic

- GSAP [ScrollTrigger](https://greensock.com/scrolltrigger/)
	- [一些横向滚动示例](https://greensock.com/forums/topic/28457-gsap-scrolltrigger-horizontal-scroll-timeline-animation/)
	- https://css-tricks.com/gsap-flip-plugin-for-animation/
	- https://greensock.com/docs/v3/GSAP/Timeline
	- https://greensock.com/st-mistakes/
	- https://greensock.com/mistakes/

---

# Use ScrollMagic & GSAP in Nuxt.js Demo

> 在 Nuxt.js 中使用 ScrollMagic 与 GSAP

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## Initial configuration

### package.json

```json
{
"dependencies": {
    "gsap": "^2.1.2",
    "imports-loader": "^0.8.0",
    "scrollmagic": "^2.0.6"
  }
}
```

### index.vue

```html
<script>
  if (process.client) {
    // Import GSAP
    var { TweenMax, TimelineMax } = require('gsap')

    // Import ScrollMagic
    var ScrollMagic = require('scrollmagic')
    // 使用 imports-loader 解决 webpack神坑
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min')
    require('imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min')
  }

  export default {
    methods: {
      initScrollMagic() {
        this.scrController = new ScrollMagic.Controller()
        console.log(this.scrController)
      }
    }
  }
</script>
```

## Reference

- https://www.reddit.com/r/Frontend/comments/4dshb8/new_to_webpack_problem_using_scrollmagic_gsap/
