function tag(literals, ...substitutions) {
    console.log(literals, substitutions);
    
    let result = [];
    for (let i = 0,
           len = substitutions.length; i < len; i++) {
      result.push(literals[i]);
      result.push(substitutions[i])
    }
    result.push(literals[literals.length - 1]);    
    return result.join('');
}

function raw(literals, ...substitutions) {
    let result = '';
    for (let i = 0, len = substitutions.length; i < len; i++) {
        result += literals.raw[i];//取得没有转义的原字符串
        result += substitutions[i];
    }
    result += literals.raw[literals.length - 1];
    return result;
}

let name = "king";
let message = tag`Hello ${name} World`;
console.log(message);

let count = 10,    
    price = 0.25;
    message = tag`${count} items coust \n $${(count*price).toFixed()}.`;
console.log(message);

message = String.raw`Hello \n ${name} count ${count} !`;
console.log(message);


message = raw`Hello \n ${name} count ${count} !`
console.log(message);

