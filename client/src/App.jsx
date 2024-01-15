import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Admin } from "./Admin"
import { CreateAdmin } from "./CreateAdmin"
import { UpdateAdmin } from "./UpdateAdmin"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin/>}></Route>
          <Route path="/create" element={<CreateAdmin/>}></Route>
          <Route path="/update/:id" element={<UpdateAdmin/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
