import { useState, useCallback } from "react";
import { GoPencil } from "react-icons/go";
import "./MemoInsert.scss";

const MemoInsert = ({ Add }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      Add(value);
      setValue("");
      e.preventDefault();
    },
    [Add, value]
  );
  return (
    <form className="MemoInsert" onSubmit={onSubmit}>
      <input placeholder="입력하기" value={value} onChange={onChange} />
      <button type="submmit">
        <GoPencil />
      </button>
    </form>
  );
};
export default MemoInsert;
