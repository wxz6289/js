# 性能优化

减小延迟，提升加载速度 改善用户体验，提高用户留存率，提升搜索排名，增加收益

减少传输的数据 缩小资源

最小化浏览器加载和渲染时间

## 队首阻塞

h1 浏览器限制了并发请求数，当一个或多个请求正在处理，其余请求已完成，对新内容的请求将会被阻塞，直到原先的请求完成。

## 响应式图片

为不同尺寸、不同分辨率的屏幕准备不同大小的图片

## 缩减资源大小

- html/css/js [minify](https://github.com/coderaiser/minify) [minifier](https://www.minifier.org/)
- 服务器压缩 gzip, deflate, br Accept-Encoding/Content-Encoding
- 压缩图像 [TinyPng](https://tinypng.com/)

## 性能评估工具

[PageSpeed Insights](https://pagespeed.web.dev/)
[Google Analytics](https://analytics.google.com/analytics/web)
浏览器开发者工具/渲染性能检查工具(Performance面板)
console.timestamp()

## 评估指标

- TTFB 首字节时间

## 页面渲染流程

解析HTML创建DOM -> 解析CSS创建CSSOM -> 合成渲染树,布局元素 -> 绘制页面

## CSS过渡

内置在浏览器中，非常适合线性动画,比js动画性能好。
利用transform、translate、transition等css属性改写js动画
