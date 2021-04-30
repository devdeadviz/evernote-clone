import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import debounce from "../hooks/helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Editor = ({
  classes,
  notes,
  setNotes,
  selectedNote,
  setSelectedNote,
  selectedNoteIndex,
  setSelectedNoteIndex,
  title,
  setTitle,
  noteUpdate,
  id,
  setId,
  text,
  setText,
}) => {
  const updateBody = () => {
    setTimeout(
      () =>
        noteUpdate(id, {
          title: selectedNote.title,
          body: selectedNote.body,
        }),
      1500
    );
  };

  useEffect(() => {
    setText(selectedNote.body);
    setTitle(selectedNote.title);
    setId(selectedNote.id);
  }, [selectedNote]);

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={text} onChange={updateBody}></ReactQuill>
    </div>
  );
};

export default withStyles(styles)(Editor);
