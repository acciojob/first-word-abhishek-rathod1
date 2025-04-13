function firstWord(s) {
  // your code here
	let res = s.split(" ")
	return res[0];
	
}

// Do not change the code belowf

const s = prompt("Enter String:");
alert(firstWord(s));
