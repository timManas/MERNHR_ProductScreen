import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { listProductDetails } from '../actions/productActions'


const ProductScreen = ({match}) => {

  // // Solution #1 - Using axios
  // const [product, setProduct] = useState([])
  // useEffect(() => {
  //   const fetchProducts = async (req, res) => {
  //     const { data } = await axios.get(`/api/products/${match.params.id}`) // typeof is Object
  //     console.log("Single Product: " + JSON.stringify(data, null, 4))
  //     setProduct(data)
  //   }
  
  //   fetchProducts()
  // }, [])

  // Solution #2 - Using Redux
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails
  console.log('Redux single product ----- ' + JSON.stringify(product, null, 4))

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch])

  return (
    <>
      <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                </ListGroup>
              </Card>
            </Col>
          </Row>
    </>
  )
}

export default ProductScreen
