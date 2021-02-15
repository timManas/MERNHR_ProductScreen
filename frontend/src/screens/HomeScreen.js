import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {


  // // Solution #1 - Using axios
  // // Where is data coming from ? I think that might be due axios.get() response .... hence we need { data }
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get('/api/products') // typeof is Object
  //     console.log(JSON.stringify(data, null, 4))
  //     setProducts(data)
  //   }
  
  //   fetchProducts()
  // }, [])

  // Solution #2 - Using Redux
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  console.log('Redux products ----- ' + JSON.stringify(products, null, 4))

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
