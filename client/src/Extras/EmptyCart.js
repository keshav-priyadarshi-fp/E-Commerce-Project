import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

const EmptyCart = () => {
    const Style = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'34px'
    }
    return (
        <div style={Style}>
            <Image fluid src='/photos/emptycart.png'/>
            <Link to='/all_products'>
                <button className='shopNow_btn'>Continue Shopping</button>
            </Link>
        </div>
    )
}

export default EmptyCart
