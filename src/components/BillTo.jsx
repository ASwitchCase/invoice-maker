import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { InvoiceContext } from '../context/InvoiceContext';

const BillTo = () => {
    const location = useLocation();
    const[company,setCompany] = useState();
    const[address,setAdress] = useState();
    const[phone,setPhone] = useState();
    const[email,setEmail] = useState();

    const updateData = (invoice,updateInvoice) => {
      let newInvoice = invoice
      newInvoice.billTo = {
        company:company,
        address:address,
        phone:phone,
        email:email
      }
  
      updateInvoice(newInvoice)
    }
    /*
    const updateData = (e) =>{
      e.preventDefault()
      let newData = data;

      Object.defineProperty(newData,'billTo',{
        company:company,
        address:address,
        phone:phone,
        email:email
      })
  
      setData(newData)
      console.log(data)
    }
    */
  return (
    <div className='page-container'>
        <div className='header-container'>
        <div className='left-container'>
          <header className='large-header'>Enter Billing Info</header>
        </div>
        <div className='right-container'>
          <h1>Who is receiving the bill?</h1>
        </div>
        </div>
      <div className='left-container'>
          <h1>Bill To:</h1>
          <div className='bill-item'>
            <h2>Company</h2>
            <input onChange={(e) => setCompany(e.target.value)}></input>
          </div>

          <div className='bill-item'>
            <h2>Address</h2>
            <input onChange={(e) => setAdress(e.target.value)}></input>
          </div>
          
          <div className='bill-item'>
            <h2>Phone Number</h2>
            <input onChange={(e) => setPhone(e.target.value)}></input>
          </div>

          <div className='bill-item'>
            <h2>Email</h2>
            <input onChange={(e) => setEmail(e.target.value)}></input>
          </div>
        </div>
        <div className='right-container'>
        <InvoiceContext.Consumer>{context =>{
          return <span onClick={() => updateData(context.invoice,context.updateInvoice)}><Link className='next' to='/PayTo'>Next</Link></span>
        }}
        </InvoiceContext.Consumer>
        </div>
    </div>
  )
}

export default BillTo
