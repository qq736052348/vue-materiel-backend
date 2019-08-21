<template>
    <div class="container" v-if="!titleOpt.noTitle">
        <div class="back" @click="goBack">
            <Icon type="ios-arrow-back" color="white" size="24" v-if="titleOpt.isShowBack"/>
        </div>
        <div class="content">{{titleOpt.content}}</div>
        <div class="more">
            <Icon :type="titleOpt.moreIcon" color="white" size="24" v-if="titleOpt.moreIcon"/>
        </div>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

export default {
  data () {
    return {
    }
  },
  created(){
  },
  computed: {
    ...mapState({
        titleOpt: state => {
          return state._global.titleOpt
        }
    })
  },
  methods: {
    ...mapMutations("_global",[
      'editCurrentTitleOpt',
    ]),
    goBack () {
      this.$router.back()
    }
  },
}
</script>

<style scoped lang="scss">
.container{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:.8rem;
  background:$darkPrimary;
  display:flex;
  align-items: center;
  padding:0 .5rem;
  justify-content: space-between;
  z-index:99;
  .content{
    font-size:16px;
    color:white;
  }
}
</style>
