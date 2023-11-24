import Footer from "./components/Footer/Footer"
import NavBar from "./components/Navbar/NavBar"
import AppRoutes from "./components/routes/AppRoutes"
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  )
}

export default App