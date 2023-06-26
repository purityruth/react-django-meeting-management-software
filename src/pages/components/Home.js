import React from 'react'

import Navibar from './Navibar'
import Footer from './Footer'
import AddMeetingModal from "./AddMeetingModal";
import Uploader from './Uploader';
import Minutes from './Minutes';
import { Link } from 'react-router-dom';
import UpcomingMeeting from './UpcomingMeeting';


function Home() {
  return (
    <div className='container'>
        <Navibar />

        <div>
        <div style={{paddingTop: '50px'}}>

        <AddMeetingModal />

        <h3 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>View Meetings</h3>

        
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <div className="cta_content">
              <p style={{width: '500px'}}>All meetings attended are already in our records. View them here!! </p>
              <Link to={`/components/ViewMeeting`} className='btn' style={{border: '1px solid blue'}}> 
                  View all meetings
              </Link>
            </div>
            </div>
          </div>

        

        <h3 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>Minutes Pad</h3>

        <Minutes />

        <h3 style={{textAlign: 'center', paddingTop: '50px', paddingBottom: '30px' }}>Upload Documents for the meeting</h3>

        <Uploader />

        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home