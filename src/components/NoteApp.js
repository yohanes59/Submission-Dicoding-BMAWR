import React from "react";
import { getInitialData } from "../utils";
import NotesBody from "./molecules/body/NoteBody";
import NotesHeader from "./molecules/header/NoteHeader";
import { nanoid } from "nanoid";
import autoBind from "auto-bind";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    autoBind(this);
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
  }

  onDeleteHandler(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: newNotes });
  }

  onArchivedHandler(id) {
    const newNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({ notes: newNotes });
  }

  createNoteHandler({ title, body }) {
    const id = `note-${nanoid(16)}`;
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    });
  }

  render() {
    return (
      <>
        <NotesHeader onSearch={this.onSearchHandler} />
        <NotesBody notes={this.state.notes} keyword={this.state.keyword} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} addNote={this.createNoteHandler} />
      </>
    );
  }
}

export default NotesApp;
