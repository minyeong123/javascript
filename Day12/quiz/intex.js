const buy1 =document.querySelector(".buy1")
const buy2 =document.querySelector(".buy2")
const buy3 =document.querySelector(".buy3")
const total =document.querySelector(".total")
const reset =document.querySelector(".reset")

buy1.addEventListener("click",()=>{
    total.innerHTML = "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 5000)+"원";
})
buy2.addEventListener("click",()=>{
    total.innerHTML = "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 6000)+"원";
})
buy3.addEventListener("click",()=>{
    total.innerHTML = "총 " + (parseInt(total.innerHTML.split(" ")[1]) + 6500)+"원";
})
reset.addEventListener("click",()=>{
    total.innerHTML = "총 0원";
})