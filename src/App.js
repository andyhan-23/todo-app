import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import MemoTemplate from "./components/MemoTemplate";
import MemoInsert from "./components/MemoInsert";
import MemoList from "./components/MemoList";
const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어보기",
      checked: false,
    },
  ]);

  const [memos, setMemos] = useState([
    {
      id: 1,
      write: "코딩 테스트",
      important: true,
    },
    {
      id: 2,
      write: "자격증",
      important: false,
    },
    {
      id: 3,
      write: "리액트",
      important: true,
    },
  ]);

  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos]
  );

  const Add = useCallback(
    (write) => {
      const memo = {
        id: nextId.current,
        write,
        important: false,
      };
      setMemos(memos.concat(memo));
      nextId.current += 1;
    },
    [memos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const Delete = useCallback(
    (id) => {
      setMemos(memos.filter((memo) => memo.id !== id));
    },
    [memos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  const Notice = useCallback(
    (id) => {
      setMemos(
        memos.map((memo) =>
          memo.id === id ? { ...memo, important: !memo.important } : memo
        )
      );
    },
    [memos]
  );
  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
      <MemoTemplate>
        <MemoInsert Add={Add} />
        <MemoList memos={memos} Delete={Delete} Notice={Notice} />
      </MemoTemplate>
    </>
  );
};
export default App;
