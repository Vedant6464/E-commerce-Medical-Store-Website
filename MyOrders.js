import React, { useState, useEffect } from 'react'
import '../css/orders.css'
import LoggedInPageHeader from '../components/LoggedInPageHeader'
import OrdersCard from '../components/OrdersCard'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'

const MyOrders = () => {
  const { user } = UserAuth()
  const [product, setProduct] = useState([])
  const productCollectionRef = collection(db, 'Orders ' + user.id)
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef)
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProducts()
  }, [])
  return (
    <div>
      <LoggedInPageHeader />
      <h1 style={{ marginBottom: '30px ' }}>My Orders:</h1>
      {
        product.map((product) => {
          return <OrdersCard key={product.id} details={product.data} address={product.address} price={product.price} />
        })
        }
    </div>
  )
}

export default MyOrders
