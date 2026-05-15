function quickSort(array){
	let tempArray = Array.from(array);
	let len = tempArray.length;
	if(len <= 1) {
		return tempArray;
	}
	let pivotIndex = Math.round(len / 2);
	let piovt = tempArray.splice(pivotIndex, 1)[0];
	let left = [], right = [], i;
	for(i = 0, len -= 1; i < len; i++) {
		if(tempArray[i] < piovt) {
			left.push(tempArray[i]);
		} else {
			right.push(tempArray[i]);
		} 
	}

	return quickSort(left).concat(piovt, quickSort(right));
}


let test = [2, 5, 1, 8, 0, 3, 1, 0, 9, 23,2, 7];
let result = quickSort(test);

console.log(result);
console.log(test);
