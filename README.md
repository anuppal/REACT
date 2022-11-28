# React with Typescript


Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/REACT

=====================================================

Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ] 16.x.x

==================================================================

TypeScript and Webpack

JavaScript : loosely typed and dynamically typed scripting language, executed by JavaScript engine.

ECMA 5 version

var had function level and global scope


var name = "Kim"; // string

name.toUpperCase();

name = 43; // number

name++; 

name = true;
if(name) {

}

ECMA 6 --> ES2015 --> JS version 6

let and const keywords added ==> block level variable

var g = 10;

function doTask() {
	var a = 10;
	if(g > a) {
		var b = 49; // hoisting

	}
	console.log(a, b, g); // valid
}

b is hoisted to "function" scope

var g = 10;
const PI = 3.14159; // constant
function doTask() {
	var a = 10;
	if(g > a) {
		let b = 49; // block scope

	}
	console.log(a, b, g); // not valid
	PI = 4.5; //error
}

----------

JS --> JS engine [ V8 / SpiderMonkey / JavaScriptVM / Nashorn / ...]

(TypeScript / CoffeScript / LiveScript / DART) ==> Transpile {transpiler / pre-processor} --> JS 

tsc a.ts ==> a.js ==> JS engine

Why Typescript?
* provide optional type system for JavaScript ==> statically typed
let name:string = "Roger";
name = 10; // error

* catch errors at compilation time rather than runtime
* enhance code quality and understandibilty

Basic types: string, number, boolean
let name:string = "Roger";
let age:number = 34;
let employed:boolean = true;

====================

Object type

Object contains state and behaviour. state of object is generally mutated by action/behaviour/methods

Banking Account: balance is state of object [ each instance has seperate copy of "balance"];
balance is mutated using credit() or debit()
{} ==> JSON JavaScript Object notation

1) type

type Person = {
	name: string;
	age: number;
}


let p1:Person = {name:"Jack", age:26};

let p2:Person = {name:"Jill", age:22};

2) interface

interface Product {
	name: string;
	price: number;
}

let p1:Product = {"name": "iPhone", price: 89000.00};

// specialization
interface Mobile extends Product {
	camera?:string; // optional
	connectivity:string
}

let p2:Mobile =  {"name": "iPhone", price: 89000.00, camera:"68MP", "5G"};
let p3:Mobile =  {"name": "Oppo", price: 89000.00,  "5G"};


p2.price = 120000.00; // valid

interface Tv extends Product {
	screenType:string;
}

Difference between "type" and "interface":
1) can;t extend "type"; interface can be extended
2) interface can also be used in realization relationship [ work on contract]

interface Renderer {
	render():void;
}

class TvRenderer implements Renderer {
	name:string;
	price:number;
	render() : void  {
		// code

	}
}


class WebRenderer implements Renderer {
	// state and behavior
	render(): void {
		// code
	}
}

---

Objects can be created from "type", "interface" and "class"

* Array Type

let products:Product[] = [
	{"name": "iPhone", price: 89000.00},
	{"name": "Oppo", price: 89000.00}
]

let no:number[] = [5,2,66,11];

--------------------------------------

* any type and unknown type

let data:any = "my data";
data = 45;
data = true;


let data:unknown = "my data";
data = 45;
data = true;

let data:any = getEmployee() ==> API call to server ==> JSON if all good else it returns "string with error message".

"unknown" enforces type checking before using it

npm install -g typescript

=================

```
Arrow functions:

function add(x,y) {
	return x + y;
}
// arrow function
let add = (x,y) => x + y;

```



* Generics and Functions
* High Order Functions

HOF: --> treat functions as first-class members [ same as primitive or object]
1) functions which accept functions as arguments
2) functions which return a function 

```
let no:number[] = [5,2,66,11];

let i:number;
for(i = 0; i < no.length; i++ ) {
	console.log(no[i]);
}

for(i = 0; i < no.length; i++ ) {
	alert(no[i]);
}

for(i = 0; i < no.length; i++ ) {
	document.write(no[i]);
}

Alternate: HOF

function forEach(elems, action) : void {
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		action(elems[i]);
	}
}

forEach(no, console.log);
forEach(no, alert);
forEach(no, document.write);


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


let i:number;
for(i = 0; i < products.length; i++ ) {
	console.log(products[i]);
}

function forEach<T>(elems:T[], action:(elem:T) => void) : void {
	let i:number;
	for(i = 0; i < elems.length; i++ ) {
		action(elems[i]);
	}
}

forEach(no, console.log);
forEach(no, alert);
forEach(products, console.log); // fails

let names:string[] = ["Harry", "Gavin", "Peter", "Anna"];

forEach(names, console.log);

```


type PredicateFn<T> = (elem:T) => boolean;

filter<T>(elems:T[], predicate:PredicateFn){

}

https://rxmarbles.com/


