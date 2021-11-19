import React, { Component } from 'react'

class LandingPage extends Component {
    render() {
        return (
          <React.Fragment>
              <div className="landingSection">
                    <i className="far fa-thumbs-up fa-4x text-primary"></i>
                    <h2 className="pt-2">Booking Confirmed !</h2>
                    <p className="mailSent">Confirmation mail sent to your mail-id </p>
              </div>
          </React.Fragment>
        )
    }
}

export default LandingPage
