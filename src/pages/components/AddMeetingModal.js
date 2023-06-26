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


export default function AddMeetingModal() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 // const handleRedirect = () => setRedirect(true);


  const [title, setTitle] = useState("")
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  const [link, setLink] = useState("")
  const [attend, setAttend] = useState("")
  const [validationError,setValidationError] = useState({})

  const AddModal = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('title', title)
    formData.append('date', date)
    formData.append('time', time)
    formData.append('link', link)
    formData.append('attend', attend)


    localStorage.setItem('title', title);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);
    localStorage.setItem('link', link);
    


    // axios
    // .post(`http://localhost:8000/meeting/`, formData)
    // .then(response=>response.json())
    //     .then((result)=>{
    //         alert(result);
    //     },
    //     (error)=>{
    //         alert("Failed");
    //     })



    fetch('http://127.0.0.1:8000/meeting/', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                meetingId:null,
                title:title,
                date:date,
                time:time,
                link:link,
                attend:false
                


            })
        })
        .then(response=>response.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert("Failed");
        })


    //const [startDate, setStartDate] = useState(new Date());
  }

    



  return (
    <div className='book_form'>

        <div className="container">
            <Button style={{backgroundColor: '#541db9'}} onClick={handleShow}>
                Create Meeting
            </Button>
                    
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
                
            </div>

            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="section_title text-center">
                    <h3>Upcoming Meetings</h3>                    </div>

                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Fill in the meeting Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Row>
                    <Col sm={6}>
                    
                        <Form onSubmit={AddModal}>
                                <div className = "form-group mb-4">
                                    <Col>
                                        <Form.Group controlId="Title">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" value={title} onChange={(event)=>{
                                            setTitle(event.target.value)
                                            }}/>
                                        </Form.Group>
                                    </Col> 
                                    
                                    <Col>
                                        <Form.Group controlId="Date">
                                            <Form.Label>Date</Form.Label>
                                            <DatePicker className="w-100 p-1 datepicker"
                                            selected={date} 
                                            onChange={date =>  
                                            setDate(date)} 
                                            dateFormat='dd/MM/yyyy'
                                            minDate={new Date()}
                                            /> 
                                            
                                            
                                        </Form.Group>
                                    </Col> 
                                </div>
                                
                                <div className = "form-group mb-4">
                               
                                    <Col>
                                        <Form.Group controlId="Time">
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control type="text" value={time} onChange={(event)=>{
                                            setTime(event.target.value)
                                            }}/>
                                        </Form.Group>
                                    </Col> 
                                    
                                    <Col>
                                        <Form.Group controlId="Link">
                                            <Form.Label>Meeting Link</Form.Label>
                                            <Form.Control type="text" value={link} onChange={(event)=>{
                                            setLink(event.target.value)
                                            }}/>
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group controlId="Attend">
                                            <Form.Label>Agree and Continue</Form.Label>
                                            <Form.Check type="checkbox" value={attend} onChange={(event)=>{
                                            setAttend(event.target.value)
                                            }}/>
                                        </Form.Group>
                                    </Col>


                                </div>
                                
                                <div className = "form-group mb-4">
                                
                                </div>

                                <div className = "form-group mb-4 btnn">
                                <Button className="book_button" type="submit">
                                    Submit
                                </Button>
                                </div>
                            </Form>
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

            <div className='bookdisplay' style={{backgroundColor: '#dceff0'}}>

                <table className="table table-bordered mb-0 text-center">
                    <thead>
                        <tr style={{padding: '20px'}} >
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Meeting Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>{localStorage.getItem('title') && (
                            <div>
                                <p>{localStorage.getItem('title')}</p>
                            </div>
                            )}</td>
                        <td>
                        {localStorage.getItem('date') && (
                            <div>
                            <p>{localStorage.getItem('date')}</p>
                            </div>
                            )}
                        </td>
                        <td>
                        {localStorage.getItem('time') && (
                            <div>
                                <p>{localStorage.getItem('time')}</p>
                            </div>
                            )}
                        </td>
                        <td>
                        {localStorage.getItem('link') && (
                            <div>
                                <p>{localStorage.getItem('link')}</p>
                            </div>
                            )}
                        </td>

                        <td>
                            <Link to={`/components/MeetingRoom`} className='btn' style={{ backgroundColor: '#541db9' , color: '#fff'}}>
                                Join Meeting
                            </Link>
                        </td>
                        
                    </tbody>
                </table>     
            </div>
        </div>
    
    </div>
  )
}

























// import React,{Component} from 'react';
// import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
// import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';



// export class AddMeetingModal extends Component{
//     constructor(props){
//         super(props);
//         this.handleSubmit=this.handleSubmit.bind(this);
        
