import React from "react";
import ReactQuill from "react-quill";
import debounce from "../hooks/helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Editor = ({ classes, selectedNote, noteUpdate }) => {
  const [updateBody, setUpdateBody] = React.useState(selectedNote?.body);
  const [updateTitle, setUpdateTitle] = React.useState(selectedNote?.title);

  React.useEffect(() => {
    setUpdateTitle(selectedNote?.title);
    setUpdateBody(selectedNote?.body);
  }, [selectedNote]);

  // console.log("updatedText", updateBody);
  // console.log("updatedTitle", updateTitle);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const update = React.useCallback(
    debounce(() => {
      noteUpdate(selectedNote.id, updateTitle, updateBody);
    }, 1500),
    [updateBody, updateTitle]
  );

  return (
    <div className={classes.editorContainer}>
      <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
      <input
        className={classes.titleInput}
        placeholder="Note title..."
        value={updateTitle ? updateTitle : ""}
        onChange={(e) => {
          setUpdateTitle(e.target.value);
          update();
        }}
      ></input>
      <ReactQuill
        value={updateBody}
        onChange={(value) => {
          setUpdateBody(value);
          update();
        }}
      ></ReactQuill>
    </div>
  );
};

export default withStyles(styles)(Editor);
