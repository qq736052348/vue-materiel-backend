<template>
    <div class="workbench">
        <Card class="wrapper" :padding="0" >
            <CellGroup class="list">
                <Cell extra="13" class="listbar" to="/list?name=workLog">
                    <Icon type="ios-albums-outline" size="24"/>
                    <span>工作日志</span>
                    <Badge :count="10" slot="extra" class="badge"/>
                    <Icon type="ios-arrow-forward"  slot="arrow" size="24" />
                </Cell>
                <Cell extra="13" class="listbar"  to="/list?name=leaveApply">
                    <Icon type="ios-document-outline" size="24" />
                     <span>请假申请</span>
                    <Badge :count="10" slot="extra" class="badge"/>
                    <Icon type="ios-arrow-forward"  slot="arrow" size="24"/>
                </Cell>
                <Cell  extra="13" class="listbar"  to="/list?name=materialOut">
                   <Icon type="ios-construct-outline" size="24"/>
                    <span>材料出库单</span>
                    <Badge :count="10" slot="extra" class="badge"/>
                    <Icon type="ios-arrow-forward"  slot="arrow" size="24"/>
                </Cell>
                <Cell extra="13" class="listbar"  to="/list?name=toolOut">
                   <Icon type="md-construct" size="24"/>
                    <span>工具出库单</span>
                   <Badge :count="10" slot="extra" class="badge"/>
                   <Icon type="ios-arrow-forward"  slot="arrow" size="24"/>
                </Cell>
            </CellGroup>
        </Card>
    </div>
</template>
<script>
import {getMyTask} from '@/store/modules/api'

export default {
  data () {
    return {
      myTaskData:null
    }
  },
  async created () {
      this.myTaskData =  await getMyTask()
      console.log(this.myTaskData,'this.myTaskData')
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.workbench{
  .wrapper{
    box-shadow: none;
    // height:100vh;
    background:$bg;
    border:none;
    .list{
      .listbar{
        padding:.3rem;
        margin:.2rem;
        border:1px solid $border;
        .badge{
          margin-right:.2rem
        }
      }
    }
  }
}
</style>
