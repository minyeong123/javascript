    // String: String(), "+"
 // Number: Number(), parseInt(), parseFloat(), 산술연산
 // Boolean: Boolean(), !, 비교연산

// 1. 문자열에서 배열로 바꾸기
// -1) split 함수 사용하기: "apple watch".split("")
// -2) 스프레드(...) 연산자

//2. 배열에서 문자로 바꾸기
//-1) join()

//quiz

const word = window.prompt("영어 단어 입력");
[...word].map((x) => x == "a" || x == "e" || x == "i" ? x.toUpperCase() : x).join("")
// [..."apple"].map((x) => ([..."aeiou"].some((v) => v == x) ? x.toUpperCase() : x)).join("");

