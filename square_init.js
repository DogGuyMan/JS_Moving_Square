const debugNum = false;

function checkElement(_Element){
    if(debugNum){
        console.log(_Element);
        console.dir(_Element);
    }
}

////////////////////////////////////////////////////////
// 캔버스를 다루기위한 기본 세팅
let Canvas1Element = document.querySelector("#canvas1");
let ctx1 = Canvas1Element.getContext("2d");

//Canvas1Element 의 폭 절반
let Canvas1Element_widthMid = Canvas1Element.width /2;
//Canvas1Element 의 높이 절반
let Canvas1Element_heightMid = Canvas1Element.height /2;

checkElement(Canvas1Element_heightMid);
checkElement(Canvas1Element_widthMid);
checkElement(ctx1);

ctx1.fillStyle = "green";
ctx1.fillRect(0, 0, 200, 200);
//////////////////////////////////////////////////////
let Canvas2Element = document.querySelector("#canvas2");
let ctx2 = Canvas2Element.getContext("2d");

//Canvas2Element 의 폭 절반
let Canvas2Element_width = Canvas2Element.width /2;
//Canvas2Element 의 폭 절반
let Canvas2Element_height = Canvas2Element.height /2;

//음직일 상자 크기
let rectWidth = 10;
let rectHeight= 10;

// 음직일 상자의 시작점
let rectStartPx_X = (Canvas2Element_width - rectWidth)/2
let rectStartPx_Y = (Canvas2Element_height - rectHeight)/2

//key가 눌렸는지 
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
//////////////////////////////////////////////////////
