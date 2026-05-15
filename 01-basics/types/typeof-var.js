/* { 
    console.log(a);
    console.log(b);
    var a = 12;
    let b = 2;
} */

{ 
    if(typeof a === "undefined"){
        console.log('cool');
    }
    //存在变量临时死区
    if(typeof b === "undefined"){
        console.log('oops!');
    }
    let b;
}