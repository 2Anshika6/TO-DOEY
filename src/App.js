import './App.css';
import { TodoWrapper } from "./components/TodoWrapper";
import LoginSignup from './components/loginsignup/loginsignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/TO-DOEY" element={<LoginSignup />} />
        <Route path='/todolist' element={<TodoWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
