<template>
    <div id="app">
        <pageTitle/>
        <router-view></router-view>
    </div>
</template>
<script>
import pageTitle from '@/components/title'
export default {
  name: 'App',
  data () {
    return {
    }
  },
   components: {
      pageTitle
  },
  methods: {
  }
}
</script>
<style lang="scss">
</style>
