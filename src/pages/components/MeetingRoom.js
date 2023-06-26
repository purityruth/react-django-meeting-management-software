import React, { useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import { Col, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom'; 


import Navibar from './Navibar';
import Uploader from './Uploader';
import Minutes from './Minutes';
import Footer from './Footer';


export default function MeetingRoom() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//  const handleRedirect = () => setRedirect(true);


  const [title, setTitle] = useState("")
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  const [link, setLink] = useState("")
  const [attend, setAttend] = useState("")
  const [validationError,setValidationError] = useState({})

  const AddModal = async (e) => {
    e.preventDefault();

  }

    
  return (
    <div className='container'>

        <Navibar />


        <div className="row justify-content-center">

            <div className='col-12 col-sm-12 col-md-6'>
            
                <div className="card" style={{padding: '30px', border: '1px solid white'}}>

                    <Button style={{backgroundColor: '#541db9', textAlign: 'center' }} onClick={handleShow}>
                        Member Details
                    </Button>

                </div>
            </div>
            
                    
                <div className="form-wrapper">
                    {
                        Object.keys(validationError).length > 0 && (
                        <div className="row">
                            <div className="col-12">
                            <div className="alert alert-danger">
                                <ul className="mb-0">
                                {
                                    Object.entries(validationError).map(([key, value])=>(
                                    <li key={key}>{value}</li>   
                                    ))
                                }
                                </ul>
                            </div>
                            </div>
                        </div>
                        )
                    }
                </div>
                    
            <div className="list_booking_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="section_title text-center">
                            <h3 style={{paddingBottom: '30px'}}>Upload Document </h3>                    
                            </div>

                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Members To Attend Meeting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Row>
                        <Col>
                            <br />
                            <br />
                            <h5 style={{textAlign: 'center'}}> All members logged in to the meeting will appear here</h5>
                            <br />
                            <br />

                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Uploader />

                <h3 style={{textAlign: 'center', paddingTop: '50px' }}>Minutes Pad</h3>

                <Minutes />

                <br />
                <br />

                <Footer />
            </div>
        </div>
    </div>
  );
}
