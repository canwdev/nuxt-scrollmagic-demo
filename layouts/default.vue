<template>
  <nuxt />
</template>

<script>
  export default {
    mounted() {
      if (process.client) {
        this.adjustMobile()
        this.resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
        window.addEventListener(this.resizeEvt, this.adjustMobile)
      }
    },
    methods: {
      adjustMobile() {
        let clientWidth = document.documentElement.clientWidth
        this.$store.commit('setIsMobile', clientWidth <= 567)
      }
    },
    beforeDestroy() {
      window.removeEventListener(this.resizeEvt, this.adjustMobile)
    }
  }
</script>

<style>

</style>
