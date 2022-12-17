import {
  BrowserRouter as Router,
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
        <Header />
      <Routes>
        <Route path="/" exact element={<NotesListPages/>} />
        <Route path="/note/:id" element={<NotePage/>} />
      </Routes>
    </Router>
  );
}

export default App;