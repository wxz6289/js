import { createContext, runInContext, runInNewContext, runInThisContext, isContext } from 'vm';

const ContextObject = runInNewContext('Object');
console.log(new Object() instanceof ContextObject);
const obj = new ContextObject();
console.log(obj instanceof ContextObject);
console.log(ContextObject.name);

let x = 2;
const contextObj = { x }
const context = createContext(contextObj);
console.log(isContext(contextObj), isContext(context), contextObj == context);
const code = "x += 2; var y = 12;";
const result = runInContext(code, context);

console.log(context, result);
console.log(x);

const code2 = "let x = 0; x += 1; x"
const vmResult = runInThisContext(code2)
console.log(vmResult);

const evalResult = eval(code2);
console.log('EvalResult:', evalResult);