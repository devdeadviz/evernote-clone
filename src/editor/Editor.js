import React, { useState } from "react";
import ReactQuill from "react-quill";
import debounce from "../hooks/helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const Editor = ({ classes }) => {
  const [text, setText] = useState(null);
  const [title, setTitle] = useState(null);
  const [id, setId] = useState(null);

  const updateBody = () => {
    //update code
  };

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={text} onChange={updateBody}></ReactQuill>
    </div>
  );
};

export default withStyles(styles)(Editor);
