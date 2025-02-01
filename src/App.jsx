import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import NewTask from "./pages/NewTask.jsx";
import AllTasks from "./pages/AllTasks.jsx";
import EditTask from "./pages/EditTask.jsx"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/edit-task" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
