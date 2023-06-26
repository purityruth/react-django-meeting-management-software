import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import {Button, SplitButton, InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";


export default function EditMeeting() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [title, setTitle] = useState("")
  const [startDate, setStartDate] = useState("");
  const [time, setTime] = useState("")
  const [meetingLink, setMeetingLink] = useState("")
  const [validationError,setValidationError] = useState({})


  useEffect(()=>{
    fetchAppointment()
  },[])

  const fetchAppointment = async () => {
    await axios.get(`http://localhost:8000/api/appointments/${id}`).then(({data})=>{
      const { name, phoneno, email, date, service, expert } = data.product
     
      setTitle(title)
      setStartDate(startDate)
      setTime(time)
      setMeetingLink(meetingLink)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }


  const updateMeeting = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('title', title)
    formData.append('date', startDate)
    formData.append('time', time)
    formData.append('meetingLink', meetingLink)
    

    await axios.post(`http://localhost:8000/meeting`, formData).then(({data})=>{
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
                
                  <Form onSubmit={updateMeeting}>
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









