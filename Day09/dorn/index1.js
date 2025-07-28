// 1. Document[HTML] queryselect(찾기), createElement(만들기)
// 2. Element[TAG] innerHTML(글씨넣기), style(css), appendChild(자식 태그로 넣기)


const div = document.createElement("div");
div.innerHTML ="빨리 끝내줘";
div.style.color = "pink"
div.style.backgroundColor = "green"
div.style.fontSize = "30px"
document.body.appendChild(div);

const button = document.createElement("button");
button.innerHTML = "언해피!"
button.style.color ="blue"
button.style.backgroundColor = "yellow"
button.style.fontSize ="20px"
button.style.padding ="10px"
document.body.appendChild(button);