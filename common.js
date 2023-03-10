const root = document.getElementById("root");
root.style.display = "grid";
root.style.gridTemplateColumns = "270px 270px 270px 270px"

for(i=0;i<16; i++) {
  const div = document.createElement('div')
  root.appendChild(div);
}
const cardObjStyle = {
  backgroundColor : "lightgray",
  border : "1px solid black",
  width : "250px",
  height : "400px",
  marginLeft : "10px",
  marginBottom : "10px",
}


let rootChild = root.children;
console.log(rootChild);
console.dir(rootChild);

let cardArr = [];
for(let key in cardObjStyle) {
  cardArr.push(key);
}
for(j=0;j<16;j++) {
  for(i=0; i<cardArr.length; i++) {
    rootChild[j].style[cardArr[i]] = cardObjStyle[cardArr[i]];
  }
}

for(i=0; i<rootChild.length; i++) {
  rootChild[i].addEventListener('click', changeColorBlack)
}

let counter = 0
function changeColorBlack(){
  if(counter === 0) {
    // rootChild[0].style.backgroundColor = "black";
    this.style.backgroundColor = "black";
    counter = counter + 1;
    console.dir(this);
  }
  // 한번 선택한 카드는 취소 불가능하게 하고
  // 화면 상에 2개의 뒤집힌 카드가 있을 경우 데이터 비교 실행 -> this를 이용해 해당 카드의 데이터를 다른 변수에 저장 후 비교
  // 정답이면 그대로 두고 아닐 경우 다시 뒤집음
  else if(counter === 1) {
    // rootChild[0].style.backgroundColor = "lightgray"
    this.style.backgroundColor = "lightgray"
    counter = 0;
  }
}
// 카드가 2개 뒤집어졌을때만 데이터 비교 실행

// 카드 내용물 배열
let contentArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];

// 랜덤함수
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

// 데이터 비교를 위한 집합
const randomSet = new Set();
// while을 이용한 중복 방지 코드 좀 더 살펴볼 것
// has를 찾아볼 것



// getRandomInt(0,16);