/**
* @Author AIguibin
* @Datetime 2023/1/24 21:36
* @Description TODO
*/

<script setup>
    import {ref} from 'vue'

    const errorMsg = ref('')

</script>

<template>
    <div class="logon-main-wrap">
        <div class="logon-btn-wrap">
            <button>手机验证码登录</button>
            <button>账号密码登录</button>
        </div>
        <div class="logon-input-wrap">
            <div class="logon-input-content">
                <!--这里可以参考ElementUI的input组件封装一个mini版-->
                <al-input></al-input>
                <al-input></al-input>
            </div>
        </div>
        <div>
            <button>登录</button>
        </div>
        <div class="logon-other-wrap">
            <div class="logon-other-tips">
                <span>其他方式</span>
                <i></i>
            </div>
            <div class="logon-other-model">
                <div class="chat-model-btn">
                    <i></i>
                    <p>微信登录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .logon-main-wrap {
        display: flex;
        flex-direction: column;
    }

    .logon-btn-wrap {
        margin: 10px 0;
    }

    .logon-other-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 48px;
    }

    .logon-other-tips {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logon-other-tips span {
        position: absolute;
        font-size: 13px;
        padding: 0 8px;
        background: #fff;
        display: block;
        color: #b1b5bc;
        z-index: 1;
    }

    .logon-other-tips i {
        position: absolute;
        width: 100%;
        height: 1px;
        background: #e6e6e6;
    }

    .logon-other-model {
        width: 100%;
        margin-top: 1rem;
        display: flex;
    }

    .chat-model-btn {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
    }

    .chat-model-btn p {
        margin-left: 4px;
        line-height: 1.5;
    }
</style>