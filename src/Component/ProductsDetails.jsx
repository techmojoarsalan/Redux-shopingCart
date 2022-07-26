import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom"
import {useDispatch} from "react-redux"
import {addtocart} from "../Redux/action"
import {useSelector} from "react-redux"
import Carousel from 'react-bootstrap/Carousel';
import { ToastContainer, toast } from 'react-toastify';
function ProductsDetails() {
  const {id}  = useParams();
  const dispatch = useDispatch();
  console.log(id)
  const [details, setDetails] = useState([])
  const notify = () => toast.success("Product added to Cart successfully");

  const { cart, isLoading, products } = useSelector((state) => state.shop);
  useEffect(() => {
    const data = products.filter((item) => item.id === parseInt(id));
    setDetails(data)
}, [id])
console.log(details)
  return (
    <>
       <ToastContainer />
    {details && details.map((item,idx) =><div key={idx} className='d-flex justify-content-center mt-5' >
                    <Card  style={{ width: '18rem' }}>
                        <Carousel>
                        {item.images.map((img)=> <Carousel.Item><Card.Img variant="top" src={img} /> </Carousel.Item>)}
                        {/* <Card.Img variant="top" src={item.images.map((i)=>i)} /> */}
                    
                        </Carousel>
                        {/* <Card.Img  variant="top" src={item.images[2]} /> */}
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Text > <strong>Price : ${item.price}</strong></Card.Text>
                            <Button variant='success' onClick={()=>dispatch(addtocart(item.id)) && notify()}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                </div>
            )}
    </>
  )
}

export default ProductsDetails