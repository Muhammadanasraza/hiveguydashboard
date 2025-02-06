import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import Layout from  './Components/Layout'
import Allproducts from  './Components/Allproducts'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import Addproducts from './Components/Addproducts'
import Attribute from './Components/Attribute'
import Vendor from './Components/Vendor'
import Vendorcreate from './Components/Vendorcreate'
import Orders from './Components/Orders'
import Login from './Components/Auth/Login'
import Setup from './Components/Auth/Setup'
import Coupons from './Components/Coupons'
import CreateCoupons from './Components/CreateCoupons'
import OrderDetails from './Components/OrderDetails'
import Help from './Components/Help'
import Users from './Components/Users'
import Addusers from './Components/addusers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="all-products" element={<Allproducts />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-products" element={<Addproducts />} />
          <Route path="attribute" element={<Attribute />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="vendor-create" element={<Vendorcreate />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order-details" element={<OrderDetails />} />
          <Route path="coupon-list" element={<Coupons />} />
          <Route path="create-coupons" element={<CreateCoupons />} />
          <Route path="help-center" element={<Help />} />
          <Route path="users" element={<Users />} />
          <Route path="add-users" element={<Addusers />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="setup" element={<Setup />} />
      </Routes>
    </Router>
  );
}

export default App
