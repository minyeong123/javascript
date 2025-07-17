const a = [
    {name:"시내버스", price: 1200},
    {name:"광역버스", price: 2000},
    {name:"마을버스", price: 1000}
]
const b = window.prompt("버스 노선 종류") -1;
const b1 = window.prompt("승객 나이?");

// if(b1 <= 7){
//     window.console.log(`${a[b].name} 요금 : 0원`)
// }else if(b1 <= 19) {
//     window.console.log(`${a[b].name} 요금 : ${a[b].price *0.7}`)
// }else if (b1 < 65){
//     window.console.log(`${a[b].name} 요금 : ${a[b].price}`)
// }else {
//     window.console.log(`${a[b].name} 요금 : 0원`)
// }
const isFree = b1 <= 7 || 65 <= b1;
const isYouth = 8 <= b1 && b1 <= 19;

if (isFree) {
  window.console.log(`${a[b].name} 요금: 없음`);
} else if (isYouth) {
  window.console.log(`${a[b].name} 요금: ${a[b].price * 0.7}원`);
} else {
  window.console.log(`${a[b].name} 요금: ${a[b].price * 1}원`);
}