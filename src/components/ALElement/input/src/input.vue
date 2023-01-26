/**
* @Author AIguibin
* @Datetime 2023/1/25 10:28
* @Description TODO
*/

<script setup>
    import {ref} from 'vue'

    defineOptions({
        name: 'AlInput',
        inheritAttrs: false,
    })
    const errorMsg = ref('')
</script>

<template>
    <div class="logon-input-item">
        <div class="input-item-wrap">
            <div class="error-card-input card-input">
                <div class="error-input normal-input input-all">
                    <div class="input-wrapper">
                        <img class="prefix-icon icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+PGcgb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSAgcm90YXRlKDAgMTIgMTIpIj48cGF0aCBpZD0i5ZyG5b2iIDEgKOi9ruW7kykiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3R5bGU9ImZpbGw6IzI3MzM0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNyAyKSAgcm90YXRlKDAgNSA1KSIgb3BhY2l0eT0iMSIgZD0iTTUgMEM2LjM4IDAgNy41NiAwLjQ5IDguNTQgMS40NkM5LjUxIDIuNDQgMTAgMy42MiAxMCA1QzEwIDYuMzggOS41MSA3LjU2IDguNTQgOC41NEM3LjU2IDkuNTEgNi4zOCAxMCA1IDEwQzMuNjIgMTAgMi40NCA5LjUxIDEuNDYgOC41NEMwLjQ5IDcuNTYgMCA2LjM4IDAgNUMwIDMuNjIgMC40OSAyLjQ0IDEuNDYgMS40NkMyLjQ0IDAuNDkgMy42MiAwIDUgMFpNMiA1UTIgMiA1IDJROCAyIDggNVE4IDggNSA4UTIgOCAyIDVaIiAvPjxwYXRoIGlkPSLnn6nlvaIgMSAo6L2u5buTKSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHlsZT0iZmlsbDojMjczMzQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDEzKSAgcm90YXRlKDAgOSA0LjUpIiBvcGFjaXR5PSIxIiBkPSJNMTYuNjIsOC45MkMxNi42OCw4Ljk1IDE2Ljc0LDguOTcgMTYuOCw4Ljk4QzE2Ljg3LDguOTkgMTYuOTMsOSAxNyw5QzE3LjA3LDkgMTcuMTMsOC45OSAxNy4yLDguOThDMTcuMjYsOC45NyAxNy4zMiw4Ljk1IDE3LjM4LDguOTJDMTcuNDQsOC45IDE3LjUsOC44NyAxNy41Niw4LjgzQzE3LjYxLDguNzkgMTcuNjYsOC43NSAxNy43MSw4LjcxQzE3Ljc1LDguNjYgMTcuNzksOC42MSAxNy44Myw4LjU2QzE3Ljg3LDguNSAxNy45LDguNDQgMTcuOTIsOC4zOEMxNy45NSw4LjMyIDE3Ljk3LDguMjYgMTcuOTgsOC4yQzE3Ljk5LDguMTMgMTgsOC4wNyAxOCw4TDE4LDdDMTgsNS4wNyAxNy4zMiwzLjQyIDE1Ljk1LDIuMDVDMTQuNTgsMC42OCAxMi45MywwIDExLDBMNywwQzUuMDcsMCAzLjQyLDAuNjggMi4wNSwyLjA1QzAuNjgsMy40MiAwLDUuMDcgMCw3TDAsOEMwLDguMDcgMC4wMSw4LjEzIDAuMDIsOC4yQzAuMDMsOC4yNiAwLjA1LDguMzIgMC4wOCw4LjM4QzAuMSw4LjQ0IDAuMTMsOC41IDAuMTcsOC41NkMwLjIxLDguNjEgMC4yNSw4LjY2IDAuMjksOC43MUMwLjM0LDguNzUgMC4zOSw4Ljc5IDAuNDQsOC44M0MwLjUsOC44NyAwLjU2LDguOSAwLjYyLDguOTJDMC42OCw4Ljk1IDAuNzQsOC45NyAwLjgsOC45OEMwLjg3LDguOTkgMC45Myw5IDEsOUMxLjA3LDkgMS4xMyw4Ljk5IDEuMiw4Ljk4QzEuMjYsOC45NyAxLjMyLDguOTUgMS4zOCw4LjkyQzEuNDQsOC45IDEuNSw4Ljg3IDEuNTYsOC44M0MxLjYxLDguNzkgMS42Niw4Ljc1IDEuNzEsOC43MUMxLjc1LDguNjYgMS43OSw4LjYxIDEuODMsOC41NkMxLjg3LDguNSAxLjksOC40NCAxLjkyLDguMzhDMS45NSw4LjMyIDEuOTcsOC4yNiAxLjk4LDguMkMxLjk5LDguMTMgMiw4LjA3IDIsOEwyLDdDMiw1LjYyIDIuNDksNC40NCAzLjQ2LDMuNDZDNC40NCwyLjQ5IDUuNjIsMiA3LDJMMTEsMkMxMi4zOCwyIDEzLjU2LDIuNDkgMTQuNTQsMy40NkMxNS41MSw0LjQ0IDE2LDUuNjIgMTYsN0wxNiw4QzE2LDguMDcgMTYuMDEsOC4xMyAxNi4wMiw4LjJDMTYuMDMsOC4yNiAxNi4wNSw4LjMyIDE2LjA4LDguMzhDMTYuMSw4LjQ0IDE2LjEzLDguNSAxNi4xNyw4LjU2QzE2LjIsOC42MSAxNi4yNSw4LjY2IDE2LjI5LDguNzFDMTYuMzQsOC43NSAxNi4zOSw4Ljc5IDE2LjQ0LDguODNDMTYuNSw4Ljg3IDE2LjU2LDguOSAxNi42Miw4LjkyWiAiIC8+PC9nPjwvc3ZnPg==" alt="">
                        <input type="text">
                    </div>
                </div>
            </div>
            <div class="error-input-msg">{{errorMsg}}</div>
        </div>
    </div>
</template>

<style scoped>
    .card-input {
        height: 56px;
        /*transition: var(--transition-easeIn-1);*/
        position: relative;
    }

    .input-all {
        box-sizing: content-box;
        position: relative;
        width: 346px;
        height: 42px;
        padding: 6px;
        border-radius: 5px;
        background-color: white;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        /*transition: var(--transition-easeOut-2);*/
    }

    .normal-input {
        border: 1px solid rgb(226, 229, 240);
    }

    .input-wrapper {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
    }
    .input-all .icon {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        /*transition: var(--transition-easeOut-2);*/
    }
    .input-all .prefix-icon {
        opacity: 0.4;
        margin-left: 10px;
        /*margin-right: var(--spacing-12);*/
        width: 25px;
        height: 25px;
    }
    .input-all input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: white;
        font-size: 18px;
        line-height: 18px;
        /*transition: var(--transition-easeOut-2);*/
    }
    .input-item-wrap input {
        background-color: transparent !important;
    }
</style>