const a = (x) =>{
    return x * 2 + 10;
}
const test = [3, 6, 9, 12, 15].map(a);
console.log(test)

const a1 = (x) =>{
    return x % 2 ? x*2 : x*3;
}
const test1 = [1,2,3,4,5,6,7,8,9,10].map(a1);
console.log(test1)

const a2 = (x) =>{
    return x < 5 ? 1 : 2;
}
const test2 = [1,2,3,4,5,6,7,8,9,10].map(a2);
console.log(test2)

const a3 = (x) =>{
    return x % 3 ? "😊": "💛" 
}
const test3 = [1,2,3,4,5,6,7,8,9,10].map(a3);
console.log(test3)

const a4 = (x) =>{
    return x.length;
}
const test4 = ["apple", "mango", "juice", "kiwi", "strawberry"].map(a4);
console.log(test4)