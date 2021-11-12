import React, { Component } from 'react'
import './CSS/about.css'
class About extends Component {
 
    render() {
        return (
            <div className="container aboutSection p-lg-3 p-2">
                <div className=" d-flex flex-wrap-reverse justify-content-between align-items-center about-section ">

                    <div className="col-lg-6 col-12 ">

                        <h2 className="aboutHead">Discover Creative Meetings and Unlock Innovations</h2>
                        <p className="aboutDescription">At Restaurantly, we treat each meeting as an opportunity to inspire people to do great work. It all starts with the ideal setting to stimulate the exchange of new ideas and create the framework for innovative thought.</p>
                        
                        <div className="d-flex">
                            <i className="far fa-check-circle fa-lg checkListStyle mt-2 customChecklist"></i>
                            <p className=" ms-2 checkListDescription">Featuring signature elements and ideal settings, our hotels are designed to spark creativity and innovation, helping you develop new ideas from fresh perspectives.</p>
                        </div>

                        <div className="d-flex my-4">
                            <i className="far fa-check-circle fa-lg checkListStyle mt-2 customChecklist"></i>
                            <p className="ms-2 checkListDescription">Creative Meetings invites you to unlock the local culture in a collaborative setting. Experience a taste of the destination’s cuisine and beverages, crafted by the culinary experts at our Restaurantly.</p>
                        </div>

                        <div className="d-flex">
                            <i className="far fa-check-circle fa-lg checkListStyle mt-2 customChecklist"></i>
                            <p className=" ms-2 checkListDescription">Our interactive tools and tactile activities motivate a dynamic meeting of the minds.</p>
                        </div>

                        <p className="aboutFoot">Spark discovery and illuminate insights with Creative Meetings by Restaurantly, designed to unlock inspiration and foster innovation. From locally inspired flavours to cultural experiences, the meetings create an immersive atmosphere that brings the destination in..</p>
                        
                    </div>
                


                    <div className="col-lg-5 col-12 mb-0">
                        <div className=" p-lg-0 p-1">
                            <img className="imgAbout" src="../about.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