//         this.state = {
//             viewAttended: false,
//         };

//     }


//     handleChange = e => this.setState({ viewAttended: e.target.checked });


//     handleSubmit(event){
//         event.preventDefault();


//         const { title, date, time, link } = this.state;
//         // localStorage.setItem('rememberMe', rememberMe);
//         // localStorage.setItem('user', rememberMe ? user : '');
    
//         localStorage.setItem('title', title);
//         localStorage.setItem('date', date);
//         localStorage.setItem('time', time);
//         localStorage.setItem('link', link);
        
//         console.log(`checked: ${this.state.viewAttended}`);
        // fetch('http://127.0.0.1:8000/meeting/', {
        //     method:'POST',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify({
        //         meetingId:null,
        //         title:event.target.Title.value,
        //         date:event.target.Date.value,
        //         time:event.target.Time.value,
        //         link:event.target.Link.value,
        //         attend:event.target.Attend.checked
                


        //     })
        // })
        // .then(response=>response.json())
        // .then((result)=>{
        //     alert(result);
        // },
        // (error)=>{
        //     alert("Failed");
        // })


        
//     }

//     componentDidMount() {
//         const title = localStorage.getItem('title');
//         const date = localStorage.getItem('date');
//         const time = localStorage.getItem('time');
//         const link = localStorage.getItem('link');
//         //const user = rememberMe ? localStorage.getItem('user') : '';
//         this.setState({ title, date, time, link });
//       }

//     render(){
//         return(
//             <div className="container">
                
//                 <Modal
//                     {...this.props}
//                     size="lg"
//                     aria-labelledby="contained-modal-title-vcenter"
//                     centered >

//                     <Modal.Header closeButton>
//                         <Modal.Title id="contained-modal-title-vcenter" style={{  textAlign: 'center' }}>
//                             Fill In Meeting Information
//                         </Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Row>
//                             <Col sm={6}>
//                                 <Form onSubmit={this.handleSubmit}>
//                                     <Form.Group controlId="Title">
//                                         <Form.Label>Title</Form.Label>
//                                         <Form.Control type="text" name="Title" required placeholder="" />
//                                 </Form.Group>
//                                 <Form.Group controlId="Date">
//                                         <Form.Label>Date</Form.Label>
//                                         <Form.Control type="text" name="Date" required placeholder="" />
//                                 </Form.Group>
//                                 <Form.Group controlId="Time">
//                                         <Form.Label>Time</Form.Label>
//                                         <Form.Control type="text" name="Time" required placeholder="" />
//                                 </Form.Group>
//                                 <Form.Group controlId="Link">
//                                         <Form.Label>Link</Form.Label>
//                                         <Form.Control type="text" name="Link" required placeholder="" />
//                                 </Form.Group>
//                                 <Form.Group controlId="Attend">
//                                         <Form.Label>Attendance</Form.Label>
//                                         <Form.Check type="checkbox" checked={this.state.viewAttended} onChange={this.handleChange} name="Attend" required placeholder="" />
//                                 </Form.Group>
//                                 <Form.Group>
//                                     <p></p>
//                                     <Button variant="primary" type="submit">
//                                         Submit
//                                     </Button>
//                                 </Form.Group>
//                                 </Form>
//                             </Col>
//                         </Row>
//                     </Modal.Body>
//                     <Modal.Footer>
//                     <Button variant="danger" type="submit" onClick={this.props.onHide}>
//                             Close
//                     </Button>

//                     </Modal.Footer>
//                 </Modal>



//                 <div className='bookdisplay' style={{backgroundColor: '#dceff0'}}>

//                 <table className="table table-bordered mb-0 text-center">
//                     <thead>
//                         <tr style={{padding: '20px'}} >
//                             <th>Title</th>
//                             <th>Date</th>
//                             <th>Time</th>
//                             <th>Link</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <td><p> {localStorage.getItem('title')} </p> 
//                         </td>
//                         <td>
//                         {localStorage.getItem('date') && (
//                             <div>
//                             <p>{localStorage.getItem('date')}</p>
//                             </div>
//                             )}
//                         </td>
//                         <td>
//                         {localStorage.getItem('time') && (
//                             <div>
//                                 <p>{localStorage.getItem('time')}</p>
//                             </div>
//                             )}
//                         </td>
//                         <td>
//                         {localStorage.getItem('link') && (
//                             <div>
//                                 <p>{localStorage.getItem('link')}</p>
//                             </div>
//                             )}
//                         </td>

//                     </tbody>
//                 </table>     
//             </div>
//             </div>
//         )
//     }
// }



