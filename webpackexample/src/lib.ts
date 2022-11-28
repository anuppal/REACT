export function forEach<T>(elems:T[], action:(elem:T) => void) : void {
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		action(elems[i]);
	}
}

export function filter<T>(elems:T[], predicateFn:(elem:T) => boolean) :T[]  {
	let res:T[] = [];
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		if(predicateFn(elems[i])) {
			res.push(elems[i]);
		}
	}
	return res;
}


export function map<T, R>(elems:T[], transformFn:(elem:T) => R):R[]  {
	let res:R[] = [];
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		 res.push(transformFn(elems[i]));
	}
	return res;
}