import "./MemoTemplate.scss";

const MemoTemplate = ({ children }) => {
  return (
    <>
      <div className="MemoTemplate">
        <div className="title">메모장</div>
        <div className="content">{children}</div>
      </div>
    </>
  );
};
export default MemoTemplate;
