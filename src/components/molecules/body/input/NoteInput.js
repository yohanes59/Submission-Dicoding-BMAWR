import React from "react";
import InputField from '../../../atoms/InputField';
import TextAreaField from "../../../atoms/TextArea";
import ActionButton from "../../../atoms/ActionButton";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi State
    this.state = {
      title: "",
      body: "",
      charLimit: 50,
      charRemaining: 50,
    };

    // Binding
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onResetHandler = this.onResetHandler.bind(this);
  }

  limitChar(value, max) {
    if (value.length > max) {
      value = value.substring(0, max);
    }
    let remaining = max - value.length;

    return {
      value,
      remaining,
    };
  }

  onTitleChangeHandler(ev) {
    const titleLimit = this.limitChar(
      ev.target.value,
      this.state.charLimit
    );

    this.setState((prevState) => {
      return {
        ...prevState,
        title: titleLimit.value,
        charRemaining: titleLimit.remaining,
      };
    });
  }

  onBodyChangeHandler(ev) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: ev.target.value,
      };
    });
  }

  onSubmitHandler(ev) {
    ev.preventDefault();
    if (this.state.title.length === 0 || this.state.body.length === 0) {
      alert("Judul dan isi catatan harus diisi");
    } else {
      this.props.addNote(this.state);
      this.setState({
        title: "",
        body: "",
        charLimit: 50,
        charRemaining: 50,
      });
    }
  }

  onResetHandler(ev) {
    ev.preventDefault();
    this.setState({
      title: "",
      body: "",
      charLimit: 50,
      charRemaining: 50,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler} onReset={this.onResetHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.charRemaining}
          </p>
          <InputField className="note-input__title" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeHandler} />
          <TextAreaField className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeHandler} />
          <div className="note-input__action">
            <ActionButton desc="Simpan" type="submit" className="note-input__action-submit" />
            <ActionButton desc="Reset" type="reset" className="note-input__action-reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default NotesInput;
