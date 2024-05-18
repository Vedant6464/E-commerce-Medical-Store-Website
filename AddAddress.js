import React, { useState } from 'react'
import LoggedInPageHeader from '../components/LoggedInPageHeader'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { db } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import { collection, addDoc } from 'firebase/firestore'

const AddAddress = () => {
  const { user } = UserAuth()
  const [name, setName] = useState('')
  const [pno, setPno] = useState('')
  const [address, setAddress] = useState('')
  const [landmark, setLandmark] = useState('')
  const [City, setCity] = useState('')
  const [State, setState] = useState('')
  const [Zip, setZip] = useState('')
  const addressRef = collection(db, 'Address ' + user.id)
  const uploadAddress = async () => {
    await addDoc(addressRef, { Name: name, Pno: pno, address: address, landmark: landmark, city: City, state: State, zip: Zip })
    console.log('added')
  }
  return (
    <div>
      <LoggedInPageHeader />
      <Form className='createForm'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter name' onChange={(e) => { setName(e.target.value) }} />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='tel' placeholder='Phone No.' onChange={(e) => { setPno(e.target.value) }} />
          </Form.Group>
        </Row>
        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='Eg. 1234 Main St' onChange={(e) => { setAddress(e.target.value) }} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formGridAddress2'>
          <Form.Label>Landmark</Form.Label>
          <Form.Control placeholder='Enter Landmark' onChange={(e) => { setLandmark(e.target.value) }} />
        </Form.Group>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control placeholder='Enter City' onChange={(e) => { setCity(e.target.value) }} />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>State</Form.Label>
            <Form.Control placeholder='Enter State' onChange={(e) => { setState(e.target.value) }} />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder='Enter ZIP Code' onChange={(e) => { setZip(e.target.value) }} />
          </Form.Group>
        </Row>
        <Button variant='primary' onClick={uploadAddress}>
          Add Address
        </Button>
      </Form>
    </div>
  )
}

export default AddAddress
