import DetalleTareaPage from "../pages/DetalleTareaPage"
import Home from "../pages/Home"
import { Route, Routes } from "react-router-dom"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/detalle/:taskId" element = {<DetalleTareaPage/>}/>
    </Routes>
  )
}

export default AppRoutes