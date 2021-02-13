const btn = document.querySelector("button");
const h1 = document.querySelector("h1");


btn.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
    
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;

    h1.innerText = newColor;

})


const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`

}

const buttons = document.querySelectorAll("button");

for (let button of buttons){
    button.addEventListener("click", function(){
        button.style.backgroundColor = makeRandColor();
        button.style.color = makeRandColor();

    })
}

