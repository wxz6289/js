// typeof 对未声明变量不抛错；对 TDZ 中的 let 会抛 ReferenceError

{
  if (typeof a === 'undefined') {
    console.log('a 未声明 — typeof 安全');
  }
  // if (typeof b === 'undefined') { ... } // ReferenceError：b 在 TDZ
  let b;
}
