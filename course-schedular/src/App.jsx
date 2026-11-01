import "./App.css"
import {Routes, Route} from "react-router-dom";
import CourseList from "./components/CourseList.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx"

import ProgressSummary from './components/ProgressSummary.jsx'

import AboutPage from "./pages/AboutPage.jsx"

function App() {
  return (
    <>
        <NavBar />
      <h1>Course Schedular</h1>

        <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/home" element={<HomePage />} />
            <Route  path="/about" element={<AboutPage />} />
        </Routes>

    </>
  )
}

export default App
