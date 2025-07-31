const input =document.querySelector("input")
const span = document.querySelector("span")
const button = document.querySelector("button")
input.addEventListener("input",(x) =>{
    console.log(x.target.value);
    span.innerHTML=  x.target.value.length +"/10"; 
    span.style.color = x.target.value.length > 10 ? "red": "black";
});
button.addEventListener("click",(x)=>{
    x.target.innerHTML = x.target.innerHTML == "😎" ? "😝" :"😎";
    input.type = input.type =="text" ? "password" :"text"
})
