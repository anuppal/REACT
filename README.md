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

```
function<T> add(x: T, y: T) : T {
	return x + y;
}

add(4,5);

add("Hello", "World");

```

NodeJS
* Platform with V8 JavaScript and Libuv Async libraries

Where can I use nodeJS?
1) build traditional web applications [PHP / ASP / Servlet & JSP]
2) Build APIs [ RESTful WS or GraphQL ws]
3) Streaming Platform [ OTT -=> Netflix / Hotstar /..]
4) Build real-time applications [ chatbot]
5) Building client side web application

Why NodeJS for Building client side web application?
1) we might write code in Typescript/LiveScript/CoffeeScript/DART --> JS {JS engine}
2) we might need to do testing [ unit testing / e2e testing]
3) we need to minify / uglify and bundle your application
50+ "ts" files 

somefunction() {
  return 100;
}

s_(){return 100;}

a.ts, b.ts, c.ts..... ==> traspiled and ==> bundle.js

one netwrok call is all it need from browser
<script src="bundle.js"></script>

if not
<script src="a.js"></script>
<script src="b.js"></script>
<script src="c.js"></script>
<script src="d.js"></script>
<script src="e.js"></script>

------------

JavaScript Build tools on top of NodeJS
* Grunt
* Gulp
* Webpack
* esbuild
* parcel
..

Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting. 

* NPM [default package manager provided with NodeJS]
Node Package Manager => manage dependencies / Publish libraries / run scripts
* YARN
* PNPM

===========

1) npm init --y

creates package.json ==> one per project ==> place where all dependencies and dev-dependencies are configured
& scripts are configured [Maven ==> pom.xml]


2) npm i typescript ts-loader webpack webpack-cli html-webpack-plugin -D
npm i lodash

other team members will checkout from "git" and run:
npm i
this checks package.json and installs all dependencies

"ts-loader": "9.4.1" ==> need exact version 9.4.1

"ts-loader": "^9.4.1" ==> version equal or greater than "9.4.1"

"ts-loader": "~9.4.1" ==> major version has to be "9"; minor and patch can be latest

https://registry.npmjs.org by default.

3) tsc --init
this creates tsconfig.json


"sourceMap": true, 

runtime JS code is executing on engine; any error ==> it has to map to "ts" <-- reqiured in development

CommonJS module system:
const webpack = require('webpack'); // NodeJS by default uses CommonJS 

ES 6 module system:
import webpack from 'webpack';

index.ts ==> a.ts ==> b.ts ==> c.ts .... {bundle.js}

d.ts [ not a part of bundle.js]

============

import Person from './Person';

==> check Person.tsx --. Person.ts --> Person.jsx --> Person.js

"scripts": {
    "dev": "webpack --mode development",
    "prod": "webpack --mode production"
 },

 npm run dev

asset bundle.js 5.2 KiB [emitted] (name: main)    
./src/index.ts 1.02 KiB [built] [code generated]  
./src/Person.ts 558 bytes [built] [code generated]
./src/lib.ts 736 bytes [built] [code generated]   
webpack 5.75.0 compiled successfully in 6523 ms   


npm run prod
 
asset bundle.js 1.31 KiB [emitted] [minimized] (name: main)
./src/index.ts 1.02 KiB [built] [code generated]
./src/Person.ts 558 bytes [built] [code generated]
./src/lib.ts 736 bytes [built] [code generated]
webpack 5.75.0 compiled successfully in 3843 ms

---

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. 
<script src="bundle.js"></script>

This is especially useful for webpack bundles that include a hash in the filename which changes every compilation.

<script src="bundle34343#12323.js"></script>

make changes
<script src="bundle@vtrdvd%.js"></script>

Also many bundles will be there
<script src="bundle.js"></script> // my code
<script src="vendor.js"></script> // 3rd party library code
<script src="runtime.js"></script> // like react libary

npm i webpack-dev-server -D

 "start": "webpack serve --mode development",

 npm start

 ====================

 Day 2

 function add(x, y) {
 	return x + y;
 }

 Arrow functions:

 let add = (x,y) => {
 	return x + y;
 }

 OR

