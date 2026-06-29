# class — ES6 类

类语法、继承、静态成员、私有字段与类型检测。

```
class/
├── class.md
└── code/
    ├── basics.js
    ├── class-expression.js
    ├── accessors-fields.js
    ├── class-field-bind.js
    ├── extends-basic.js
    ├── extends-dynamic.js
    ├── extends-clock.js
    ├── super-homeobject.js
    ├── static.js
    ├── private-fields.js
    ├── instanceof.js
    ├── type-check.js
    └── builtin-extend.js
```

## 文档

| 文件 | 说明 |
|------|------|
| [class.md](class.md) | 类特性、继承、super、静态成员、instanceof、类型检测 |

## 代码（code/）

| 文件 | 主题 | 说明 |
|------|------|------|
| [basics.js](code/basics.js) | 基础 | 类即函数、`constructor`、原型 |
| [class-expression.js](code/class-expression.js) | 类表达式 | 动态创建类、计算属性方法、访问器 |
| [accessors-fields.js](code/accessors-fields.js) | 私有字段 | `#name` 与 getter/setter |
| [class-field-bind.js](code/class-field-bind.js) | 类字段 | 箭头函数字段绑定 `this` |
| [extends-basic.js](code/extends-basic.js) | 继承 | `extends`、`super`、方法重写 |
| [extends-dynamic.js](code/extends-dynamic.js) | 动态继承 | `extends` 表达式、继承 `Object` |
| [extends-clock.js](code/extends-clock.js) | 继承实践 | Clock 重写、`super()` 与多态 |
| [super-homeobject.js](code/super-homeobject.js) | super | `[[HomeObject]]` 与复制方法陷阱 |
| [static.js](code/static.js) | 静态成员 | 静态方法/属性、静态继承链 |
| [private-fields.js](code/private-fields.js) | 私有字段 | `#` 字段与派生类访问限制 |
| [instanceof.js](code/instanceof.js) | instanceof | 原型链检测、`Symbol.hasInstance` |
| [type-check.js](code/type-check.js) | 类型检测 | `toString`、`Symbol.toStringTag` |
| [builtin-extend.js](code/builtin-extend.js) | 内建类 | `extends Object`、静态方法不继承 |

运行示例：

```bash
node code/basics.js
node code/extends-basic.js
```

## 相关目录

| 位置 | 说明 |
|------|------|
| [prototypes/](../prototypes/) | 原型链与传统继承模式 |
| [prototypes/inheritance/class-inheritance.js](../prototypes/inheritance/class-inheritance.js) | class 与原型继承对比 |
