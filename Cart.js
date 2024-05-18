import React, { useState, useEffect } from 'react'
import LoggedInPageHeader from '../components/LoggedInPageHeader'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import CartCard from '../components/CartCard'
import Form from 'react-bootstrap/Form'

const Cart = () => {
  const navigate = useNavigate()
  const { user } = UserAuth()
  const [product, setProduct] = useState([])
  const [address, setAddress] = useState([])
  const productCollectionRef = collection(db, 'Cart ' + user.id)
  const addressRef = collection(db, 'Address ' + user.id)
  const orderRef = collection(db, 'Orders ' + user.id)
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef)
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProducts()
  }, [])
  useEffect(() => {
    const getAddress = async () => {
      const AData = await getDocs(addressRef)
      console.log(AData)
      setAddress(AData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getAddress()
  }, [])
  const placeOrder = async () => {
    var data = ''
    const addr = document.getElementById('address')
    const val = addr.value
    var tp = 0
    product.map(async (product) => {
      data += product.title + 'x' + product.quantity + ' '
      tp += product.quantity * product.price
      const userDoc = doc(db, 'Cart ' + user.id, product.id)
      await deleteDoc(userDoc)
      return 0
    })
    await addDoc(orderRef, { data: data, address: val, price: tp })
    console.log('placed')
  }
  var totalPrice = 0
  return (
    <div>
      <LoggedInPageHeader />
      <div className='categoriesPage'>
        {product.map((product) => {
          totalPrice += parseInt(product.price) * product.quantity
          return <CartCard key={product.id} id={product.id} img={product.image} text={product.text} price={product.price} title={product.title} quantity={product.quantity} />
        })}
      </div>
      <Form.Select aria-label='Select Address' style={{ marginBottom: '80px', width: '60%', marginLeft: '20px' }} id='address'>
        {address.map((address) => {
          return <option value={address.Name + ', Phone No.:' + address.Pno + ', ' + address.address + ' near ' + address.landmark + ', ' + address.city + ', ' + address.state + ', ZIP Code: ' + address.zip} key={address.id}>{address.Name + ', Phone No.:' + address.Pno + ', ' + address.address + ' near ' + address.landmark + ', ' + address.city + ', ' + address.state + ', ZIP Code: ' + address.zip}</option>
        })}
      </Form.Select>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='bottom'>
        <Container>
          <Navbar.Brand><Button variant='primary' onClick={() => { navigate('/AddAddress') }}>Add Address</Button></Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link><Button variant='primary' onClick={() => { navigate('/MyOrders') }}>My Orders</Button></Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Brand>Price:${totalPrice}</Navbar.Brand>
          <Navbar.Brand><Button variant='danger' onClick={placeOrder}>Place Order</Button></Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Cart
