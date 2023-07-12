import React from 'react'

const Service = (props) => {
  return (
    <div className='service-container'>
          <div className='service-item'>
            <h4>{props.data.des}</h4>
          </div>

          <div className='service-item'>
            <h2>${props.data.rate}</h2>
          </div>

          <div className='service-item'>
            <h2>${props.data.total}</h2>
          </div>
    </div>
  )
}

export default Service
