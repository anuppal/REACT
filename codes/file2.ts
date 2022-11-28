
function doTask(arg:unknown) : void {
	if(typeof arg === 'function') {
		arg();  
	} else if(typeof arg === 'string') {
		console.log(arg);
	}
}

doTask("Good day!!!");