import { Navigate, Route, Routes } from "react-router";
import ProtectedRoutes from "../ProtectedRoutes/idex";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";

const RoutesMain = () => (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<ProtectedRoutes />}>
        <Route index element={<Dashboard />} /> 
      </Route>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  )

export default RoutesMain
