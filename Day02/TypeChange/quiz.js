const first = window.prompt("첫번쨰 숫자?");
const second = window.prompt("두번쨰 숫자?");
const result = Number(first) + Number(second);
window.alert(`${first} + ${second} = ${result}`);

const age = window.prompt("몇살입니까?");
const year = 2025 - Number(age) + 1;
window.alert(`귀하의 태어난 년도는 ${year}년도 입니다`);
