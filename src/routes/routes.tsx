import { Route, Routes } from "react-router";
import Register from "../pages/Register";

const RoutesMain = () => (
    <Routes>
      <Route path='/register' element={<Register />} />
    </Routes>
  )

export default RoutesMain
