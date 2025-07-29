// const tag = prompt("만들고 싶은 태그?");
// const bg = prompt("배경색?");
// const contents = prompt(" 컨텐츠");

// const newTag = document.createElement(tag);
// newTag.style.backgroundColor = bg;
// newTag.innerHTML = contents;

// document.body.appendChild(tag);

const foodList = prompt("좋아하는 음식들?").split(" ");
const colorList = ["red","orange","yellow","green","blue","indigo","purple"];

foodList.forEach((x,i) =>{
    const btn = document.createElement("button");
    btn.innerHTML = x;
    btn.style.color = color[ i % 7];
    document.body.appendChild(btn);
});