<template>
  <div>
    <el-input>
      <slot></slot>
    </el-input>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'AIInput',
    componentName: 'AIInput',
    data() {
      return {};
    },
    mounted() {

    },

    methods: {
      // 任何类型格式化
      transformFormatFn(value, formatter) {
        if (typeof formatter === 'function') {
          return formatter(value)
        } else {
          return value;
        }
      },
      // 单选select，多选checkbox
      transformDataCode(value, dataCode) {
        let result=value
        if (typeof formatter == 'object' && Array.isArray(dataCode)) {
          dataCode.forEach(item => {
            if (item.key&&item.key==value) {
              result=item.value
            }
          })
        }
        return result;
      },

    }
  }
</script>

<style type="text/css">

</style>
