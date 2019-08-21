<template>
    <div class="container">
            <router-view></router-view>
        <tabBar/>
    </div>
</template>

<script>
import tabBar from '@/components/tabBar'

export default {
  data () {
    return {
        routerName:"",
        pageTitleOpt: {},
        
    }
  },
  async created () {
   
  },
  methods: {
  },
  components: {
      tabBar
  },
}
</script>

<style scoped lang="scss">
.container{
    padding:1rem 0;
}
</style>
