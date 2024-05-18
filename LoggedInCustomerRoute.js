import React, { useState, useEffect } from 'react'
import '../css/sectionComponent.css'
// import { useNavigate } from 'react-router-dom'
// import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import LoggedInPageHeader from '../components/LoggedInPageHeader'
import skinCare from '../assets/skinCare.jpg'
import hairCare from '../assets/hairCare.jpg'
import medicines from '../assets/medicines.jpg'
import CategoryCard from '../components/CategoryCard'
import FirstAid from '../assets/firstAid.jpg'
import Surgery from '../assets/Surgery.jpg'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { collection, getDocs } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
// import { ref, getDownloadURL, listAll, list } from 'firebase/storage'

const LoggedInCustomerRoute = () => {
  const { user } = UserAuth()
  const [product, setProduct] = useState([])
  const productCollectionRef = collection(db, 'Products')
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef)
      setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProducts()
  }, [])

  return (
    <>
      <LoggedInPageHeader />
      <div>
        <h1 className='categoriesHead'>Categories: </h1>
        <div className='categoriesPage'>
          <Link to='/SkinCare' style={{ textDecoration: 'none', color: 'black' }}><CategoryCard title='Skin Care' img={skinCare} text='Your makeup game will never be a 10 if your skincare game is only a two.' path='SkinCare' /></Link>
          <Link to='/HairCare' style={{ textDecoration: 'none', color: 'black' }}><CategoryCard title='Hair Care' img={hairCare} text='Hair does not make the woman, but good hair definitely helps' path='HairCare' /></Link>
          <Link to='/Medicines' style={{ textDecoration: 'none', color: 'black' }}><CategoryCard title='Pharmaceutical' img={medicines} text='It is easy to get a thousand prescriptions, but hard to get one single remedy' path='Medicines' /></Link>
          <Link to='/FirstAid' style={{ textDecoration: 'none', color: 'black' }}><CategoryCard title='First Aid' img={FirstAid} text='Superheroes not always wear capes. Sometimes they give first aid' path='FirstAid' /></Link>
          <Link to='/Surgery' style={{ textDecoration: 'none', color: 'black' }}><CategoryCard title='Surgical Instruments' img={Surgery} text='Two things surgeons fear the most are God and peritonitis.' path='Surgery' /></Link>
        </div>
        <h1 className='ProductsHead'>Products:</h1>
        <div className='categoriesPage'>
          {product.map((product) => {
            if (user && user.email) {
              return <ProductCard key={product.id} img={product.Image} title={product.Title} text={product.Description} price={product.Price} id={product.id} email={user.email} />
            } else {
              return <ProductCard key={product.id} img={product.Image} title={product.Title} text={product.Description} price={product.Price} id={product.id} />
            }
          })}
        </div>
      </div>
    </>
  )
}

export default LoggedInCustomerRoute
