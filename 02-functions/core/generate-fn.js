var sequence, sq;
sq = function* (initValue) {
	var current, num, step;
	num = initValue || 2;
	step = 0;
	while(true) {
		current = num * step++;
		yield current;
	}
}

sequence = sq(20);

console.log(sequence.next().value, sequence.next());

console.log(sequence.next().value);

console.log(sequence.next().value, sequence.next());
