export let a = 12;

export function change(value) {
  a = value;
}

// export default a;
export { a as default }

a = 22

