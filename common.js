let root = document.getElementById("root");
root.style.display = "grid";
root.style.gridTemplateColumns = "270px 270px 270px 270px"

for(i=0;i<16; i++) {
  let div = document.createElement('div')
  root.appendChild(div);
  div.style.backgroundColor = "lightgray";
  div.style.borderWidth = "1px";
  div.style.borderStyle = "solid";
  div.style.borderColor = "black";
  div.style.width = "250px";
  div.style.height = "400px";
  div.style.marginLeft = "10px";
  div.style.marginBottom = "10px";

}

let rootChild = root.children;
console.log(rootChild);
console.dir(rootChild);

rootChild[0].addEventListener("click", changeColorBlack)
rootChild[1].addEventListener("click", changeColorBlack)
rootChild[2].addEventListener("click", changeColorBlack)
rootChild[3].addEventListener("click", changeColorBlack)
rootChild[4].addEventListener("click", changeColorBlack)
rootChild[5].addEventListener("click", changeColorBlack)
rootChild[6].addEventListener("click", changeColorBlack)
rootChild[7].addEventListener("click", changeColorBlack)
rootChild[8].addEventListener("click", changeColorBlack)
rootChild[9].addEventListener("click", changeColorBlack)
rootChild[10].addEventListener("click", changeColorBlack)
rootChild[11].addEventListener("click", changeColorBlack)
rootChild[12].addEventListener("click", changeColorBlack)
rootChild[13].addEventListener("click", changeColorBlack)
rootChild[14].addEventListener("click", changeColorBlack)
rootChild[15].addEventListener("click", changeColorBlack)

let counter = 0
function changeColorBlack(){
  if(counter === 0) {
    // rootChild[0].style.backgroundColor = "black";
    this.style.backgroundColor = "black";
    counter = counter + 1;
  }
  else if(counter === 1) {
    // rootChild[0].style.backgroundColor = "lightgray"
    this.style.backgroundColor = "lightgray"
    counter = 0;
  }
}