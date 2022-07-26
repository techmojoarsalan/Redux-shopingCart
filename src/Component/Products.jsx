import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Row, Col, Button, } from 'react-bootstrap'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/action"
import ProductCard from './ProductCard';
import { ToastContainer, toast } from 'react-toastify';

export default function Products() {
    const dispatch = useDispatch();

    const { cart, isLoading, products } = useSelector((state) => state.shop);
    const [filterData, setFilterData] = useState([])
    useEffect(() => async () => {
        const res = await axios.get("https://dummyjson.com/products");
        const { products } = res.data
        dispatch(fetchData(products))
        setFilterData([...products])
    }, [])
    const priceSort = () => {
        setFilterData([...products].sort((a, b) => {
            return a.price > b.price ? 1 : -1
        }))
    }
    const ratingSort = () => {
        setFilterData([...products].sort((a, b) => {
            return a.rating > b.rating ? 1 : -1
        }))
    }

    const discountSort = () => {
        setFilterData([...products].sort((a, b) => {
            return a.discountPercentage > b.discountPercentage ? 1 : -1;
        }))
    }
    const sortDecending = () => {
        setFilterData([...products].sort((a, b) => {
            return a.id > b.id ? -1 : 1
        }))
    }
    const Sortascending = () => {
        setFilterData([...products].sort((a, b) => {
            return a.id > b.id ? 1 : -1
        }))
    }
    const inputSearch = (e) => {
        const { value } = e.target;
        const searchFilter = products.filter((item) => item.title.toLowerCase().startsWith(value.toLowerCase()));
        setFilterData(searchFilter)
     }
    return (
        <>
      
            <Row>
                <Col sm={4} >
                    <Form>
                        <Form.Control
                            placeholder="Search Prodcuts"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className='w-50 m-3'
                            onChange={inputSearch} />
                    </Form>
                    <Button variant='primary' className='m-3' onClick={priceSort}>Price</Button>
                    <Button variant='primary' className='m-3' onClick={ratingSort}>Rating</Button>
                    <Button variant='primary' className='m-3' onClick={discountSort}>Discount</Button>
                    <Button variant='primary' className='m-3' onClick={sortDecending}>Decending </Button>
                    <Button variant='primary' className='m-3' onClick={Sortascending}>Ascending  </Button>


                </Col>
                <Col sm={8}>
                    <ProductCard filterData={filterData} loading ={isLoading} />
                </Col>
            </Row>

        </>
    )
}
