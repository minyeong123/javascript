// Object 타입
// key-value
// key는 중복 안됨 - 문자, 숫자
// value 중복 됨 - 아무타입가능
const americano = {
    name: "아메리카노",
    price: 2000,
    isIce: true,
    hasShot: true,
};
//dot. 연산자
window.console.log(americano.name);   // 아메리카노
window.console.log(americano.price);  // 2000
window.console.log(americano.hasShot); // 2000


window.console.log(americano["name"]);   // 아메리카노
window.console.log(americano["price"]);  // 2000
window.console.log(americano["hasShot"]); // 2000


const boardgame = {
    name: "할리갈리",
    players: 4,
    time: "10분",
};

const member = {
    name: "장민영",
    age: 23,
    eyes:{
        left: 1.0,
        right: 1.5,
    },
};
window.console.log(member);
window.console.log(member.name);
window.console.log(member.eyes.right);
window.console.log(member["eyes"]["right"]);

//없는 key을 요청하면 undefined
window.console.log(member.living); // undefined
member.living = "인천";
window.console.log(member.living); // 인천
member.living = "서울"; //서울로 바뀜
delete member.name //이름 삭제