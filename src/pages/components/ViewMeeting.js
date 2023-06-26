import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

//import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Navibar'
import Footer from './Footer'


export class ViewMeeting extends Component{

    constructor(){
        super();
        this.state={
            deps:[]
        }
    }

    refreshList(){
        fetch('http://127.0.0.1:8000/meeting/')
        .then(response=>response.json())
        .then(deps=>{
            this.setState({
                deps:deps
            });
            console.log(deps);

        })};


    componentDidMount(){
        this.refreshList();
        }

    componentDidUpadte(){
        this.refreshList();
            }
            

    render(){
        const meetData = this.state.deps;
        const rows = meetData.map((meet) =>
        <tr key={meet.id}>
            <td>{meet.title}</td>
            <td>{meet.date}</td>
            <td>{meet.time}</td>
            <td>{meet.link}</td>      


      </tr>
        );

        return(
         
          <div className='container'>

            <Navibar />

            <div className="card card-body" style={{paddingBottom: '30px', marginBottom: '30px'}} >
              <div className="table-responsive">
                  <table className="table table-bordered mb-0 text-center">
                    <thead>
                        <tr>
                          <th>Title</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                  </table>
              </div>
            </div>

            <Footer />
          </div>

        )
    }
}






















// import React from 'react'
// import Navibar from './Navibar'
// import Footer from './Footer'
// import ListMeeting from '../meeting/ListMeeting'

// function UpcomingMeeting() {
//   return (
//     <div>
//         <Navibar />

//         <div className='container'>
        
//             <ListMeeting />
//         </div>

//         <Footer />
//     </div>
//   )
// }

// export default UpcomingMeeting