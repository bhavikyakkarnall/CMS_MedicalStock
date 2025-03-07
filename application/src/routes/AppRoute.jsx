import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Inventory from '../components/Inventory';
import DispatchForm from '../components/DispatchForm';
import Navigation from '../components/Navigation';
import StockOrder from '../components/StockOrder';
import Returns from '../components/Returns';
import Orders from '../components/Orders';
import Login from '../components/Login';
import ProtectedRoute from './ProtectRoute';

export default function AppRoute(props) {
    return (
        <Routes>
            <Route path='login/*' element={<Login></Login>} />

            <Route index element={
                <ProtectedRoute>
                    <Home {...props}></Home>
                </ProtectedRoute>
            } />

            <Route path='/Inventory' element={
                <ProtectedRoute>
                    <Inventory {...props} />
                </ProtectedRoute>
            } />

            <Route path='/DispatchForm' element={
                <ProtectedRoute>
                    <DispatchForm {...props} />
                </ProtectedRoute>
            } />

            <Route path='/StockOrder' element={
                <ProtectedRoute>
                    <StockOrder {...props} />
                </ProtectedRoute>
            } />

            <Route path='/Returns' element={
                <ProtectedRoute>
                    <Returns {...props} />
                </ProtectedRoute>
            } />

            <Route path="/Orders" element={
                <ProtectedRoute>
                    <Orders />
                </ProtectedRoute>
            } />


        </Routes>
    );
}
