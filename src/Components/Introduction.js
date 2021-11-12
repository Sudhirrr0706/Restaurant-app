import React, { Component } from 'react'
import "./CSS/introduction.css"
class Introduction extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center head-section-content">

                <div className="inner-content col-lg-10 col-12">
                    <h1>Welcome to <span style={{color:"#EA8339"}}>Restaurantly</span></h1>
                    <p> Delivering great food for more than 18 years!</p>
                    <div className="d-flex justify-content-lg-start justify-content-center">
                        <a href="#menuSection" className="btn px-3 btn-outline-secondary intro-btn m-2">Our Menu</a>
                        <a href="#ReservationSection" className="btn px-3 btn-outline-secondary intro-btn m-2">Book Table</a>
                    </div>
                </div>
                
                <div className="logo-play mt-lg-0 mt-3 p-1">
                    <i className="fas fa-play-circle fa-4x play-button playButtonRotate"/>
                </div>
                
            </div>
        )
    }
}

export default Introduction
