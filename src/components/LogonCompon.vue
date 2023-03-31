/**
* @Author AIguibin
* @Datetime 2023/1/24 21:36
* @Description TODO
*/

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const errorMsg = ref('');
const route = useRoute()
const router = useRouter();
// 当参数更改时获取用户信息
watch(
    () => route.params.id,
    async newId => {
        userData.value = await fetchUser(newId)
    }
)
function loginFn() {
    console.log("88888");
    // 在此使用用户名密码请求后端获取Token
    // 把Token写入localStorage
    // 跳转Home页面
    // ------
    // 后续请求的接口都带上Token
    // 后端设置Token过期时间，每次请求后重置过期时间
    // 过期后返回特定错误信息，拦截请求，不允许访问
    // 前端进行退出登录，清空Token，跳转登录页面
    // 如下模拟
    localStorage.setItem("UserAuthorization", "UserAuthorization");
    setTimeout(() => {
        localStorage.setItem("UserAuthorization", "");
        localStorage.removeItem("UserAuthorization");
    }, 30 * 60 * 1000);
    // 可以将参数放到params中，这样参数就不会出现在地址栏中，但是需要注意的是，这种方式只适用于路由跳转，刷新页面后参数就会丢失。
    // 例如：
    // this.$router.push({
    //   path: '/path',
    //   params: {
    //     id: 123
    //   }
    // })
    // 在接收参数的组件中，可以通过$route.params来获取参数。
    // 如果要在地址栏中隐藏参数，且刷新后参数不会丢失，可以使用query参数。这种方式会将参数以查询参数的形式附加在URL后面，但是参数不会出现在路由中，也不会丢失。
    // 例如：
    // this.$router.push({
    //   path: '/path',
    //   query: {
    //     id: 123
    //   }
    // })
    // 在接收参数的组件中，可以通过$route.query来获取参数
    router.push({
        name: "HomeView",
        params: {}
    })
}
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
            <button @click="loginFn">登录</button>
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