import React from "react";
import ActionButton from "../../../../../atoms/ActionButton";

function NotesItemAction({ id, archived, onDelete, onArchived }) {

  const archivedStatsBtn = (
    (archived ?
      <ActionButton desc="Pindahkan" className="note-item__archive-button" onClick={() => onArchived(id)} /> :
      <ActionButton desc="Arsipkan" className="note-item__archive-button" onClick={() => onArchived(id)} />)
  );

  return (
    <div className="note-item__action">
      <ActionButton id={id} className="note-item__delete-button" onClick={() => onDelete(id)} desc="Delete" />
      {archivedStatsBtn}
    </div>
  );
}

export default NotesItemAction;
