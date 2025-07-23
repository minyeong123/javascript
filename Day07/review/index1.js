const starbucks = [
    { name: "아메리카노", price: 4500, shots: 2, ingredients: ["water", "caffeine"] },
    { name: "라떼", price: 5500, shots: 2, ingredients: ["water", "milk", "caffeine"] },
    { name: "돌체라떼", price: 6500, shots: 3, ingredients: ["water", "milk", "caffeine", "condensed milk"] },
    { name: "바닐라 크림", price: 5500, shots: 2, ingredients: ["milk", "caffeine", "vanilla", "water"] },
    { name: "카페 모카", price: 6000, shots: 2, ingredients: ["milk", "chocolate", "water", "caffeine"] },
  ];
const fn1= (x) => {
    x.price = x.price * 0.8;
    x.shots = x.shots - 1 ;
    return x;
};
const a = starbucks.map(fn1);

const fn2 = (x) => {
    x.name = x.name.includes("라떼") ? "재고없음": x.name;
    return x;
}
const a1 = starbucks.map(fn2);

const fn4 = (y) => {
    return y == "caffeine" ? "decaffeine" : y;
};
const fn3 = (x) => {
    x.ingredients = x.ingredients.map(fn4)
    return x;
}
const a2 =starbucks.map(fn3);
window.console.log(a2)
