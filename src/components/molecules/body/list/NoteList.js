import React from "react";
import NotesItem from "./item/NoteItem";

function NotesList({ notes, keyword, onDelete, onArchived }) {
  if (notes.length > 0) {
    notes = notes.filter((note) => {
      if (keyword === "") {
        return note;
      }
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });
  }

  const isNotes = (
    (notes.length === 0)
      ? <p className="notes-list__empty-message">Tidak ada catatan</p>
      : notes.map((note) => {
        return (
          <NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} note={note} />
        );
      })
  );

  return (
    <div className="notes-list">
      {isNotes}
    </div>
  );
}

export default NotesList;
