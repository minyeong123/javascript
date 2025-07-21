const password = window.prompt("비밀번호 설정:")
const a = password.length <= 4 && password.length <= 12;
const b = password.includes("@")|| password.includes("@") || password.includes("@");
const c = password.startsWith("it");

if(!a){
    window.console.log("비밀번호 길이가 맞지않습니디.")
}else if(!b){
    window.console.log("비밀번에 @ ! #이 없습니다.")
}else if(!c){
    window.console.log("비밀번호 시작이 it가 아닙니다.")
}else{
    window.console.log("비밀번호 설정 ")
}