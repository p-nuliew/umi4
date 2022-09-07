
# Aleo Pool 官网

## 开发框架
umi: https://umijs.org/docs/tutorials/getting-started

## 维护开发
```
# 安装依赖
pnpm i

# 开发
pnpm dev

#打包
pnpm build
```

## 样式约定
	颜色、间距、字体大小等都以定义变量的方式存在

* 颜色值: 定义在 **src/styles/themes/templates/light.js**，继承 `antd` 的变量名约定
* 间距: 定义在 **src/styles/themes/var.less** ，变量名自定义
* 字体: 定义在 **src/styles/font.less** ，变量名自定义

具体页面的属性使用变量名赋值

```css
.inputIcon {
  color: @normal-color;
}
.inputIconFocus {
  color: @primary-color;
}
```

## 注意点

* 新建组件流程：大驼峰命名文件名，文件夹下新建 `index.{jsx|tsx}` 和 `index.less`。