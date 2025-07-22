//일반 함수[구문법]
function plus100(x){
    return x + 100;
}
//화살표 함수[신문법]
const plus100 = (x) => {
    return x + 100;
}

const a = (x) =>{
    return  x*2;
}
const a1 = (x) =>{
    return x-500;
}
const a2 = (x,y) =>{
    return x > y ? x : y
    //     if(x > y){
//         return x;
//     } else{
//         return y;
//     }
// }
}
const a3 = (str) =>{
    return str.length;
}

const a4 =(str) =>{
    return  str.length > 10 ? "길이가 길어요!": "길이가 적당해요";
    //     if(str.length > 10){
//         return "길이가 길어요!";
//     }else{ 
//         return "길이가 적당해요"
//     }
// }
}
const a5 = (str) =>{
    return `${str}하다니 럭키키비자나`;
}

const a6 = (x,y) =>{
    return x ** y;
}

const a7 = (x,y) =>{
    return x-y;
}
const a8 = (str) =>{
    return str.includes("a") || str.includes("b") ? "a,b 포함!" :"a,b 미포함!" 
}
const a9 = (x) =>{
    return [x*1,x*2,x*3,x*4];
}
const a10 = (str,x) =>{
    return str.slice(0,x+1); 
}
