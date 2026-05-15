

function generateArray(){
    var a = [];
    var count = Math.floor(Math.random() * 10);
    for(let i = 0; i < count; i++){
        a.push(Math.floor(Math.random() * 10)) 
    }
    return a;
}

function maxmin(array) {
    let i, max = min = array[0], temp, maxi = 0, mini = 0;
    for (i = 0; i < array.length; i++) {

        if (array[i] > max) {
            maxi = i;
            temp = max;
            max = array[i];
            array[i] = temp;
        } else if (array[i] < min) {
            mini = i;
            temp = min;
            min = array[i];
            array[i] = min;
        }
    }
    return {
        max, 
        min, 
        maxIndex: maxi, 
        minIndex: mini
    }
}

var arr = generateArray();
var result = maxmin(arr)
console.log(arr);
console.log(result)