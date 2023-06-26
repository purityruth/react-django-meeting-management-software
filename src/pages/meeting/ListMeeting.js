import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Col, Row } from 'react-bootstrap';

export default function ListMeeting() {

    const [Meeting, setMeeting] = useState([])

    useEffect(()=>{
        fetchMeeting() 
    },[])

    const fetchMeeting = async () => {
        await axios.get(`http://localhost:8000/meeting/`).then(({data})=>{
            setMeeting(data)
        })
    }

    const deleteMeeting = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/meeting/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchMeeting()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (

        <div>

            <div className="content-wrapper" style={{paddingBottom: '30px'}}>


                <div className='row'>
                    <div className='col' style={{paddingBottom: '20px'}}>
                        <Link className='btn btn-primary mb-2 float-left' to={"/meeting/AddMeeting"} style={{backgroundColor: '#541db9', color: '#fff'}}>
                        Add Meeting
                        </Link>
                    </div>
                </div>
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Link</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Meeting.length > 0 && (
                                        Meeting.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.title}</td>
                                                <td>{row.date}</td>
                                                <td>{row.time}</td>
                                                <td>{row.link}</td>
                                                <td>
                                                    <Link to={`/Meetings/EditMeeting/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteMeeting(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}