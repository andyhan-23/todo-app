import { MdNotificationImportant, MdNotificationsNone } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import cn from "classnames";
import "./MemoListItem.scss";
const MemoListItem = ({ memo, Delete, Notice }) => {
  const { id, write, important } = memo;
  return (
    <div className="MemoListItem">
      <div className={cn("checkbox", { important })} onClick={() => Notice(id)}>
        {important ? <MdNotificationImportant /> : <MdNotificationsNone />}
        <div className="text">{write}</div>
      </div>
      <div className="remove" onClick={() => Delete(id)}>
        <BsTrash />
      </div>
    </div>
  );
};
export default MemoListItem;
