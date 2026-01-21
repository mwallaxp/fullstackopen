import { useState,useEffect } from "react";
import Notification from "./notication";
import Note from "./Notes";
import services from "./services";
import Footer from "./Footer";


const App = () => {
 
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [notes, setNotes] = useState([])
   const [errorMessage, setErrorMessage] = useState<string | null>(null)


useEffect(() => {
    services
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  const toggleImportanceOf = (id: number) => {
  const url = `http://localhost:3000/notes/${id}`
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important } as {content: string; important: boolean; id: number}

  services
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id === id ? response.data : note))
      })
      .catch(() => {
            setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
}

 

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value);
  };

  const addNote = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() > 0.5,
  }

   services
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
}
 

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <ul>
        
        <ul>
          <li key={notes.id}>
            {notesToShow.map((note) => (
               <Note 
               key={note.id} 
               note={note} 
               toggleImportance={() => toggleImportanceOf(note.id)}
               />
            ))}
          </li>
        </ul>
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
