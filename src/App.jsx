// import './App.css'
import Header from './HeaderComp/Header';
import Footer from './FooterComp/Footer';
import Note from './NoteComp/Note';
import notes from './notes';

function createNote(eachNote){
  return (
    <Note key={eachNote.key} noteTitle={eachNote.title} noteContent={eachNote.content}/>
  );
}



function App() {
  return (
    <div>
      <Header/>
      <div>{notes.map(createNote)}</div>
      <Footer/>
    </div>
  );
}

export default App
