function isSameType(value1, value2) {
  //your js code here
	if((value1 !== value1 && value2 !== value2) ){
		return true;
	}
	return (typeof(value1)===typeof(value2);
}
// do not change the code below.
let value1 =Number(prompt("Enter Start of the Range."));
let value2 = Number(prompt("Enter End Of the Range."));
alert(isSameType(value1, value2));
