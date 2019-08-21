<template>
    <div class="login">
        <div class="title">D H O A</div>
        <div class="form">
            <Row type="flex" justify="center" class="input-label">
                <Col>
                    <Input placeholder="Enter text" style="width: auto" v-model="user.account" >
                        <Icon type="ios-contact" slot="prefix" />
                     </Input>
                </Col>
            </Row>
            <Row type="flex" justify="center"  class="input-label">
                <Col>
                    <Input placeholder="Enter text" style="width: auto" type="password" v-model="user.password">
                         <Icon type="md-lock" slot="prefix" />
                    </Input>
                </Col>
            </Row>
            <Row  type="flex" justify="center"  class="btn-submit">
                <Col span="16">
                    <Button  type="primary" long :loading="btnLoadding" @click="handleLogin">登 陆</Button>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState } from 'vuex'
import {getUserLogin} from '@/store/modules/api';

import {validateForm} from '@/utils'
export default {
    data () {
        return {
            user: {
                account: "",
                password: ""
            },
            btnLoadding:false
        }
    },
    computed: {
        ...mapState('login',['userInfo'])
    },
   async created(){
    },
    methods: {
        ...mapActions('login',['userLogin']),
        async handleLogin () {
            let formData = {
                account: this.user.account, 
                password: this.user.password
            }
            let errorItem = validateForm().getValidateResult(formData).find(item => !item.isRight);
            if (errorItem) {
                this.$Message.success({
                    content:errorItem.tips,
                });
                return false
            }
            await this.userLogin(formData)
            this.$Message.success({
                content:"登陆成功",
                onClose: () =>{
                    this.$router.push({
                        path:'/container'
                    })
                }
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login{
    padding-top:2rem;
    .input-label{
        margin:.2rem 0;
    }
    .title{
        font-size:.32rem;
        color:$success;
        text-align:center;
        margin-bottom:1rem
    }
    .btn-submit{
        margin-top:.6rem
    }
}
</style>
