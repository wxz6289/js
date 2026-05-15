import { foo } from "./es6-1.js";
console.log(foo);
setTimeout(() => console.log(foo), 500);