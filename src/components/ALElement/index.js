/**
 * @Author AIguibin
 * @Datetime 2023/1/25 10:28
 * @Description TODO
 */
// 引入组件，这里引的是组件的index.js出口文件;
import Input from './input/index.js';
// 把所有组件放在数组里
const components = [
    Input,
];
// 提供一个install方法
const install = function (Application) {
    components.forEach(component => {
        Application.component(component.name, component);
    });
    // 遵循链式调用
    return Application
};
// 默认导出版本、install方法、组件
// 重点的重点的重点不要把install忘记导出
export default {
    version: '1.0.0',
    install,
    Input
};

