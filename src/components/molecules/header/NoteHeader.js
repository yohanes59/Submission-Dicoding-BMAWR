import React from "react";
import InputField from "../../atoms/InputField";

function NotesHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <InputField placeholder="Cari Catatan..." onChange={(e) => onSearch(e.target.value)} />
      </div>
    </div>
  );
}

export default NotesHeader;
