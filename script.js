function isSameType(value1, value2) {
  //your js code here
	let type= (typeof(value1)==typeof(value2)? true: false);
	return type;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
