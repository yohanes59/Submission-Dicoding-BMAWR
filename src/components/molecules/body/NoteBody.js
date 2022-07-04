import React from "react";
import NoteCategory from "./NoteCategory";
import NoteInput from "./input/NoteInput";

function NotesBody({ notes, keyword, onDelete, onArchived, addNote }) {
  const archivedType = "archived";

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteCategory notes={notes} keyword={keyword} onDelete={onDelete} onArchived={onArchived} />
      <h2>Arsip</h2>
      <NoteCategory notes={notes} type={archivedType} keyword={keyword} onDelete={onDelete} onArchived={onArchived}
      />
    </div>
  );
}

export default NotesBody;
