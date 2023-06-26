import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Navibar from './Navibar'
import Footer from './Footer'


import {Button,ButtonToolbar } from 'react-bootstrap';
import AddMeetingModal from "./AddMeetingModal";
import UpcomingMeeting from './UpcomingMeeting';

export class Manage extends Component{
    constructor(){
        super();
        this.state = {
            meeting:[], addModalShow:false, editModalShow:false
        }
    }

    fetchData(){
        fetch('http://127.0.0.1:8000/meeting/')
        .then(response=>response.json())
        .then((data) =>{
            this.setState({
                meeting:data
            });
            console.log(data);
        })};

        componentDidMount(){
            this.fetchData();
        }

        componentDidUpdate(){
            this.fetchData();
        }

        deleteDep(meetid){
            if(window.confirm('Are you sure ?')){
                fetch('http://127.0.0.1:8000/meeting/' + meetid, {
                    method:'DELETE',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'}
                })
            }

        }

    render(){
        const {meeting, meetingId, title, date, time, link} = this.state;
        let AddModalClose=()=>this.setState({addModalShow:false});
        return(
            <div className='container'>

            <Navibar />
            <ButtonToolbar>
                
                <AddMeetingModal show={this.state.addModalShow}
                onHide={AddModalClose}></AddMeetingModal>
            </ButtonToolbar>

            <br />
            <UpcomingMeeting />


            <p id="manage"></p>

            <div className="card card-body">
            <div className="table-responsive">
                <table className="table table-bordered mb-0 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meeting.length > 0 && (
                                meeting.map((meet, key)=>(
                                    <tr key={key}>
                                        <td>{meet.title}</td>
                                        <td>{meet.date}</td>
                                        <td>{meet.time}</td>
                                        <td>{meet.link}</td>
                                        <td>
                                            <Button className="mr-2" variant="danger" 
                                                onClick={()=>this.deleteDep(meet.meetingId)}>
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

        <Footer />
            
        </div>
        )
    }
}