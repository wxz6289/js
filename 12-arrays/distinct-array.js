var arr = ["1", "2", "2", "3", "4", "6", "6", "1"];

// 数组去重的方法

function distinct(oringin) {
  var temp = [];
  oringin.forEach(item => {
    // 原始写法
    // let found = false;
    // temp.forEach(item2 => {
    //   if(item2 == item) {
    //     found = true;
    //   }
    // });

    // if(!found) {
    //   temp.push(item);
    // }

    // 调用includes() 或indexOf() 函数
    // if(!temp.includes(item)){
    //   temp.push(item);
    // }

    if(temp.indexOf(item) == -1) {
      temp.push(item);
    }

  });
  return temp;
}



// console.log(arr);
// console.log(distinct(arr));


function distinct2(oringin) {
   let result = [];
   let len = oringin.length;
   let i = 0, j = 0;

   for(i = 0; i < len; i++) {
     for(j = i + 1; j < len;  j++) {
       if(oringin[i] == oringin[j]){
         j = ++i; // 如果值相同就跳过
       }
     }
     result.push(oringin[i]); //不相同就push
   }
   return result;
}

function distinct3(oringin) {
  let result = [];
  let len = oringin.length;
  let tem = { };
  let i;
  for(i = 0; i < len; i++) {
    if(!tem[oringin[i]]) { // 借用对象的属性不能相同特性去重
      tem[oringin[i]] = 1;
      result.push(oringin[i]);
    } else {
      tem[oringin[i]] += 1;
    }
  }
  console.log(tem,"test");
  return result;
}

// 该方法会影响原始数组
function distinct4(oringin) {
    let len = oringin.length, i, j;

    for(i = 0; i < len; i++) {
      for(j = i + 1; j < len; j++) {
        if(oringin[i] == oringin[j]) {
          oringin.splice(j,1);
          len--; // 数组长度要发生变化
          j--;
        }
      }
    }
    return oringin;
}

function distinct5(oringin) {
    return Array.from(new Set(oringin));
}


function distinct6(oringin) {
  return [...new Set(oringin)];
}

// 数组合并
// 这种方法有副作用
function merge(oringin1, oringin2) {
    // 1. Array.prototype.push.apply(oringin1, oringin2);
   // 2.  oringin1.push.apply(oringin1, oringin2);
   [].push.apply(oringin1, oringin2);
    return oringin1;
}

// 无副作用
function merge2(oringin1, oringin2) {
  return oringin1.concat(oringin2);
}

// console.log(arr);
// console.log(arr2);
// console.log(distinct6(arr));
// console.log(arr);


let arr2 = ["8", "6","8","5"];
console.log(arr);
console.log(arr2);
console.log(merge2(arr, arr2));
console.log(arr);
console.log(arr2);

