const a = (x) =>{
    return x**2;
}
const test = [1, 2, 3, 4].map(a);
console.log(test);

const a1 = (x) =>{
    return x.toUpperCase();
}
const test1 = ["hong", "kim", "lee"].map(a1);
console.log(test1);

const a2 = (x) =>{
    return x < 60 ? "불합격" : "합격";
}
const test2 = [85, 42, 77].map(a2);
console.log(test2);

const a3 = (x) =>{
    return x * 0.8;
}
const test3 = [10000, 20000, 30000, 40000].map(a3);
console.log(test3);

const a4 = (x) =>{
    return x.name;
}
const test4 = [{name: '홍길동', age: 16},{name: '김철수', age:17}].map(a4);
console.log(test4);