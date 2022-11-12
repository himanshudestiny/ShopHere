import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Homepage from "../Homepage/Homepage";
import Women from "../Women/Women";
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
    return (
        
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/women' element={<PrivateRoute> <Women /></PrivateRoute>}></Route>
            </Routes>
         
    )
}

export default AllRoutes;