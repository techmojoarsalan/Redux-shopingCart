import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import {removeFromCart} from "../Redux/action"

import { useSelector, useDispatch } from 'react-redux'

export default function Cart() {
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => state.shop)
    console.log(cart)
    return (<>
        <Container className='mt-3 d-flex'>
            {cart && cart.map((prod) =>

                <Card style={{ width: '18rem' }} className="m-3">
                    <Card.Img variant="top" src={prod.images[0]} />
                    <Card.Body>
                        <Card.Title>{prod.title}</Card.Title>
                        <Card.Text>
                            {prod.description}
                        </Card.Text>
                        <Button variant="primary">${prod.price} Buy</Button>
                        <Button variant="primary" className='m-1' onClick={()=>dispatch(removeFromCart(prod.id))}>Remove from Cart</Button>


                    </Card.Body>
                </Card>

            )}
        </Container>
    </>)
}
