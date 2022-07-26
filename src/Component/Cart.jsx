import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { removeFromCart } from "../Redux/action"
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import {useNavigate} from "react-router-dom"


export default function Cart() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const { cart } = useSelector((state) => state.shop)
    console.log(cart)
    const notify = () => toast("Product Removed from Cart");
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    return (<>
        <ToastContainer />
        <Container className='mt-3 d-flex'>
            {cart.length === 0 && <h1 className='text-center'>Cart is empty</h1>}
            {cart && cart.map((prod) =>

                <Card style={{ width: '18rem' }} key={prod.id} className="m-3">
                    <Card.Img variant="top" src={prod.images[0]}   style={{objectFit: "contain"}} />
                    {/* <Carousel>
                        {prod.images.map((img)=> <Carousel.Item><Card.Img variant="top" src={img} style={{objectFit: "contain"}} /> </Carousel.Item>)}
                        
                    
                        </Carousel> */}
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>
                            {prod.description}
                        </Card.Text>
                        <Card.Title>Price : ${prod.price}</Card.Title>
                        <Button variant="primary" className='m-1' onClick={() => dispatch(removeFromCart(prod.id)) && notify()}><BsFillTrashFill/></Button>


                    </Card.Body>
                </Card>

            )}
        </Container>
        <div className='d-flex text-center justify-content-center gap-2'>
            <Button>Total Amount :  $ {cart.reduce((accu, curr) => {
                return accu + curr.price
            }, 0)}</Button>

            <Button variant='secondary'  onClick={()=>navigate("/checkout")}>Checkout</Button>
        </div>
    </>)
}
