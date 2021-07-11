import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getMostViewedProducts } from '../action/productAction'
import Loader from '../Extras/Loader'


const MostViewed = () => {

    const dispatch = useDispatch()
    const { mostViewedLoading, mostViewedProducts } = useSelector(state => state.MostViewedProduct)

    useEffect(() => {
        dispatch(getMostViewedProducts())
    }, [dispatch])


    return (
        <Fragment>
            <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px', textTransform: 'uppercase' }} data-aos-delay="400" >
                <center><p className='heading'>Most Viewed Products</p></center>
                {mostViewedLoading ? <Loader /> :

                    <Row>
                        {
                            mostViewedProducts && mostViewedProducts.map((items, idx) => {
                                if (idx + 1 <= 8) {
                                    return (
                                        <Col md={3} className='overflow category_block1' key={items._id}>
                                            <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width: '18rem', overflow: 'hidden' }}>
                                                <Link to={`/product_details/${items._id}`}>
                                                    <Card.Img variant="top" src={items.image} />
                                                </Link>
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


export default MostViewed
