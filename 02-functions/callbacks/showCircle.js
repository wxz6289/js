function showCircle(cx, cy, radius, callback){
    let canvas = document.getElementById("#show");
    const ctx = canvas.getContext('2d');
    let r = 0;
    setTimeout(() => {
        drawCircle(cx, cy, r);
        if(r <= radius){
            setTimeout(() => {
                drawCircle(cx, cy, r); 
            }, 100);
        } else {
            callback(ctx);
        }
        r++;
    }, 100);

    function drawCircle(x, y, radius){
        ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
        ctx.fill("#f00");
    }
}

function showCircle(){
    showCircle(150, 150, 100, (ctx) => {
        ctx.fillText("Hello, World", 50, 50)
    });
}