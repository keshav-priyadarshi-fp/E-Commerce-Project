import React, { Fragment } from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    const Style = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'34px',
        height:'100vh'
    }

    return (
        <Fragment>
            <div style={Style}>
                <p className='heading'>404 Page Not Found</p>
                <Image width={300} src='/photos/notFound.png' fluid/><br/>
                <Link to='/'><button className='page_btn'>Go Home</button></Link>
            </div>
        </Fragment>
    )
}

export default PageNotFound
