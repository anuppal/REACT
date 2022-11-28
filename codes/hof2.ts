function forEach<T>(elems:T[], action:(elem:T) => void) : void {
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		action(elems[i]);
	}
}

function map<T, R>(elems:T[], transformFn:(elem:T) => R):R[]  {
	let res:R[] = [];
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		 res.push(transformFn(elems[i]));
	}
	return res;
}

let nos:number[] = [5,2,66,11];

let doubles:number[] = map(nos, (e => e * 2));


interface Product {
	id:number;
	name:string;
	price:number;
	category:string
}

let products:Product[] = [
{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];
 
let names:string[] = map(products, (e => e.name));


forEach(doubles, console.log);
forEach(names, console.log);