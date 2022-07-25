import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {addtocart} from "../Redux/action"
import Spinner from 'react-bootstrap/Spinner';


function ProductCard({ filterData , loading }) {
    console.log(filterData)
    const dispatch = useDispatch();
    return (
        <>
           {loading ? <Row xs={1} md={2} className="g-4">
                {filterData && filterData.map((prod) => (
                    <Col key={prod.id}>
                        <Card>
                            <Card.Img variant="top" src={prod.images[0]} width={200} height={300} />
                            <Card.Body>
                                <Card.Title>{prod.title} </Card.Title>
                                <Card.Text>
                                    {prod.description}
                                </Card.Text>
                                <Button variant='success' onClick={()=>dispatch(addtocart(prod.id))}>Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> : <span><h1> Products is loading.....</h1><Spinner animation="border" /> </span> }
        </>
    )
}

export default ProductCard