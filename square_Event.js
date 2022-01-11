document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//키보드 눌렸을떄 일어나는 함수 (매개변수 : E)
//각 방향키 눌린게 맞다면 해당 변수 true
//e.key는 각각 아스키 코드로 


function keyDownHandler(e) {
    if(e.key == "ArrowRight"){
        rightPressed = true;
    }
    else if(e.key == "ArrowLeft"){
        leftPressed = true;
    }
    else if(e.key == "ArrowUp"){
        upPressed = true;
    }
    else if(e.key == "ArrowDown"){
        downPressed = true;
    }
    console.log(e)
}

function keyUpHandler(e) {
    if(e.key == "ArrowRight"){
        rightPressed = false;
    }
    else if(e.key == "ArrowLeft"){
        leftPressed = false;
    }
    else if(e.key == "ArrowUp"){
        upPressed = false;
    }
    else if(e.key == "ArrowDown"){
        downPressed = false;
    }
    console.log(e)
}
