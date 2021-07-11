import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'
import SubHeader from "../container/SubHeader"
import "../assets/css/allproducts.css"
import { getProductsAccorToCat } from '../action/productAction'
import { getCategory, getCategoryDetails } from '../action/categoryAction'
import Ratings from '../component/Ratings'
import Loader from '../Extras/Loader'
import Message from '../Extras/Message'



const CategoryProducts = ({ match }) => {

    const dispatch = useDispatch()
    const { loading, error, productATC } = useSelector(state => state.ProductAccorToCat)
    const { category } = useSelector(state => state.Category)
    const { categoryDetails } = useSelector(state => state.CategoryDetails)

    useEffect(() => {
        const category_id = match.params.categoryId
        dispatch(getProductsAccorToCat(category_id))
        dispatch(getCategoryDetails(category_id))
        dispatch(getCategory())

    }, [dispatch, match])

    return (
        <Fragment>
            <SubHeader />
            <div className="allproductsbanner" data-aos="zoom-in">
                <center><h1>{categoryDetails && categoryDetails.category_name}</h1></center>
            </div>

            {loading ? <Loader /> :
                error ? <Message variant='danger'>{error}</Message> :
                    <Row>
                        <Col md={3}>
                            <center><p>Shop</p></center>

                            <ul style={{ listStyle: 'none', float: 'left' }}>
                                <Link style={{ color: 'black' }} to='/all_products'>
                                    <li>All</li>
                                </Link>
                                {
                                    category && category.map(category => {
                                        return (
                                            <Link key={category._id} style={{ color: 'black' }} to={`/products/${category._id}`}>
                                                <li>{category.category_name}</li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </Col>

                        <Col md={9}>
                            <Row>
                                {
                                    productATC && productATC.map((items) => {

                                        return (
                                            <Col md={4} className='overflow category_block1' key={items._id}>
                                                <Card variant='flush' className="border-0 text-center" style={{ lineHeight: '1em', width: '18rem', overflow: 'hidden' }}>
                                                    <Link to={`/product_details/${items._id}`}>
                                                        <Card.Img variant="top" src={items.image} />
                                                    </Link>
                                                    <Card.Body>
                                                        <Card.Text>{items.name}</Card.Text>
                                                        <Card.Text>Pack of {items.product_details && items.product_details.items_in_pack}</Card.Text>
                                                        <Card.Text>₹ {items.price}</Card.Text>
                                                        <Ratings rating={items.rating} numReview={items.reviews.length} />
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )

                                    })
                                }
                            </Row>
                        </Col>

                    </Row >
            }

        </Fragment>
    )
}

export default CategoryProducts
