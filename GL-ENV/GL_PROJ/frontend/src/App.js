import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import './App.css';
// import NotesListPages from './pages/NotesListPages'
// import NotePage from './pages/NotePage'
import {Home} from './pages/index'

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" exact element={<NotesListPages/>} /> */}
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/note/:id" element={<NotePage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;