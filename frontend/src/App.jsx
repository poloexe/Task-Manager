import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import NewTask from "./pages/NewTask.jsx";
import AllTasks from "./pages/AllTasks.jsx";
import EditTask from "./pages/EditTask.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<AllTasks />} />
          <Route path="/create" element={<NewTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
