function a1 (x) {
    return x**2;
}
const test = a1(10)
window.console.log(test)

function a2 (x) {
    return x +"은 맛있다"
}
const test1 = a2("초밥")
window.console.log(test1)

function a3 (x) {
    return x % 2  ? "홀수": "짝수"  
}
const test2 = a3(4)
window.console.log(test2)

function a4 (x) {
    return [x*1,x*2,x*3]
}
const test3 = a4(3)
window.console.log(test3)
