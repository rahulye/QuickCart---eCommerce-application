import { Routes , Route } from 'react-router-dom'
import { HomePage } from './assets/pages/HomePage'
import { CheckoutPage } from './assets/pages/checkout/CheckoutPage'
import { OrderPage } from './assets/pages/OrderPage'
import { TrackingPage } from './assets/pages/TrackingPage'
import { NotFoundPage } from './assets/pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={ <HomePage/> }></Route> */}
        <Route index element={ <HomePage /> }/>
        <Route path='checkout' element={ <CheckoutPage/> }/>
        <Route path='orders' element={ <OrderPage/> }/>
        <Route path='track' element={ <TrackingPage/> }/>
        <Route path='*' element={ <NotFoundPage/> }/>
      </Routes>
    </>
  )
}

export default App
