import { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-grid-system'

import Project from './components/Project'
import Projects from './components/Projects'
import Header from './components/header'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Header/>
        <Projects/>
      </Container>
    </>
  )
}

export default App
