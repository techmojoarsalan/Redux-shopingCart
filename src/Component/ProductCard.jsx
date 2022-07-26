import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {addtocart} from "../Redux/action"
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import {FaStar} from "react-icons/fa"

import {Link} from "react-router-dom"


function ProductCard({ filterData , loading }) {
    console.log(filterData)

    return (
        <>
           {loading ? <Row xs={1} md={2} className="g-4">
                {filterData && filterData.map((prod) => (
                    <Col key={prod.id}>
                        <Card>
                        <Link to={`/product/${prod.id}`}>
                            <Card.Img variant="top" src={prod.images[0]}  height={300}  />
                            </Link>
                            {/* <Carousel  style={{objectFit:"cover"}}>
                        {prod.images.map((img)=> <Carousel.Item><Card.Img variant="top" src={img} /> </Carousel.Item>)}
                        
                        
                        </Carousel> */}
                            <Card.Body>
                                <Card.Title>{prod.title} </Card.Title>
                                <Card.Title style={{color:"gold"}}>Rating <FaStar/> {prod.rating} </Card.Title>
                                <Card.Text style={{color : "black"}}>
                                    {prod.description}
                                </Card.Text>
                                {/* <Button variant='success' onClick={()=>dispatch(addtocart(prod.id)) && notify()}>Add To Cart</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> : <span><h1> Products is loading.....</h1><Spinner animation="border" /> </span> }
        </>
    )
}

export default ProductCard