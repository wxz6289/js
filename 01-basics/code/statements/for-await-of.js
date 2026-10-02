/**
 * for await...of — 异步迭代示例
 *
 * for await...of 用于遍历异步可迭代对象（实现了 [Symbol.asyncIterator] 的对象）。
 * 必须在 async 函数或顶层模块中使用。
 *
 * 相关文档：../../docs/语句.md#45-for-awaitof
 */

// ============================================================
// 1. 基本：手动构建异步可迭代对象
// ============================================================

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return Promise.resolve({ value: i++, done: false });
        }
        return Promise.resolve({ done: true });
      },
    };
  },
};

async function basicExample() {
  for await (const num of asyncIterable) {
    console.log('basic:', num); // 0, 1, 2
  }
}

// ============================================================
// 2. 与异步生成器函数配合
// ============================================================

async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    // 模拟异步操作（如网络请求、文件读取）
    await new Promise((r) => setTimeout(r, 10));
    yield i;
  }
}

async function generatorExample() {
  const results = [];
  for await (const num of range(1, 5)) {
    results.push(num);
  }
  console.log('generator:', results); // [1, 2, 3, 4, 5]
}

// ============================================================
// 3. 错误处理
// ============================================================

async function* faultyGenerator() {
  yield 1;
  throw new Error('something went wrong');
}

async function errorHandling() {
  try {
    for await (const val of faultyGenerator()) {
      console.log('error-handling:', val);
    }
  } catch (err) {
    console.error('caught:', err.message); // 'something went wrong'
  }
}

// ============================================================
// 4. break / continue 支持
// ============================================================

async function* infiniteGen() {
  let i = 0;
  while (true) {
    await new Promise((r) => setTimeout(r, 5));
    yield i++;
  }
}

async function breakExample() {
  let count = 0;
  for await (const num of infiniteGen()) {
    if (num >= 3) break;
    if (num === 1) continue;
    console.log('break-example:', num); // 0, 2
    count++;
  }
}

// ============================================================
// 5. 与同步可迭代对象兼容
// ============================================================

async function syncIterableCompat() {
  const arr = [10, 20, 30];
  for await (const val of arr) {
    console.log('sync-compat:', val); // 10, 20, 30
  }
}

// ============================================================
// 6. 实际场景：模拟分页 API
// ============================================================

/**
 * 模拟分页数据获取
 */
async function fetchPage(page) {
  await new Promise((r) => setTimeout(r, 10));
  if (page > 3) return { data: [], nextPage: null };
  return {
    data: [`item-${page}-a`, `item-${page}-b`],
    nextPage: page + 1,
  };
}

async function* paginatedApi(startPage) {
  let page = startPage;
  while (page !== null) {
    const { data, nextPage } = await fetchPage(page);
    yield { page, data };
    page = nextPage;
  }
}

async function paginationExample() {
  const allItems = [];
  for await (const { page, data } of paginatedApi(1)) {
    console.log(`page ${page}:`, data);
    allItems.push(...data);
  }
  console.log('all items:', allItems);
}

// ============================================================
// 运行所有示例
// ============================================================

async function main() {
  await basicExample();
  await generatorExample();
  await errorHandling();
  await breakExample();
  await syncIterableCompat();
  await paginationExample();
}

main().catch(console.error);
