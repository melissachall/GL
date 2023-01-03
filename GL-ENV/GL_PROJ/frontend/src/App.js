import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import './App.css';
import {Activate, Home, Login, ResetPassword, ResetPasswordConfirm, Signup, Google} from './pages/index'
import store from './store';
// import NotesListPages from './pages/NotesListPages'
// import NotePage from './pages/NotePage'

import { Provider } from 'react-redux';
import Layout from './hocs/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* <Route path="/" exact element={<NotesListPages/>} /> */}
            {/* <Route path="/note/:id" element={<NotePage/>} /> */}
            <Route path="/" exact element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Signup/>} />
            {/* <Route exact path='/facebook' element={<Facebook/>} /> */}
            <Route exact path='/google' element={<Google/>} />
            <Route exact path='/reset-password' element={<ResetPassword/>} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
            <Route exact path='/activate/:uid/:token' element={<Activate/>} />
          </Routes>
        </Layout>

      </Router>
    </Provider>
  );
}

export default App;