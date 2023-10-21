const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect(); 
var canvas_width = canvas.offsetWidth;
console.log(canvas_width);

var pos = {

    x : -1,
    y : -1,

}

canvas.addEventListener("mousemove" , function(e){

    const x = e.pageX;
    const y = e.pageY;
    console.log(x);
    console.log(y);

    const last_x = e.pageX - 500;
    const last_y = e.pageY - 80;
    console.log(last_x);
    console.log(last_y);

    var $hover = canvas.classList.contains("hover");

    if($hover === true){ 

        ctx.beginPath(); //경로 생성
        ctx.moveTo(x, y); //선 시작 좌표
    }
    else{
        ctx.lineTo(last_x, last_y); //선 끝 좌표
        ctx.stroke(); //선 그리기
    }


});

