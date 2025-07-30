const minus = document.querySelector(".minus")
const num = document.querySelector(".num")
const plus = document.querySelector(".plus")
const price = document.querySelector(".price")

plus.addEventListener("click", () => {
    num.innerHTML= +num.innerHTML+1;
    price.innerHTML= +price.innerHTML+15900;
});
minus.addEventListener("click",() => {
    Nownumber = num.innerHTML;
    if(Nownumber == 1){
        num.innerHTML = 1;
    }else{
        num.innerHTML = +num.innerHTML-1;
    }
     price.innerHTML= +price.innerHTML-15900;
})

