import Vue from 'vue';
import AIInput from 'src/components/aiguibinUI/input/Input'


const components = [
  AIInput
];
if (!(window && window.Vue !== undefined)) {
  window.Vue = Vue;
}
const install = function (Vue) {
  debugger
  for (component in components) {
    Vue.component(component.name, component)
  }
}


export default {
  install,
  AIInput
}
