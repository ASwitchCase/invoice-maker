import React, { useState } from 'react'
import Service from './Service'
import { InvoiceContext } from '../context/InvoiceContext'
import{ Link } from 'react-router-dom'

const AddServices = () => {
  
  const[des,setDes] = useState()
  const[rate,setRate] = useState()
  const[total,setTotal] = useState()

  const updateData = (e,invoice,updateInvoice) => {
    e.preventDefault()
    let newInvoice = invoice
    newInvoice.services.push({des:des,rate:rate,total:total})

    updateInvoice(newInvoice)
  }

  return (
    <div className='page-container'>
        <div className='header-container'>
            <div className='left-container'>
            <header className='large-header'>Services</header>
            </div>
            <div className='right-container'>
            <h1>What services Were Provided?</h1>
            </div>
        </div>

        <div className='bill-container'>
        <div className='service-container'>
          <div className='service-item'>
            <h1>Description:</h1>
          </div>

          <div className='service-item'>
            <h1>rate:</h1>
          </div>

          <div className='service-item'>
            <h1>Total:</h1>
          </div>

          <hr></hr>
          <InvoiceContext.Consumer>{context => {
            return context.invoice.services.map(item =>
              <Service data={item}></Service>
              );
          }}</InvoiceContext.Consumer>
          
          <div className='service-item'>
            <input onChange={(e) => setDes(e.target.value)}></input>
          </div>

          <div className='service-item'>
            <input onChange={(e) => setRate(e.target.value)}></input>
          </div>

          <div className='service-item'>
            <input onChange={(e) => setTotal(e.target.value)}></input>
          </div>

          <div className='service-item'>
          <InvoiceContext.Consumer>{context => {
            return <button onClick={(e) => updateData(e,context.invoice,context.updateInvoice)}>Add Service</button>
          }}</InvoiceContext.Consumer>
          
          </div>
          
        </div>
        
        </div>

        <InvoiceContext.Consumer>{context => {
            return <span style= {{display:'block',marginLeft:'auto',marginRight:'auto',width:'fit-content'}}>
                  <Link className='next' state={{invoice:context.invoice}} to='/Page'>Create Invoice</Link>
                </span>
        }}</InvoiceContext.Consumer>

        
    </div>
  )
}

export default AddServices
