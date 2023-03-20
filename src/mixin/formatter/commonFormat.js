/**
 * 一、局部使用 当前页面
 * import commonFormat from 'src/mixin/formatter/commonFormat.js'
 * 在组件内部,通过minxins:['commonFormat']；
 * 二、全局使用 在main.js中，不推荐使用
 * import commonFormat from 'src/mixin/formatter/commonFormat.js'
 * Vue.mixin(commonFormat)
 */


export default {
  methods: {
    // String to Number
    StringToNumber(param){
      if (!param) {
        return 0;
      }
      if(typeof  param =='number'){
        return param
      }
      if (typeof param == 'string') {
        return Number(param);
      }
    }
  }
}
