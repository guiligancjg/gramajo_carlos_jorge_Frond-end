import DetalleTareaPage from "../pages/DetalleTareaPage"
import Home from "../pages/Home"
import { Route, Routes } from "react-router-dom"
import TareaNoEncontrada from "../pages/TareaNoEncontrada"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/detalle/:taskId" element = {<DetalleTareaPage/>}/>
        <Route path="/detalle/" element={<TareaNoEncontrada />} /> 
    </Routes>
  )
}

export default AppRoutes