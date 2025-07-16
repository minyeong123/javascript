const score = +window.prompt("영어점수는?")
if(score >= 90){
    window.console.log("A")
}else if(score >= 80){
    window.console.log("B")
}else if(score >= 70){
    window.console.log("C")
}else if(score >= 60){
    window.console.log("D")
}else{
    window.console.log("F")
}

        
const a = +window.prompt("정수 입력")

if(a > 0 && a % 2 == 1){
    window.console.log("양의 홀수")
}else if(a > 0 && a % 2 == 0){
    window.console.log("양의 짝수")
}else if(a < 0 && a % 2 == 0){
    window.console.log("음의 짝수")
}else if(a < 0 && a % 2 == -1){
    window.console.log("음의 홀수")
}else{
    window.console.log("0")
}