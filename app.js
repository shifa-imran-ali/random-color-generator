const button = document.getElementById('button');
button.onclick = () =>{
let color = "#";
let letters = "1234567890ABCDEF";
for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor = color;
}