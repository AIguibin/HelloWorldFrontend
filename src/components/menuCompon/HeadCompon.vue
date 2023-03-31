/**
* @Author AIguibin
* @Datetime 2023/1/24 21:36
* @Description TODO
*/

<script setup>
import { ref, onMounted } from 'vue'
let hoverFlag = ref(false);

// 防抖函数
function debounce(flag, delay) {
    let timer
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        timer = undefined;
        hoverFlag.value = flag
    }, delay)
}

//节流函数
function throttle(flag, delay) {
    let timer
    if (!timer) {
        timer = setTimeout(() => {
            timer = null
            hoverFlag.value = flag
        }, delay)
    }
}
function mouseenter() {
    debounce(true, 500)
}
function mouseleave() {
    hoverFlag.value = false
}

</script>
<template>
    <div>
        <div class="content-head-wrapper">
            <div style="width: 2px;height: 28px;background-color: aqua;margin: 0 5px;"></div>
            <div style="border: 2px solid red; border-radius: 50%;width: 30px;height: 30px;"><i></i></div>
            <div @mouseenter="mouseenter">用户名</div>
            <div :class="{ 'mouse-vue-hover': hoverFlag }" @mouseleave="mouseleave">
                {{ hoverFlag }}
            </div>
            <div>
                <span>退出</span>
            </div>
        </div>
    </div>
</template>



<style scoped>
.content-head-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #fff;
    min-height: 52px;
    padding: 0 20px;
}

.mouse-vue-hover {
    width: 120px;
    height: 300px;
    background-color: red;
}
</style>