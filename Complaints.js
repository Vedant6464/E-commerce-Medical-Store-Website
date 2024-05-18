import React, { useEffect, useState } from 'react'
import EmployeeNavbar from '../components/EmployeeNavbar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import ComplaintsCard from '../components/ComplaintsCard'

const Complaints = () => {
  const [Product, setProduct] = useState([])
  const complaintsref = collection(db, 'Complaints')
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(complaintsref)
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProducts()
  }, [])
  return (
    <div>
      <EmployeeNavbar />
      {Product.map((product) => {
        return <ComplaintsCard key={product.id} email={product.email} type={product.type} id={product.id} />
      })}
    </div>
  )
}

export default Complaints
