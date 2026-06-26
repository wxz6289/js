// 获取某月最后一天（month 为 0 起始，与 Date 一致）
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// 今天 0 点至今经过的秒数
function getSecondsToday() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((Date.now() - startOfDay.getTime()) / 1000);
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

// 相对时间：<1 秒「刚刚」；<1 分钟「n 秒之前」；<1 小时「n 分钟之前」
// 否则输出 DD.MM.YY HH:mm（本地时区，两位数补零）
function formatDate(date) {
  const diff = Date.now() - date.getTime();
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;

  if (diff < second) {
    return '刚刚';
  }
  if (diff < minute) {
    return `${Math.floor(diff / second)} 秒之前`;
  }
  if (diff < hour) {
    return `${Math.floor(diff / minute)} 分钟之前`;
  }

  const day = pad2(date.getDate());
  const month = pad2(date.getMonth() + 1);
  const year = pad2(date.getFullYear() % 100);
  const hours = pad2(date.getHours());
  const minutes = pad2(date.getMinutes());

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(getLastDayOfMonth(2012, 1));  // 2012-02 闰年 → 29
console.log(getLastDayOfMonth(2019, 9));  // 2019-10 → 31

console.log(getSecondsToday());

console.log(formatDate(new Date(Date.now() - 500)));           // 刚刚
console.log(formatDate(new Date(Date.now() - 30 * 1000)));     // 30 秒之前
console.log(formatDate(new Date(Date.now() - 5 * 60 * 1000))); // 5 分钟之前
console.log(formatDate(new Date(Date.now() - 86400 * 1000)));  // 完整日期
