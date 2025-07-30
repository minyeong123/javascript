const minus = document.querySelector(".minus")
const num = document.querySelector(".num")
const plus = document.querySelector(".plus")

plus.addEventListener("click",() =>{
    const nowNumber = +num.innerHTML;
    num.style.color = nowNumber < 9 ? "black":"blue";
    num.innerHTML= +num.innerHTML+1;
})
minus.addEventListener("click",() =>{

    const nowNumber = +num.innerHTML;
    if (nowNumber==0){
        num.innerHTML =0;
    }else{
        num.innerHTML= +num.innerHTML-1;
    }
      if(nowNumber < 11){
        num.style.color ="black";
    }else{
        num.style.color ="blue";
    }

})
