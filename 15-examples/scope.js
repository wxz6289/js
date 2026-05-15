var gVar = "Global var";

function part(name){
	var inner = "Hello";
	console.log(inner, name, gVar);
}

//console.log(inner, name, gVar);
console.log(gVar);

part("King");

