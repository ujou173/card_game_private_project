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

for(i=0; i<rootChild.length; i++) {
  rootChild[i].addEventListener('click', changeColorBlack)
}


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