# 3.4 在浏览器中存储数据

## Cookie

```js
document.cookie = "user=John; path=/; max-age=3600; secure; samesite=lax";
// 每次设置只更新一个键值，不影响其他 cookie
// 读取: document.cookie 返回所有 cookie 的字符串

// Cookie 属性
// path=/        — 可用路径（默认当前路径）
// domain=...     — 可用域
// max-age=3600   — 过期时间（秒）
// expires=Date   — 过期日期（GMT）
// secure         — 仅 HTTPS
// samesite=strict|lax|none — CSRF 防护
// httpOnly       — JS 不可读写（仅服务端设置）
```

**限制**：每条 ~4KB，每个域约 20 条。每次 HTTP 请求自动发送。

## LocalStorage / SessionStorage

```js
// API 两者相同
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()
localStorage.length
localStorage.key(index)

// 也可直接使用属性
localStorage.user = 'John'
localStorage.user  // "John"

// 存储对象（需要序列化）
localStorage.data = JSON.stringify(obj)
JSON.parse(localStorage.data)

// 遍历
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(key, localStorage.getItem(key));
}
```

| 特性 | localStorage | sessionStorage |
|------|-------------|---------------|
| 容量 | ~5MB | ~5MB |
| 生命周期 | 永久 | 标签页关闭 |
| 作用域 | 同源 | 同源+同标签页 |
| 多标签页共享 | 是 | 否（独立副本） |

## Storage 事件

```js
// 当其他标签页修改 localStorage 时触发
window.addEventListener('storage', (e) => {
  console.log(e.key);       // 修改的键
  console.log(e.oldValue);  // 旧值
  console.log(e.newValue);  // 新值
  console.log(e.url);       // 触发标签页的 URL
});
// 注意: 在当前标签页修改不会触发 storage 事件（仅在其他同源页面触发）
```

## IndexedDB

异步事务型 NoSQL 数据库：

```js
// 打开数据库
let request = indexedDB.open('myDB', 1);

request.onupgradeneeded = (e) => {
  let db = e.target.result;
  // 创建对象存储
  let store = db.createObjectStore('books', { keyPath: 'id', autoIncrement: true });
  store.createIndex('title_idx', 'title', { unique: false });
};

request.onsuccess = (e) => {
  let db = e.target.result;

  // 事务
  let tx = db.transaction('books', 'readwrite');
  let store = tx.objectStore('books');

  // 添加
  store.add({ title: 'JS Guide', price: 10 });
  store.put({ id: 1, title: 'JS Guide v2', price: 15 }); // 更新

  // 查询
  let getReq = store.get(1);
  getReq.onsuccess = () => console.log(getReq.result);

  // 通过索引查询
  let index = store.index('title_idx');
  let cursorReq = index.openCursor(null, 'next');
  cursorReq.onsuccess = (e) => {
    let cursor = e.target.result;
    if (cursor) {
      console.log(cursor.key, cursor.value);
      cursor.continue();
    }
  };

  // 范围查询
  let range = IDBKeyRange.bound(1, 10);
  store.getAll(range).onsuccess = (e) => console.log(e.target.result);

  tx.oncomplete = () => console.log('Transaction complete');
  tx.onerror = () => console.log('Transaction error');
};
```

**限制**：异步 API，不可在 Service Worker 之外同步访问。
