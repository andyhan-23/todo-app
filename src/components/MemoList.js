import MemoListItem from "./MemoListItem";
import "./MemoList.scss";

const MemoList = ({ memos, Delete, Notice }) => {
  return (
    <div className="MemoList">
      {memos.map((memo) => (
        <MemoListItem
          memo={memo}
          key={memo.id}
          Delete={Delete}
          Notice={Notice}
        />
      ))}
    </div>
  );
};
export default MemoList;
