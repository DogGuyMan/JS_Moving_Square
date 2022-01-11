//음직일 도형을 그리는 함수
function drawRect(){
    ctx2.rect(rectStartPx_X, rectStartPx_Y, rectWidth, rectHeight);
    ctx2.strokeStyle = "lightgreen";
    ctx2.stroke();
}

// 먼저 전체 캔버스를 지움 > 단일 프레임에 처음부터 모든걸 그림
// 눌려진 키 변수 확인

function draw(){
    ctx2.closePath(0,0,Canvas2Element.width, Canvas2Element.height);
    drawRect();

    if(rightPressed) {rectStartPx_X += 1;}
    else if(leftPressed) {rectStartPx_X -= 1;}
    else if(upPressed) {rectStartPx_Y -= 1;}
    else if(downPressed) {rectStartPx_Y += 1;}
}

setInterval(draw,10);