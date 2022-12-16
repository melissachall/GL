import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import NotesListPages from './pages/NotesListPages'
import NotePage from './pages/NotePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={NotesListPages} />
        <Route path="/note/:id" component={NotePage} />
      </Routes>
    </Router>
  );
}

export default App;