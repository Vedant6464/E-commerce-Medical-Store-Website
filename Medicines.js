import LoggedInPageHeader from '../components/LoggedInPageHeader'
import '../css/skinCare.css'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import ProductCard from '../components/ProductCard'

const Medicines = () => {
  const { user } = UserAuth()
  const [product, setProduct] = useState([]);
  const productCollectionRef = collection(db, 'Products')
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
      <div>
        <h1 className='skincareHead'>Medicines:</h1>
      </div>
      <div className='categoriesPage'>
        {product.map((product) => {
          if (user && user.email && product.category === 'pharmaceutical') {
            return <ProductCard key={product.id} img={product.Image} title={product.Title} text={product.Description} price={product.Price} id={product.id} email={user.email} />
          } else if (product.category === 'pharmaceutical') {
            return <ProductCard key={product.id} img={product.Image} title={product.Title} text={product.Description} price={product.Price} id={product.id} />
          } else {
            return
          }
        })}
      </div>
    </div>
  )
}

export default Medicines
