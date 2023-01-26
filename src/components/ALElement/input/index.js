/**
 * @Author AIguibin
 * @Datetime 2023/1/25 10:28
 * @Description TODO
 */



import AlInput from './src/input.vue';

/* istanbul ignore next */
AlInput.install = function(Application) {
  Application.component(AlInput.name, AlInput);
  // 遵循链式调用
  return Application
};

export default AlInput;
