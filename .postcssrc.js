// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-pxtorem": {
      // 设计稿上的某个像素值作为1rem的大小
      rootValue: 16,
      // 需要转换的属性，'*'表示所有属性
      propList: ['*'],
      // 忽略的选择器
      selectorBlackList: [],
      // 是否直接替换原有单位
      replace: true,
      // 是否允许在媒体查询中转换
      mediaQuery: false,
      // 最小转换数值
      minPixelValue: 0
    }
  }
}
