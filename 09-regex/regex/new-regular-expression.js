let r1 = /test/i
let r2 = new RegExp('test', 'i');

console.log(r1, r2);
console.log(r1.toString() === r2.toString());

function getTranslateY(transform) {
    let pattern = /translateY\(([^\)]+)\)/;
    let m = transform.match(pattern);
    return m && m[1] || '';
}


console.log(getTranslateY('transform:translateY(15px)'));


const html = "<div class='test'><b>Hello</b><i>world!</i></div>"

const htmlPattern = /<(\/?)(\w+)([^>]*?)>/ig;
const htmlPattern2 = /<(\w+)([^>]*?)>(.*?)<\/\1>/g; //反向引用

// console.log(html.match(htmlPattern));

let match, num = 0;
while ((match = htmlPattern.exec(html))) {
   // console.log(match);
    num++;
} 

console.log(num);


//console.log(htmlPattern2.exec(html));


let  notCaptureGroup = /(?:(?:ninja-)+)sword/;
let test = notCaptureGroup.exec('ninja-ninja-ninja-sword');
console.log(test);

function camelize(prop='') {
    return prop.replace(/-(\w)/g, (all, letter, ...params) => {
        console.log(all, params);
        return  letter.toUpperCase()
    });
}

console.log(camelize('border-bottom'));


function compress(source) {
    const keys = {};
  let t =  source.replace(/([^=&]+)=([^&]*)/g, (full, key, value) => {
        keys[key] = (keys[key]? keys[key] + ',': "") + value;
        return "-";
    });
console.log(t, keys);

    const results = [];
    for (const key in keys) {
       results.push(key + "=" + keys[key]);
    }
    return results.join('&');
}


console.log(compress("foo=1&foo=2&bar=3&foo=4&bar=a"));




