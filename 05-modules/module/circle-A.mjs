import foo from './circle-B';

export default function bar(x) {
    if(x > 5){
        return foo(x / 2);
    }
    return x * 3;
}