let foo = "foo";

export let bar = "bar"
// export { foo as default }; // 会导出更新后的值
export default foo;  // 不会导出更新后的值
foo = "baz";
bar = "bar2";