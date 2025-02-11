
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BookPage from "./components/pages/BookPage"
import LoginPage from './components/pages/loginpage'
import MainPage from "./components/pages/MainPage"
import SingleBook from "./components/pages/SingleBook"
import PlacePage from "./components/pages/PlacesPage"
import { SignUpPage } from "./components/pages/SignupPage";
import { APIProvider } from '@vis.gl/react-google-maps'

const App = () => {
  return (
    <APIProvider apiKey={'AIzaSyAuw3y8Feor-ZLpY2zyY26jxhR_arjqXtA'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/libraries" element={<PlacePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>error</h1>} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </APIProvider>
  )
}
export default App;