import React from "react";
import NotesList from "./list/NoteList";

function NotesCategory({ notes, type, keyword, onDelete, onArchived }) {
  const isArchived = (
    (type === "archived")
      ? <NotesList notes={notes.filter((note) => note.archived === true)} keyword={keyword} onDelete={onDelete} onArchived={onArchived} />
      : <NotesList notes={notes.filter((note) => note.archived === false)} keyword={keyword} onDelete={onDelete} onArchived={onArchived} />
  )

  return (
    <>
      {isArchived}
    </>
  );
}

export default NotesCategory;
