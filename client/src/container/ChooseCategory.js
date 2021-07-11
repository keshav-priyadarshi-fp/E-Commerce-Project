import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Image, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../action/categoryAction'
import Loader from '../Extras/Loader'


const ChooseCategory = () => {
    const dispatch = useDispatch()
    const { categoryLoading, categoryError, category } = useSelector(state => state.Category)

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    return (
        <Fragment>
            <Col className="justify-content-md-center text-center" data-aos="fade-up" style={{ padding: '20px', textTransform: 'uppercase' }} data-aos-delay="400" >
                <center><p className='heading'>Our Category</p></center>
                {categoryLoading ? <Loader /> :

                    <Row>
                        {
                            category && category.map(items => {
                                return (
                                    <Col md={3} className='overflow category_block1' key={items._id}>
                                        <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width: '18rem', overflow: 'hidden' }}>
                                            <Link to={`/products/${items._id}`}>
                                                <Card.Img variant="top" src={items.category_image} />
                                            </Link>
                                            <Card.Body>
                                                <Card.Text>{items.category_name}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })
                        }

                    </Row >
                }
            </Col>
        </Fragment>
    )
}

export default ChooseCategory
