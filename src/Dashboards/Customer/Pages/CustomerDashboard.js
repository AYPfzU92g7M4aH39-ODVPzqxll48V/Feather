import React from 'react'
import Box from '../../../Shared/Components/Box'

import './CustomerDashboard.css';


const CustomerDashboard = () => {
  return (
    <div className='div-feather-services'>
        <Box className='delivery-box-content'>
            <h2>Feather Shipping</h2>
            <p>Please choose the delivery options among the following</p>
            <div>
                <div>
                    <p>Source</p>
                    <input type="text" className='text-source'/>
                </div>

                <div>
                    <p>Destination</p>
                    <input type="text" className='text-destination'/> 
                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </Box>
    </div>
  )
}

export default CustomerDashboard