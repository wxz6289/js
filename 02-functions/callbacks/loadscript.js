/**
 * 动态加载外部脚本（浏览器环境）
 *
 * @example
 * await loadScript('/lib/lodash.js');
 * await loadScript('/app.js', { type: 'module' });
 * loadScript('/legacy.js', (err, el) => { ... });
 */

const loaded = new Map();

const isFunction = (fn) => typeof fn === 'function';

function resolveUrl(src) {
  return new URL(src, document.baseURI).href;
}

function findExistingScript(url) {
  return [...document.scripts].find((script) => script.src === url) ?? null;
}

function normalizeArgs(src, options) {
  if (isFunction(options)) {
    return { opts: {}, callback: options };
  }
  return { opts: options ?? {}, callback: options?.callback };
}

/**
 * @param {string} src 脚本地址（相对或绝对）
 * @param {Object|Function} [options]
 * @param {boolean} [options.async=true] 是否异步执行
 * @param {boolean} [options.defer=false] 是否延迟到文档解析后执行
 * @param {'text/javascript'|'module'} [options.type='text/javascript']
 * @param {string} [options.crossOrigin] anonymous | use-credentials
 * @param {string} [options.integrity] SRI 校验
 * @param {string} [options.id] script 元素 id
 * @param {HTMLElement} [options.parent=document.head] 挂载节点
 * @param {boolean} [options.force=false] 已加载时仍重新请求
 * @param {Function} [options.callback] Node 风格回调 (err, script)
 * @returns {Promise<HTMLScriptElement>}
 */
export function loadScript(src, options) {
  if (!src) {
    const error = new TypeError('loadScript: src is required');
    return Promise.reject(error);
  }

  const { opts, callback } = normalizeArgs(src, options);
  const {
    async = true,
    defer = false,
    type = 'text/javascript',
    crossOrigin,
    integrity,
    id,
    parent = document.head,
    force = false,
  } = opts;

  const url = resolveUrl(src);

  if (!force) {
    if (loaded.has(url)) return loaded.get(url);
    const existing = findExistingScript(url);
    if (existing) {
      const settled = Promise.resolve(existing);
      loaded.set(url, settled);
      return settled;
    }
  }

  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.async = async;
    script.defer = defer;
    if (type) script.type = type;
    if (crossOrigin) script.crossOrigin = crossOrigin;
    if (integrity) script.integrity = integrity;
    if (id) script.id = id;

    const cleanup = () => {
      script.onload = null;
      script.onerror = null;
    };

    script.onload = () => {
      cleanup();
      resolve(script);
    };

    script.onerror = () => {
      cleanup();
      script.remove();
      loaded.delete(url);
      reject(new Error(`Failed to load script: ${url}`));
    };

    parent.append(script);
  });

  loaded.set(url, promise);

  if (isFunction(callback)) {
    promise.then(
      (script) => callback(null, script),
      (err) => callback(err),
    );
  }

  return promise;
}

/**
 * 按顺序加载多个脚本（保证执行顺序）
 * @param {string[]} sources
 * @param {Object} [options] 传给 loadScript 的配置（不含 callback）
 */
export function loadScripts(sources, options = {}) {
  return sources.reduce(
    (chain, src) => chain.then(() => loadScript(src, options)),
    Promise.resolve(),
  );
}

/**
 * 并行加载多个脚本（不保证执行顺序）
 * @param {string[]} sources
 * @param {Object} [options]
 */
export function loadScriptsParallel(sources, options = {}) {
  return Promise.all(sources.map((src) => loadScript(src, options)));
}

export default loadScript;
