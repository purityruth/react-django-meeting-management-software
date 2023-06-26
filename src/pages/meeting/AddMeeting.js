import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';


export default function AddMeeting() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("");
  const [time, setTime] = useState("")
  const [meetingLink, setMeetingLink] = useState("")
  const [validationError,setValidationError] = useState({})

  const AddMeeting = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('title', title)
    formData.append('date', startDate)
    formData.append('time', time)
    formData.append('meetingLink', meetingLink)
    

    await axios.post(`http://localhost:8000/api/Meetings`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })

    //const [startDate, setStartDate] = useState(new Date());
  }

  return (
    <div>

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="card">
              <div className = "card-header">
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
              <div className="card-body">
                
                  <Form onSubmit={AddMeeting}>
                      <div className = "form-group mb-4">
                      <Row> 
                          <Col>
                            <Form.Group controlId="Title">
                                <Form.Label>Meeting Title</Form.Label>
                                <Form.Control type="text" value={title} onChange={(event)=>{
                                  setTitle(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col> 
                          
                        </Row>
                    </div>
                    
                    <div className = "form-group mb-4">
                      <Row>
                        <Col>
                          <Form.Group controlId="Date">
                              <Form.Label>Date and Time</Form.Label>
                              <DatePicker className="w-100 p-1"
                              selected={startDate} 
                              onChange={date =>  
                                setStartDate(date)} 
                              dateFormat='dd/MM/yyyy'
                              minDate={new Date()}
                              /> 
                              
                              
                          </Form.Group>
                        </Col> 

                      </Row>
                    </div>
                    
                    <div className = "form-group mb-4">
                      <Row> 
                      <Col>
                      <Form.Group controlId="Time">
                          <Form.Label>Time</Form.Label>
                          <Form.Control type="text" value={time} onChange={(event)=>{
                            setTime(event.target.value)
                          }}/>
                      </Form.Group>
                    </Col>  

                    <Col>
                      <Form.Group controlId="Email">
                          <Form.Label>Meeting Link</Form.Label>
                          <Form.Control type="text" value={meetingLink} onChange={(event)=>{
                            setMeetingLink(event.target.value)
                          }}/>
                      </Form.Group>
                    </Col> 

                      </Row>
                    </div>

                    <div className = "form-group mb-4 ">
                      <Button variant="primary" className="mt-3" size="lg" block="block" type="submit">
                        Save
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}









