import Person from './Person'; // resolve from local module
import {forEach, map} from './lib';
import Product from './Product';

console.log("Hello World!!!");

let p1:Person = new Person("Kim", 56);
let p2:Person = new Person("Linda", 36);

console.log(p1.getName(), p1.getAge());
console.log(p2.getName(), p2.getAge());


let products:Product[] = [
    {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
    {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];
     
let names:string[] = map(products, (e => e.name));

forEach(names, console.log);

console.log("&&&&&&&&&")