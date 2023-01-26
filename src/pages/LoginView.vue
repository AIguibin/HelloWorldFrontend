/**
* @Author AIguibin
* @Datetime 2023/1/23 16:55
* @Description TODO
*/
<script setup>
    import {ref, onMounted} from 'vue'
    import LogonCompon from '@/components/LogonCompon.vue'
    import registerCompon from '@/components/registerCompon.vue'



    const hasCount = ref(true)
</script>

<template>
    <div class="login-background-img">
        <div class="login-wrapper">
            <div class="login-main-wrap">
                <div class="login-main-left">
                    <h2>在同一个地方，构思、设计、</h2>
                    <h2>协作，让你和团队更加高效</h2>
                </div>
                <div class="login-main-right">
                    <div class="login-card-wrap">
                        <div class="login-card-content">
                            <div v-if="hasCount">
                                <h2>登录你的即时账户</h2>
                                <span>没有账户?</span><span>前去注册</span>
                                <LogonCompon></LogonCompon>
                            </div>
                            <div v-else>
                                <h2>注册你的即时账户</h2>
                                <span>已有账户?</span><span>前去登录</span>
                                <registerCompon></registerCompon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-footer"></div>
        </div>
    </div>
</template>

<style scoped>
    .login-background-img {
        width: 100vw;
        height: 100vh;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url("/src/assets/login/login-bg-5.jpg");
    }

    .login-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-box-pack: center;
        -webkit-box-align: center;
    }

    .login-main-wrap {
        display: flex;
        align-items: center;
        justify-content: space-around;
        -webkit-box-align: center;
    }

    .login-main-left {
        height: 100%;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        color: rgb(255, 255, 255);
    }

    .login-main-right {

    }

    .login-card-wrap {
        overflow: hidden;
        width: fit-content;
        height: fit-content;
        position: relative;
        border-radius: 20px;
        background: #fff;
        box-shadow: rgba(23, 25, 29, 0.2) 0px 16px 16px -16px, rgba(23, 25, 29, 0.03) 0px 14px 20px 0px, rgba(23, 25, 29, 0.04) 0px 0px 0px 1px;

    }

    .login-card-content {
        padding: 1rem;
        margin: 3.571rem;
        height: fit-content;
        position: relative;
        width: calc(360px + 2rem);
        overflow: hidden;
    }
</style>
