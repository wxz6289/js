function a(e,d, b ='', ...c){
    if(a.caller == null){
        console.log("全局环境");
    }  else {
        console.log(a.caller.name + "调了我");
    }
    console.log(a.length);  
}

//a();

function b(){
    a();
    console.log(a.toString()); 
}

b();