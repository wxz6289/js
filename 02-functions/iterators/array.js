/* const arr = [1, 2, 3];
const str = "hello";
const m = new Map();
m.set("foo", 12);
m.set(Symbol("id"), 23);
const it = m[Symbol.iterator]();
const its = str[Symbol.iterator]();

let current = it.next()
while (!current.done) {
    console.log(current.value);
    current = it.next();
}

for (const v of its) {
    console.log(v);
} */
/* 
const Fib = {
    [Symbol.iterator](){
        let n1 = 1, n2 = 1;
        return {
            [Symbol.iterator](){
                return this;
            },
            next(){
                let current = n2;
                n2 = n1;
                n1 = n1 + current;
                return {
                    value: current,
                    done: false
                };
            },
            return(v){
                console.log("Fibonacci sequeuece abandoned");
                return {
                    value: v,
                    done: true
                };
            }
        };
    }
};

for (const v of Fib) {
    console.log(v);
    if(v > 50){
        break;
    }
} */
/* 
const tasks = {
    [Symbol.iterator](){
        let steps = this.actions.slice();
        return {
            [Symbol.iterator](){
                return this;
            },
            next(...args){
                if(steps.length > 0){
                    let res = steps.shift()(...args);
                    return {
                        value: res,
                        done: false
                    };
                } else {
                    return {
                        done: true
                    };
                }
            },
            return(v){
                steps.length = 0;
                return {
                    value: v,
                    done: true
                }; 
            }
        };
    },
    actions: []
};

tasks.actions.push(function step1(x){
    console.log("step 1:", x);
    return x * 2;
},
function step2(x, y){
    console.log("step2: ", x, y);
    return x + (y * 2);
},
function step3(x, y, z) {
    console.log("step2: ", x, y, z);
    return z + (y * x);
});

const it = tasks[Symbol.iterator]();
console.log(it.next(10));
console.log(it.next(20, 50));
console.log(it.next(20, 30, 120));
console.log(it.next());

 */

 if(!Number.prototype[Symbol.iterator]){
     Object.defineProperty(
         Number.prototype,
         Symbol.iterator,
         {
             writable: true,
             configurable: true,
             enumerable: false,
             value: function iterator(){
                 let i, inc, done = false, top = +this;
                 inc = 1*(top < 0? -1: 1);
                 return {
                     [Symbol.iterator](){
                         return this;
                     },
                     next(){
                         if(!done){
                             if(i == null){
                                 i = 0;
                             } else if(top > 0) {
                                 i = Math.min(top, i + inc);   
                             } else {
                                 i = Math.max(top, i + inc);
                             }
                             if(i == top){
                                 done = true;
                             }
                             return {
                                 value: i,
                                 done: false
                             };
                         } else {
                             return {
                                 done: true
                             };
                         }
                     }
                 };
             }
         }
     );
 }

 for (const i of 3) {
     console.log(i);
 }

 console.log([...-3]);
 