<template>
  <div class="home-page">
    <GlobalLinks></GlobalLinks>
  </div>
</template>

<script>
  import GlobalLinks from '~/components/GlobalLinks'

  export default {
    components: {
      GlobalLinks
    },
  }
</script>

<style scoped>
  .home-page {
    margin-top: 100px;
  }
</style>
