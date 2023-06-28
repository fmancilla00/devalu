import { Routes, Route } from "react-router-dom"
import Main from "./Routes/Main"
import Results from "./Routes/Results"
import Explicacion from "./Routes/Explicacion"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/resultados' element={<Results />}></Route>
      <Route path='/explicacion' element={<Explicacion/>}></Route>
    </Routes>
      )
}

export default App
