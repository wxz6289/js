function sumSalaries(obj){
    let sum = 0;
    for (const key in obj) {
        sum += obj[key];
    }
    return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}; 
console.log(sumSalaries(salaries));
