const input = document.querySelector("input");
const button = document.querySelector("button");
const span = document.querySelector("span");
const password = document.querySelector("password");
const a = document.querySelector(".a")
const b = document.querySelector(".b")
const c = document.querySelector(".c")

input.addEventListener("input",(x)=> {
   const length = x.target.value.length 
   span.style.color = length > 5 && length <21 ? "green" : "black";
   button.style.backgroundColor =length > 5 && length <21 ? "black" : "white";
   button.style.color =length > 5 && length <21 ? "white" : "black";
});

password.addEventListener("password",(x)=>{
    a.style.color = x.target,value.soome((v)=> v == 1,2,3,4,5,6,7,8,9) ? "green":"black"
})


