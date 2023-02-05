# 일정 관리/메모장 웹 어플리케이션

## UI구성하기



### `1.TodoTemplate`

화면을 가운데에 정렬시켜 주며, 앱 타이틀을 보여 줍니다. children으로 내부 jsx를 props로 받아 와서 렌더링해 줍니다.

### `2.TodoInsert`

새로운 항목을 압력하고 추가할 수 있는 컴포넌트 입니다. state를 통해 input의 상태를 관리 합니다.

### `3.TodoListItem`

각 할 이 항목에 대한 정보를 보여주는 컴포넌트 압니다. todo 객체르 props로 받아 와서 상태에 따른 다른 스타일으 ui를 보여줍니다. 

### `4.TodoListItem`

todos배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여 줍니다.


## 구현화면(1)
<img width="860" alt="스크린샷 2023-02-05 오전 11 30 28" src="https://user-images.githubusercontent.com/98483125/216798452-9c8dd848-1af4-48e8-a824-99e5c80f5b30.png">

## 구현화면(2)
<img width="775" alt="스크린샷 2023-02-05 오후 5 59 53" src="https://user-images.githubusercontent.com/98483125/216810346-e1df0c94-eaf9-421b-8d72-33f8ba9d8e24.png">
