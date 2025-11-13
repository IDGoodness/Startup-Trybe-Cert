import { Route, Routes, BrowserRouter } from "react-router-dom";
import One from "./pages/home/One";
import Two from "./pages/home/Two";
import Course1 from './pages/certs/Course1';
import Course2 from './pages/certs/Course2';
import "./App.css";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/home2" element={<Two />} />
          <Route path="/course2" element={<Course2 />} />
          <Route path="/course1" element={<Course1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
