// 1
let a = 10;
if (true) {
    let a = 20;
}

console.log(a)

//2
for(let b = 1; b < 10; b++) {
    console.log(b);
}

for(var b = 1; b < 10; b++) {
}
console.log(b)

//3
var c = 10;

function foo3() {
    var c = 20;
}

foo3();

console.log(c)

//4
var cc = "cccc";

function print() {
    console.log(cc)
}

function wrap() {
    var cc = 'bbbb';
    print();
}

wrap();

//5
let d;

console.log(d === null);
console.log(d === undefined);

//6
console.log(10 == 10);
console.log([10] == [10]);
console.log({e: 10} == {e: 10});

//7
console.log(1+"f");
console.log(1+2+'f');
console.log(6+true);
console.log("" == false);
console.log("true" == true);
console.log("1" == true);
console.log("00" == false);

//8
let g;
console.log(typeof g);
g = null;
console.log(typeof g);

//9
function foo9(i){
    console.log(i);

    var i = 20;

    console.log(i);
    console.log(j);

    var j = function() {

    }

    var i = 30;

    console.log(i);

    function i () {}

    console.log(i);

}

foo9(10);

//10
function foo8() {
    this.h = 10;

    this.plusFunction = function(x) {
        const add = function(some) {
            this.h += some;
        };
        add(x);
    };
    this.plusArrowFunction = function(x){
        const add = some => {
            this.h += some;
        };
        add(x);
    };
}

const H = new foo8();
H.plusFunction(10);
console.log(H.h);

H.plusArrowFunction(10);
console.log(H.h);
