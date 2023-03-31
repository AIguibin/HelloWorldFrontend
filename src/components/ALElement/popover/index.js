/**
 * @Author AIguibin
 * @Datetime 2023/1/25 10:28
 * @Description TODO
 */



import Popover from './src/popover.vue';

/* istanbul ignore next */
Popover.install = function(Application) {
  Application.component(Popover.name, Popover);
  // 遵循链式调用
  return Application
};

export default Popover;
