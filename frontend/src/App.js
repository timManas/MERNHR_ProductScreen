import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Header from './components/Header.js'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
