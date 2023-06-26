import { Routes, Route } from "react-router-dom"
import Main from "./Routes/Main"
import Results from "./Routes/Results"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/resultados' element={<Results/>}></Route>
    </Routes>
      )
}

export default App
