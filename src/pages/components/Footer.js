import React from 'react'

import { Link } from 'react-router-dom'

import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (
    <div className='container' style={{ backgroundColor: '#212121', color: '#757575', paddingTop: '30px', display: 'flex', marginBottom: '0' }}>
        <Container>
        <Row style={{ paddingBottom: '15px', marginBottom: '0px'}}>
            <Col md={{ span: 8, offset: 4 }}> © 2022 All rights reserved. </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Footer