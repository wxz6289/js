DOM 是 HTML 和 XML 文档的编程接口，用来描述和操作文档。它表示由多层节点构成的文档，通过它可以添加、删除和修改文档的各个部分。具有跨平台和语言无关的特点。

文档元素 文档最外层的元素，每个文档只能有一个文档元素。

Node 类型 12 种

- nodeType
  1. ELEMENT_NODE(1)
  2. ATTRIBUTE_NODE(2)
  3. TEXT_NODE(3)
  4. COMMENT_NODE(8)
  5. DOCUMENT_NODE(9)
- nodeName/nodeValue
- childNodes NodeList 类数组，实时活动对象 DOM 结构的变化会自动在 NodeList 对象中反应出来。
  - item()
  - prevouseSibling
  - nextSibling
- parentNode 父元素
  - firstChild
  - lastChild
- hasChildNodes() 是否存在子节点
- ownerDocument 文档节点
- appendChild() 返回被加入节点 如果把文档中已存在的节点传给 appendChild(),则会将这个节点从之前的位置转移到新位置。即使 DOM 树通过各种关系指针维系，一个节点也不会同时出现在两个或更多个地方。
- insertBefore() 参数:要插入的节点和参照节点 返回插入的节点
- replaceChild() 参数：要插入的节点和要替换的节点 返回被替换的节点并从文档中移除
- removeChild() 参数：要移除的节点
- cloneNode() 参数： 是否深复制 复制只复制 html 属性不复制 javascript 属性，可选地复制子节点
- normalize() 处理文档子树的文本节点 如空文本节点则将其删除，如果两个同胞节点相邻则合并为一个文本节点。




window.document.documentElement 获取文档节点 

window.getComputedStyle(el).getPropertyValue(prop) 获取元素上某个样式属性值

el.value.style.setProperty(prop, val) 设置元素某个样式属性值


el.classList.toggle(value, flag) // 