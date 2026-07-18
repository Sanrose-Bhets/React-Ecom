import {Routes, Route} from 'react-router'
import { CheckoutPage } from './pages/CheckoutPage'
import { HomePage } from './Pages/HomePage'
import { TrackingPage } from './pages/TrackingPage'
import { OrdersPage } from './pages/OrdersPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      
    </Routes>
  )
}

export default App
