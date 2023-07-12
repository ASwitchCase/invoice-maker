import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { InvoiceContext } from '../context/InvoiceContext'

const Start = () => {
    const[number,setNumber] = useState()
    const[date,setDate] = useState()

  const updateData = (invoice,updateInvoice) => {
    let newInvoice = invoice
    newInvoice.date = date
    newInvoice.number = number

    updateInvoice(newInvoice)
  }
  return (
    <div className='page-container'>
        <div className='header-container'>
        <div className='left-container'>
          <header className='large-header'>Create New Invoice</header>
        </div>
        <div className='right-container'>
          
        </div>
        </div>

      <div className='left-container'>
      <h1>New Invoice</h1>
          <div className='bill-item'>
            <h2>Date</h2>
            <input onChange={(e) => setDate(e.target.value)}></input>
          </div>

          <div className='bill-item'>
            <h2>Invoice Number</h2>
            <input onChange={(e) => setNumber(e.target.value)}></input>
          </div>
      </div>
      <div className='right-container'>
        <InvoiceContext.Consumer>{context =>{
          return <span onClick={() => updateData(context.invoice,context.updateInvoice)}><Link className='next' to='/BillTo'>Next</Link></span>
        }}
        
        </InvoiceContext.Consumer>
      </div>
    </div>
  )
}

export default Start
