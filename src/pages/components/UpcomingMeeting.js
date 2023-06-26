import React from 'react'

import { Alert, Button } from 'react-bootstrap'

function UpcomingMeeting() {


    const remove = () => {
        localStorage.removeItem('title');
        localStorage.removeItem('date');
        localStorage.removeItem('time');
        localStorage.removeItem('link');

        <Alert variant="success">
         <Alert.Heading>Cancelling Meeting</Alert.Heading>
         <p>
            Meeting cancelled successfully!
         </p>
         <hr />
         </Alert>
    };


  return (
    <div>
        <Button onClick={remove} className='btn ' type="submit" style={{backgroundColor: '#541db9', color: '#fff'}} >
            Cancel Meeting
        </Button>
    
    </div>
  )
}

export default UpcomingMeeting