let add = (x,y) => x + y;

console.log(add(4,5));

-----------

Most of the libraries available are in "JS".
How to use "JS" in "TS"?

APPROACH 1:
index.ts
import {random} from 'lodash'; //JS library 
console.log(random(2,5));


typings.d.ts
declare module 'lodash' {
    export function random(min:number, max:number) : number
}

APPROACH 2:
https://github.com/DefinitelyTyped/DefinitelyTyped

npm i -D @types/lodash

Example:

npm i react // installs react js library
to use it in TS
npm i -D @types/react

https://createapp.dev/

==============================================

React

* Rendering ==> data to presentation
* SSR ==> server side rendering
* CSR ==> client side rendering

CSR options:
1) DOM --> Document Object Model --> element in the form of Object [JavaScript / VbScript]
--> manipulate pages ==> Create new element / delete / add events

2) jQuery --> library which simplied DOM handling

3) Templates --> HandleBar # / Mustache / Underscore template / jquery template / knockout


Mix static content with dynamic content:
"Hello" is static; {{name}} is dynamic

server sends JSON data as below:

{
	name : "Harry Potter"
}


<script id="template" type="x-tmpl-mustache">
      Hello {{ name }}!
</script>

{{}} is called as interpolation

{
	firstName : 'Raj',
	lastName: 'Kumar',
	avatar: 'images/mine.png'
}

<script id="template" type="x-tmpl-mustache">
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src={{avatar}} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{firstName}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</script>

Hello Harry Potter!

4) SPA ==> Single Page Application ==> index.html with many views
different URLs should display different Views in a single index.html

Landing page
http://amazon.com/

Mobiles page
http://amazon.com/mobiles

iphone page
http://amazon.com/mobiles/iphone

mobiles
http://amazon.com/mobiles?low=150000&high=100000

Cart page
http://amazon.com/cart

Many modules ==> Customer Module, ProductModule, CartModule , PaymentModule

MVC Architectural pattern ==> Model View Controller

Libraries and Framework
1) Backbone ==> Library ==> Model and Controller support was provided; we have to choose any templates as listed above for view

2) AngularJS --> Framework

3) React --> View Library --> component

4) Angular --> Framework --> component / service / guard / router/ pipe

5) Vue
...

https://codepen.io/

JS:
Babel as Pre-processor

External JS:
react
https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js

react-dom
https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js

Save & close

https://github.com/chentsulin/awesome-react-renderer


Different ways of creating React Elements:
1) createElement --> Top Level API
```
let Welcome = React.createElement("h1", {style:{color:'red'}}, "Welcome to React!!!")

console.log(Welcome)

ReactDOM.render(Welcome, document.getElementById("root"));

```
2) functional component returns JSX {JavaScript and XML} ==> Babel / TSC converts JSX to ReactElement
```
function Welcome() {
  return <h1 style={{color:'green'}}>
        Welcome to React!!!
    </h1>
}
console.log(Welcome())
ReactDOM.render(<Welcome />, document.getElementById("root"));

---

function Welcome(props) {
  return <h1 style={{color:'green'}}>
        {props.msg} using {props.template}
    </h1>
}
 
ReactDOM.render(<Welcome msg="Virtual React Training!!!!" template="typescript"/>, document.getElementById("root"));

OR using Destructuring

function Welcome({msg, template}) {
  return <h1 style={{color:'green'}}>
        {msg} using {template}
    </h1>
}


function CustomerCard({firstName, lastName, avatar}) {
 return <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={avatar} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{firstName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
}

```

3) class component
use this in case if component has state and behaviour

class Customer extends React.Component {
	state = {
		firstName : 'George',
		lastName : 'Shaw'
	}

	setName(n) {
		this.firstName = n;
	}

	render() {
		return <div>
				FirstName : {this.state.firstName} <br />
				LastName : {this.state.lastName} <br />
				Message: {this.props.msg}
		</div>
	}

}


ReactDOM.render(<Customer msg="Virtual React Training!!!!" />, document.getElementById("root"));
