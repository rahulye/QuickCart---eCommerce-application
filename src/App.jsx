import { Routes , Route } from 'react-router-dom'
import { HomePage } from './assets/pages/HomePage'
import { CheckoutPage } from './assets/pages/CheckoutPage'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={ <HomePage/> }></Route> */}
        <Route index element={ <HomePage /> }></Route>
        <Route path='checkout' element={ <CheckoutPage/> }></Route>
      </Routes>
    </>
  )
}

export default App
