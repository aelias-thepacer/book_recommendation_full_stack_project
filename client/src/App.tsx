import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BookPage from "./components/pages/BookPage"
import LoginPage from './components/pages/loginpage'
import MainPage from "./components/pages/MainPage"
import SingleBook from "./components/pages/SingleBook"
import { SignUpPage } from "./components/pages/SignUpPage"
import LibrariesPage from "./components/pages/LibrariesPage"
// Navigation pages
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/libraries" element={<LibrariesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>error</h1>} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App;
