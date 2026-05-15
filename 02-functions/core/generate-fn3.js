var letter, sequence;

function* alphebet () {
	var charCode = 65;
	while(charCode < 91) {
		yield String.fromCharCode(charCode++);
	}
};

sequence = alphebet();
letter = sequence.next();


while(!letter.done) {
	console.log(letter.value);
	letter = sequence.next();
}
