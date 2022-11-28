function forEach(elems, action) {
    var i;
    for (i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}
function filter(elems, predicateFn) {
    var res = [];
    var i;
    for (i = 0; i < elems.length; i++) {
        if (predicateFn(elems[i])) {
            res.push(elems[i]);
        }
    }
    return res;
}
var nos = [5, 2, 66, 11];
var evens = filter(nos, (function (e) { return e % 2 === 0; }));
var products = [
    { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
    { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
    { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
    { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
    { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
];
var mobiles = filter(products, (function (p) { return p.category === 'mobile'; }));
forEach(evens, console.log);
forEach(mobiles, console.log);
