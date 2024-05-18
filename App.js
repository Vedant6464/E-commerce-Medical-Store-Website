import FrontPage from './pages/FrontPage'
import SignUpPage from './pages/SignUpPage'
import './App.css'
import {
  Routes,
  Route
} from 'react-router-dom'
import Login from './pages/Login'
import { AuthContextProvider } from './context/AuthContext'
import LoggedInCustomerRoute from './pages/LoggedInCustomerRoute'
import 'bootstrap/dist/css/bootstrap.min.css'
import FirstAid from './pages/FirstAid'
import HairCare from './pages/HairCare'
import Medicines from './pages/Medicines'
import SkinCare from './pages/SkinCare'
import Surgery from './pages/Surgery'
import EmployeeLogin from './pages/EmployeeLogin'
import EmployeeRoute from './pages/EmployeeRoute'
import Delete from './components/Delete'
import Create from './components/Create'
import Update from './components/Update'
import UpdateForm from './components/UpdateForm'
import Complaints from './pages/Complaints'
import Cart from './pages/Cart'
import MyOrders from './pages/MyOrders'
import AddAddress from './pages/AddAddress'
import TypeofComplaint from './pages/TypeofComplaint'
// import ProtectedCustomerRoute from './pages/ProtectedCustomerRoute'

function App () {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/SignUp' element={<SignUpPage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/FirstAid' element={<FirstAid />} />
          <Route path='/HairCare' element={<HairCare />} />
          <Route path='/Medicines' element={<Medicines />} />
          <Route path='/SkinCare' element={<SkinCare />} />
          <Route path='/Surgery' element={<Surgery />} />
          <Route path='/EmployeeLogin' element={<EmployeeLogin />} />
          <Route path='/EmployeeRoute' element={<EmployeeRoute />} />
          <Route path='/Delete' element={<Delete />} />
          <Route path='/Create' element={<Create />} />
          <Route path='/Update' element={<Update />} />
          <Route path='/UpdateForm' element={<UpdateForm />} />
          <Route path='/Complaints' element={<Complaints />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/MyOrders' element={<MyOrders />} />
          <Route path='/AddAddress' element={<AddAddress />} />
          <Route path='TypeofComplaint' element={<TypeofComplaint />} />
          <Route
            path='/LogInCustomer'
            element={
              <LoggedInCustomerRoute />
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App
