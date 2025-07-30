// button.addEventListener("이벤트종류",무엇을)
const button = document.querySelector("button");
button.addEventListener("click", () => {
    alert("집가");
});
const add = document.querySelector(".add")
add.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML="아메리카노"
    document.body.insertAdjacentHTML("beforeend",`<div>아메리카노</div>`);
})