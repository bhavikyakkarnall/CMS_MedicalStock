import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home.jsx'
import Inventory from '../components/Inventory';
import DispatchForm from '../components/DispatchForm';
import Navigation from '../components/Navigation';
import StockOrder from '../components/StockOrder';
import Returns from '../components/Returns';
import Orders from '../components/Orders';
import Login from '../components/Login';
import ProtectedRoute from './ProtectRoute.jsx';
import ProtectedLayout from '../components/layout/ProtectedLayout.jsx';
import Users from '../components/Users.jsx';

export default function AppRoute(props) {
    return (
        
        <Routes>
            <Route path='login/*' element={<Login/>}/>

            <Route index element={
                <ProtectedRoute>
                    <Home {...props}></Home>
                </ProtectedRoute>
            }/>

            <Route path='/inventory' element={
                <ProtectedRoute>
                    <Inventory {...props}/>
                </ProtectedRoute>
            }/>

            <Route path='/dispatchform' element={
                <ProtectedRoute>
                    <DispatchForm {...props}/>
                </ProtectedRoute>
            }/>

            <Route path='/orders' element={
                <ProtectedRoute>
                    <Orders {...props}/>
                </ProtectedRoute>
            }/>

            <Route path='/stockorder' element={
                <ProtectedRoute>
                    <StockOrder {...props}/>
                </ProtectedRoute>
            }/>

            <Route path='/returns' element={
                <ProtectedRoute>
                    <Returns {...props}/>
                </ProtectedRoute>
            }/>

            <Route path='/users' element={
                <ProtectedRoute>
                    <Users {...props}/>
                </ProtectedRoute>
            }/>

        </Routes>
       
    );
}

 {/* <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Inventory' element={<Inventory />} />
                <Route path='/DispatchForm' element={<DispatchForm />} />
                <Route path='/StockOrder' element={<StockOrder/>}/>
                <Route path='/Returns' element={<Returns/>}/>
                <Route path='/Orders' element={<Orders/>}/>
            </Routes>
        </Router> */}