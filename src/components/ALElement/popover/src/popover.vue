/**
* @Author AIguibin
* @Datetime 2023/1/25 10:28
* @Description TODO
*/

<script setup>
import { ref } from 'vue'

defineOptions({
    name: 'AlPopover',
    inheritAttrs: false,
})
const errorMsg = ref('')
</script>

<template>
    <div ref="popover" class="popover">
        <div v-if="visible" ref="contentWrapper" class="content-wrapper" :class="{ [`position-${position}`]: true }">
            <slot name="content" :close="close"></slot>
        </div>
        <!-- span标签增加display: inline-block; 解决包裹元素高度一致的问题 -->
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<style scoped></style>