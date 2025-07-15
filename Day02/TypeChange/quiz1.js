const side = window.prompt("한변의 길이는?");
const a1 = Number(side) * Number(side);
window.alert(`한변의 길이: ${side} 정사각형의 넓이:${a1}`);

const base = window.prompt("밑변은?");
const height = window.prompt("높이는?");
const width = Number(base) * Number(height);
window.alert(`밑변 ${base}과 높이${height} 정삼각형의 넓이:${width}`);

const won = window.prompt("원화는?");
const yen = Number(won) / 10;
window.alert(`${won}원은 ${yen}엔 입니다!`);

const height1 = window.prompt("키?");
const weight = window.prompt("몸무게?");
const bmi = Number(weight) / (Number(height1) * Number(height));
window.alert(`키: ${height1} 몸무게: ${weight} BMI:${bmi}`);

const min = window.prompt("몇분?");
const sec = Number(min) * 60;
window.alert(`분: ${min} 초: ${sec}`);
