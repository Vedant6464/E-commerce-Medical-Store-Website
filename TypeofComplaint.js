import React, { useState } from 'react'
import LoggedInPageHeader from '../components/LoggedInPageHeader'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'

const TypeofComplaint = () => {
  const { user } = UserAuth()
  const [checkValue, setcheckValue] = useState('')
  const complaintsRef = collection(db, 'Complaints')
  const goToChatSystem = async () => {
    const url = `http://localhost:5000/chat.html?email=${user.email}.com&username=${user.email}&room=${checkValue}`
    await addDoc(complaintsRef, { email: user.email, type: checkValue })
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div>
      <LoggedInPageHeader />
      <Form className='complaintsForm'>
        <Col sm={10}>
          <Form.Check
            type='radio'
            label='Items missing'
            name='formHorizontalRadios'
            id='formHorizontalRadios1'
            value='Items Missing'
            onClick={(e) => { setcheckValue(e.target.value) }}
          />
          <Form.Check
            type='radio'
            label='Recieved Wrong Order'
            name='formHorizontalRadios'
            id='formHorizontalRadios1'
            value='Recieved Wrong Order'
            onClick={(e) => { setcheckValue(e.target.value) }}
          />
          <Form.Check
            type='radio'
            label='Expired Products Recieved'
            name='formHorizontalRadios'
            id='formHorizontalRadios1'
            value='Expired Products Recieved'
            onClick={(e) => { setcheckValue(e.target.value) }}
          />
          <Form.Check
            type='radio'
            label='Recieved Damages Products'
            name='formHorizontalRadios'
            id='formHorizontalRadios2'
            value='Recieved Damages Products'
            onClick={(e) => { setcheckValue(e.target.value) }}
          />
          <Form.Check
            type='radio'
            label='Extremely late delivery'
            name='formHorizontalRadios'
            id='formHorizontalRadios3'
            value='Extremely late delivery'
            onClick={(e) => { setcheckValue(e.target.value) }}
          />
          <Button onClick={goToChatSystem}>Proceed</Button>
        </Col>
      </Form>
    </div>
  )
}

export default TypeofComplaint
