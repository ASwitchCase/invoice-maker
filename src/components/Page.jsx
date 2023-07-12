import React, { useRef } from 'react'
import Service from './Service'
import { useLocation } from 'react-router-dom'
import ReactToPrint, { useReactToPrint } from 'react-to-print';

const Page = (props) => {
  const location = useLocation();
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    
  })

  const getTotal = ()=>{
    let t = 0;
    for(let i = 0; i < location.state.invoice.services.length; i++){
      t = t + parseInt(location.state.invoice.services[i].total);
    }
    return t
  }

  const toDec = (v) => {
    v = parseFloat(v).toFixed(2);
    return v 
  }
  return (
    <div ref={componentRef} className='page-container'>
      
      <div className='header-container'>
        <div className='left-container'>
          <header className='large-header'>Invoice</header>
        </div>
        <div className='right-container'>
          <h2>{location.state.invoice.date}</h2>
          <h2>Invoice No. {location.state.invoice.number}</h2>
        </div>
      </div>

      <hr></hr>

      <div className='info-container'>
  
        <div className='left-container'>
          <h1>Bill To:</h1>
          <div className='bill-item'>
            <h2>Company</h2>
            <h3>{location.state.invoice.billTo.company}</h3>
          </div>

          <div className='bill-item'>
            <h2>Address</h2>
            <h3>{location.state.invoice.billTo.address}</h3>
          </div>
          
          <div className='bill-item'>
            <h2>Phone Number</h2>
            <h3>{location.state.invoice.billTo.phone}</h3>
          </div>

          <div className='bill-item'>
            <h2>Email</h2>
            <h3>{location.state.invoice.billTo.email}</h3>
          </div>
        </div>

        <div className='right-container'>
          <h1>Pay To:</h1>
            <div className='bill-item'>
              <h2>Company</h2>
              <h3>{location.state.invoice.payTo.company}</h3>
            </div>

            <div className='bill-item'>
              <h2>Address</h2>
              <h3>{location.state.invoice.payTo.address}</h3>
            </div>
            
            <div className='bill-item'>
              <h2>Phone Number</h2>
              <h3>{location.state.invoice.payTo.phone}</h3>
            </div>

            <div className='bill-item'>
              <h2>Email</h2>
              <h3>{location.state.invoice.payTo.email}</h3>
            </div>
        </div>
      </div>

      <hr></hr>

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
          {location.state.invoice.services.map(item =>
            <Service data={item}></Service>

            )}
        </div>

        <hr></hr>
        <h1 style={{textAlign:'right'}}>Total: ${toDec(getTotal())}</h1>
        <button style = {{float:'right'}} onClick={handlePrint}>Print Invoice</button>
      </div>
    </div>
  )
}

export default Page
