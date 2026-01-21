import "./index.css"
const Note = ({ note, toggleImportance }: { note: any, toggleImportance: () => void }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className='note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
export default Note