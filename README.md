# JS_Moving_Square

<img src="https://media.giphy.com/media/ymTeEmxwr6eRWPxxoW/giphy.gif" width=100%>

## 개요

* 자바스트립트의 이해를 높이기 위한 프로젝트

## canvas_API

[Canvas API 모질라 재단](https://developer.mozilla.org/ko/docs/Web/API/Canvas_API)

*개요*
그래픽을 그리기위한 수단
애니메이션, 게임그래픽, 데이터 시각화 등등에 사용
1. 주로 2D 그래픽에 중점을 두고있음
2. WevGL으로 2D, 3D 그래픽 사용 가능

-----

### 캔버스 선택, 그리기
```html
<canvas id="canvas"></canvas>
```

```js
//1. canvas 엘리먼트(요소) 가져오기
let CanvasElement = document.querySelector("#canvas");

//2. 랜더링될 그리기 대상을 얻는다
let ctx = CanvasElement.getContext()

//3. 실제 그리기는 CanvasRenderingContext2D으로 이루어짐
    /*
        https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    
        Canvas API의 일부로
        Drawing shape, Text, images, Object 그리기에 사용

        보통 ctx라는 변수로 불러와진 그리기 대상을 이용해서 그림
    */

ctx.freeStyle ="green";//specifies the color, gradient, or pattern to use inside shapes.

ctx.fillRext(x, y, width, height);

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)},
        ${Math.floor(255 - 42.5 * j)},
        0)`;
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}

```

### 2. 경로 PATH
경로는 직사각형 이외의 도형

-----
