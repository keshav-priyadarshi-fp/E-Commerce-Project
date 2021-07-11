import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getNewArrivalProducts } from '../action/productAction'
import Loader from '../Extras/Loader'
import Message from '../Extras/Message'


const OurProduct = () => {

    const dispatch = useDispatch()
    const { newArrivalLoading, newArrivalProducts, newArrivalError } = useSelector(state => state.NewArrivalProduct)

    useEffect(() => {
        dispatch(getNewArrivalProducts())
    }, [dispatch])


    return (
        <Fragment>
            <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px', textTransform: 'uppercase' }} data-aos-delay="400" >
                <center><p className='heading'>New Collection</p></center>
                {newArrivalLoading ? <Loader /> :
                        <Row>
                            {
                                newArrivalProducts && newArrivalProducts.map((items, idx) => {
                                    if (idx + 1 <= 4) {

                                        return (
                                            <Col md={3} className='overflow category_block1' key={items._id}>
                                                <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width: '18rem', overflow: 'hidden' }}>
                                                    <Link to={`/product_details/${items._id}`}>
                                                        <Card.Img variant="top" src={items.image} />
                                                        {idx + 1 === 4 &&
                                                            <Link to='/newcollection'>
                                                                <i style={{ fontSize: '3em', color: 'beige', position: 'absolute', top: '30%', right: '0', background: 'magenta', padding: '5px' }} className="fas fa-chevron-right"></i>
                                                            </Link>
                                                        }
                                                    </Link>
                                                    <p style={{ position: 'absolute', top: '0', right: '0', background: 'magenta', padding: '5px' }}>New Arrival</p>
                                                    <Card.Body>
                                                        <Card.Text>{items.name}</Card.Text>
                                                        <Card.Text>Pack of {items.product_details && items.product_details.items_in_pack}</Card.Text>
                                                        <Card.Text>₹ {items.price}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                })
                            }

                        </Row >
                }
            </Col>
        </Fragment>
    )
}


export default OurProduct
