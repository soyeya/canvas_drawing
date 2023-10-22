const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect(); 

var pos = {

    x : -1,
    y : -1

};

canvas.addEventListener("mousemove" , function(e){

    const x = e.offsetX; //offset값으로 지정 -> 마우스 좌표값을 정확히 잡아줌
    const y = e.offsetY;
    console.log(x);
    console.log(y);

    var $hover = canvas.classList.contains("hover");

    if($hover == true){ 

        ctx.beginPath(pos.x, pos.y); //경로 생성
        ctx.moveTo(x,y); //선 시작 좌표
        console.log('if값 도출');
    }
    else{
        ctx.lineTo(x,y); //선 끝 좌표
        ctx.stroke(); //선 그리기

    }

});


const SaveImg = document.querySelector(".save");
const ImgLink = document.createElement("a");
ImgLink.textContent = 'Save';
SaveImg.appendChild(ImgLink);

ImgLink.addEventListener("click" , function(){

    ImgLink.href = canvas.toDataURL(); //canvas의 toDataURL 값을 이용해 이미지 다운로드값 생성
    ImgLink.download = "myDrawing.png"; 

});


const colorBtn = document.querySelectorAll(".colorBtn li");

let colorName = [

    "#333",
    "#c70000",
    "#006ab1",
    "#6f00ff",
    "#216400",
    "#ffee00",
];

function changeStroke(){

  for(var i = 0; i < colorName.length; i++){ 
    
    colorBtn[i].setAttribute("class" , `changeColor${i}`);
 
};};

changeStroke(); 

 colorBtn[0].addEventListener("click" ,  function(e){

    const x = e.screenX; //screenX 값으로 변경 -> 현 마우스 위치에서 칼라변경 가능
    const y = e.screenY;

    if(colorBtn[0].classList.contains(`changeColor${0}`)){

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = colorName[0];

    };
});

 colorBtn[1].addEventListener("click" ,  function(e){
    
    const x = e.screenX;
    const y = e.screenY;

    if(colorBtn[1].classList.contains(`changeColor${1}`)){

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = colorName[1];

    };
});
 
 colorBtn[2].addEventListener("click" ,  function(e){
    
    const x = e.screenX;
    const y = e.screenY;

    if(colorBtn[2].classList.contains(`changeColor${2}`)){

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = colorName[2];

    };
});

 colorBtn[3].addEventListener("click" ,  function(e){
    
    const x = e.screenX;
    const y = e.screenY;

    if(colorBtn[3].classList.contains(`changeColor${3}`)){

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = colorName[3];

    };
});

 colorBtn[4].addEventListener("click" ,  function(e){
    
    const x = e.screenX;
    const y = e.screenY;

    if(colorBtn[4].classList.contains(`changeColor${4}`)){

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = colorName[4];

    };
});

 colorBtn[5].addEventListener("click" ,  function(e){
    
    const x = e.screenX;
    const y = e.screenY;

    if(colorBtn[5].classList.contains(`changeColor${5}`)){

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.strokeStyle = colorName[5];

    };
});


 const reset = document.querySelector(".reset");

 reset.addEventListener("click" , function(e){

    const x = e.screenX; //reset 버튼을 눌렀을 때, 현 마우스 위치에서 시작
    const y = e.screenY;
    
    ctx.clearRect(pos.x, pos.y , 800, 400); //canvas의 clearRect로 x, y, width,height 값 지정 뒤 리셋
    ctx.beginPath();
    ctx.moveTo(x, y);

 });