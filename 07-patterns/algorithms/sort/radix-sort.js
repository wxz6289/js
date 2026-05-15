function radixSort(intArray){
	let intToStringArray = intArray.map((item) => item.toString());
	let lenArray = intToStringArray.map(item => item.length);
	let maxLen = Math.max(...lenArray);
	let padeIntToStringArray = intToStringArray.map(item => item.padStart(maxLen, '0'));
	let buckets = [];
	for(let i = 0; i < maxLen; i++) {
		let bucket = [];
		for(let j = 0, len = padeIntToStringArray.length; j < len; j++) {
			let radix = parseInt(padeIntToStringArray[j].charAt(i));
			bucket[radix] = [];
			bucket[radix].push(padeIntToStringArray[j]);
		}
		let temp = [];
		for(let m = 0; m <= 9; m++) {
			if(bucket[m]) {
				temp.concat(bucket[m])
			}
		}
		padeIntToStringArray = [...temp];
		console.log(padeIntToStringArray);
	}
}

let test = [12, 3, 123, 34567, 788, 23, 653];
radixSort(test);