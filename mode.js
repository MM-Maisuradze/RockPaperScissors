let mode = localStorage.getItem("mode");
//1=light
//2=dark
let body= document.body;
let h1Text = document.querySelector(".h1Text")
let btR = document.querySelector(".btR");
let btP = document.querySelector(".btP");
let btS = document.querySelector(".btS");
let resetbt = document.querySelector(".resetbt");
let btLD = document.querySelector("#bt-ld");
let img1 = document.querySelector("#light-dark");

checkimg();
check();

btLD.addEventListener("click", function(){
  if (mode == 1) {
    mode = 0;
    localStorage.setItem("mode", 0)
  } else{
    mode = 1;
    localStorage.setItem("mode", 1);
  }
  checkimg();
  check();
})

function checkimg(){
  console.log(mode);
  if(mode==1) img1.src = "dark.png";
  else img1.src = "light.png";
}
function check(){
  if(mode==1) {
    body.style.backgroundColor = "rgb(220, 245, 255)";

    h1Text.style.color = "black";
    btR.style.backgroundColor = "black";
    btP.style.backgroundColor = "black";
    btS.style.backgroundColor = "black";
    img1.style.width = "40px";
  }else{
    body.style.backgroundColor = "#202124";

    h1Text.style.color = "white"
    btR.style.backgroundColor = "white";
    btP.style.backgroundColor = "white";
    btS.style.backgroundColor = "white";
    img1.style.width = "45px";
  }
}