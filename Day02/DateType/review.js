const day = window.prompt("오늘 요일은?");
const time = window.prompt("현재 시간은?");
window.alert(`오늘은 ${day}요일이고 현재${time}시입니다! `);

const name = window.prompt("이름은?");
const food_first = window.prompt("첫번째 좋아하는 음식은?");
const food_second = window.prompt("두번째 좋아하는 음식은?");
const food_third = window.prompt("세번째 좋아하는 음식은?");
window.alert(
  `${name}님은 최애 음식 순서 1.${food_first} 2.${food_second} 3.${food_third}`
);
