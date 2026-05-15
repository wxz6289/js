function setCookie(name, value, option = {}) {
  const { maxAge, path, domain, secure } = option;
  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (maxAge) cookieStr += `; max-age=${maxAge}`;
  if (path) cookieStr += `; path=${encodeURIComponent(path)}`;
  if (domain) cookieStr += `; domain=${encodeURIComponent(domain)}`;
  if(secure) cookieStr += `; secure;`
  document.cookie = cookieStr;
}

setCookie('name', 'Dreamer', { path: '/', maxAge: 10 })
