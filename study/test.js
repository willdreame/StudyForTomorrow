// function spacify(str) {
//    return str.split('').filter(item=>item !== ' ').join(' ')
// }

// console.log(spacify('hello world'))

// // 创建js  二维数组
// const dp = Array.from(Array(4),()=>Array(5).fill(0))
// dp[1][1] = 1

// console.log(dp)



// 1////

// var a = 10; 
// var obt = { 
// a: 20, 
// fn: function () { 
// var a = 30; 
// console.log(this.a); 
// }, 
// }; 
// obt.fn(); 
// obt.fn.call(); 
// new obt.fn();


///2

// new Promise(() => { 
//     setTimeout(() => { 
//     console.log(0) 
//     }) 
//     console.log(1) 
//     throw new Error('') 
//     console.log(2) 
//     }).then(() => { 
//     console.log(3) 
//     }, () => { 
//     console.log(4) 
//     }).catch(() => { 
//     console.log(5) 
//     }).then(() => { 
//     console.log(6) 
//     })

//     // 1 4 6 0 

//33


function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
};
Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
};
Foo.getName(); //2
getName();  //4
// Foo().getName; 
getName();  //4
new Foo.getName(); //2
new Foo().getName(); //3
new new Foo().getName(); //3 

    
