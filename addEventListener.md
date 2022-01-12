### 이벤트 리스너
```js
target.addEventListener(type, listener[, option])
target.addEventListener(type, listener[, useCatuere])
```
#### 매개변수

1. 콜백 함수(리스너 함수) 
* 이벤트와 같이 어떤 동작이 들어올떄 마다 연이어서 실행되는함수를 말한다.
```js
target.addEventListener(type, listener) 
//에서 listener에 해당
//단, 콜백함수가 매개변수로 들어갈때는 ()를 붙이면 안된다.
//target.addEventListener(type, undefined) 와 같은 상황이 벌어짐 
```

2. option 매개변수
* capture : target에 listener 실행하나? boolean형

리턴값도 있다
    없다면 undefined라고 나올수 있음

---

```js
event.target.id 
```
-> 이벤트 타겟을 구별할 수 있음 값은 target1, target2 같은 html의 attribute를 가르킴 


ie8이하에서는 호환되지 않는다
attachEvent 메소드를 사용해야한다. 
근데...-> 알아서 라이브러리가 해준다.

프로퍼티 방식의 이벤트 처리는 단 하나의 결과만 반환함

하나의 리스너를 가지고 여러개의 이벤트 타겟 지정하기
-> 이벤트 리스너를 재활용 할 수 있음


---

화살표 함수