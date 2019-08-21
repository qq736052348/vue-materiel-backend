<template>
    <div class="container">
        <Row>
            <Col span="6"  v-for="(item,index) in tabSetting" > 
                <div class="wrapper" :class="currentIndex == index && 'active'" @click="handleLinkRouter(index,item.path)">
                    <Icon :type="item.icon" size="24" />
                    <div class="text">{{item.name}}</div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import tabSetting from '@/assets/js/tabSetting'

export default {
  data () {
    return {
        tabSetting,
        currentIndex:0
    }
  },
  methods: {
      handleLinkRouter (index,path) {
        this.currentIndex = index;
        this.$router.replace({path})
      }
  }
}
</script>

<style scoped lang="scss">
    .container{
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        text-align: center;
        font-size:$fzsection;
        padding:.2rem 0;
        border-top:1px solid $border;
        background:$bg;
        .wrapper{
            height:100%;
            width:100%;
            &.active{
                color:$darkPrimary
            }
        }
    }
</style>
