import { Route, Routes, BrowserRouter } from "react-router-dom";
import One from "./pages/home/One";
import Course1 from './pages/certs/Course1';
import "./App.css";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/course1" element={<Course1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
