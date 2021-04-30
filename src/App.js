import "./App.css";
import React, { useState, useEffect } from "react";
import firebase from "./firebase/firebase";
import SideBar from "./sideBar/SideBar";
import Editor from "./editor/Editor";

const App = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

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
        console.log(notes);
        setNotes(notes);
      });
    return console.log("");
  }, []);

  return (
    <div className="App">
      <SideBar notes={notes} selectedNoteIndex={selectedNoteIndex} />
      <Editor
        notes={notes}
        setNotes={setNotes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        selectedNoteIndex={selectedNoteIndex}
        setSelectedNoteIndex={setSelectedNoteIndex}
      />
    </div>
  );
};

export default App;
