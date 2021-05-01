import "./App.css";
import React, { useState, useEffect } from "react";
import firebase from "./firebase/firebase";
import SideBar from "./sideBar/SideBar";
import Editor from "./editor/Editor";
import { timestamp } from "./firebase/firebase";

const App = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const [addingNote, setAddingNote] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const selectNote = (noteId) => {
    const snote = notes.find((note) => note.id === noteId);
    setSelectedNote(snote);
  };

  const deleteNote = async (noteId) => {
    const mnote = notes.find((_n) => _n.id === noteId);
    if (window.confirm(`Are you sure you want to delete: ${mnote.title}`)) {
      firebase.firestore().collection("notes").doc(noteId).delete();
    }
  };

  const noteUpdate = (id, updateTitle, updateBody) => {
    if (id) {
      firebase.firestore().collection("notes").doc(id).update({
        title: updateTitle,
        body: updateBody,
        timestamp: timestamp,
      });
    }
  };

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        setNotes(notes);
      });
  }, []);

  return (
    <div className="app-container">
      <SideBar
        notes={notes}
        body={body}
        setBody={setBody}
        selectNote={selectNote}
        deleteNote={deleteNote}
        addingNote={addingNote}
        setAddingNote={setAddingNote}
        title={title}
        setTitle={setTitle}
      />
      {selectedNote && (
        <Editor selectedNote={selectedNote} noteUpdate={noteUpdate} />
      )}
    </div>
  );
};

export default App;
