
function doTask(arg:any) : void {
	arg(); // fail @ runtime ==> string is not a function
}

doTask("Good day!!!");