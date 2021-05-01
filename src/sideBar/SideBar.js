import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SideBarItem from "../sideBarItem/SideBarItem";
import firebase from "../firebase/firebase";
import { timestamp } from "../firebase/firebase";

const SideBar = ({
  notes,
  classes,
  selectNote,
  deleteNote,
  title,
  setTitle,
  addingNote,
  setAddingNote,
  body,
}) => {
  const newNoteBtnClick = () => {
    setAddingNote(!addingNote);
    setTitle("");
  };
  const createNewNote = async () => {
    await firebase
      .firestore()
      .collection("notes")
      .add({
        title: title,
        body: body || "",
        timestamp: timestamp,
      });

    setTitle("");
    setAddingNote(false);
  };

  if (notes) {
    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={newNoteBtnClick} className={classes.newNoteBtn}>
          {addingNote ? "Cancel" : "New Note"}
        </Button>
        {addingNote ? (
          <div>
            <input
              type="text"
              placeholder="Enter note title"
              onKeyUp={(e) => setTitle(e.target.value)}
            />
            <Button
              className={classes.newNoteSubmitBtn}
              onClick={() => createNewNote(title, body)}
            >
              Submit Note
            </Button>
          </div>
        ) : null}
        <List>
          {notes.map((_note) => {
            return (
              <div key={_note.id}>
                <SideBarItem
                  _note={_note}
                  selectNote={() => selectNote(_note.id)}
                  deleteNote={() => deleteNote(_note.id)}
                />
                <Divider></Divider>
              </div>
            );
          })}
        </List>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default withStyles(styles)(SideBar);
