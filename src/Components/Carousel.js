import React, { Component } from 'react'
import "./CSS/carousel.css"

class Carousel extends Component {
    render() {
        let birthdayEventTypes=[
            {
                id:1,
                type:"3D Theme",
                icon:"fas fa-vr-cardboard fa-2x eventIcon p-2",
                typeDesc:"Why just celebrate in a simple way, do it in a very dreamful way and plan it by your way. We are here only for you. We organize your Birthday Party in the cutest styles and themes to make it memorable for your child and for you."
                
            },
            {
                id:2,
                type:"Balloon Theme",
                icon:"fas fa-golf-ball fa-2x eventIcon p-2",
                typeDesc:"We offer a wide range of balloon decorations for Birthday Parties. We can design the balloon themes as per your choice, colours and requirements. Our balloon decorations include balloon arches, balloon twisters, balloon walls, balloon pillars and many custom designs using balloons."
                
            },
        ]

        let privateParties=[
            {
                id:3,
                icon:"fas fa-glass-cheers fa-2x eventIcon p-2",
                type:"Event description",
                typeDesc:"Planning can be a difficult task but Innocent provides you with innovative ideas to make your celebrations more happening. We make sure that your day will be remembered for lifetime by you and your guests. you can choose from different themes like Cartoon, Circus, Fairy tales etc. Theme parties are equally enjoyed by adults as well as children. We also have different themes for all other occasions as well. Our teams of professionals make Private party Management easy and they are considered as best among the other event organizers."
            }
        ]

        let customParty=[
            {
                id:4,
                type:"Unique Decorations",
                icon:"fas fa-spray-can fa-2x eventIcon p-2",
                typeDesc:"Customize your next event with completely original decorations designed by our teams. Custom Engineered Arts creates wholly unique decorations according to your theme, party needs, and specifications."
            },
            {
                id:5,
                type:"Event Decoration Design by Professionals",
                icon:"fab fa-sketch fa-2x eventIcon p-2",
                typeDesc:"Customize your next event with completely original decorations designed by our teams. Custom Engineered Arts creates wholly unique decorations according to your theme, party needs, and specifications."
            },

        ]
        return (
            <React.Fragment>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        {/* slide 1 Birthday party*/}
                        <div className="carousel-item active py-5" data-bs-interval="2000">
                            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                                <div className="col-lg-6 col-12 p-2"> 
                                    <img src="../event-birthday.jpg" className="slidesPic" alt="..."/>
                                </div>
                                <div className="col-lg-6 col-12 p-lg-2">
                                    <div className="d-flex"> 
                                        <h2 className="eventName p-1">Birthday Parties</h2>
                                        <h3 className="eventPrice p-2">₹ 8000</h3>
                                    </div>
                                    <div>
                                        {
                                            birthdayEventTypes.map(item=>{
                                                return(
                                                    <div key={item.id}>
                                                        <div className="d-flex">
                                                            <i className={item.icon}></i>
                                                            <h3 className="evenType p-2">{item.type}</h3>
                                                        </div>
                                                        <p className="eventDescription">{item.typeDesc}</p>
                                                    </div>
                                                )
                                            })   
                                        }

                                    </div>
                                </div>
                            </div>
                           
                        </div>

                        {/* slide 2 Private Party*/}
                        
                        <div className="carousel-item py-5 " data-bs-interval="2000">
                            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                                <div className="col-lg-6 col-12 p-2"> 
                                    <img src="../event-private.jpg" className="slidesPic" alt="..."/>
                                </div>
                                <div className="col-lg-6 col-12 p-2">
                                    <div className="d-flex"> 
                                        <h2 className="eventName p-1">Private Parties</h2>
                                        <h3 className="eventPrice p-2">₹ 10000</h3>
                                    </div>
                                    <div>
                                        {
                                            privateParties.map(item=>{
                                                return(
                                                    <div key={item.id}>
                                                        <div className="d-flex">
                                                            <i className={item.icon}></i>
                                                            <h3 className="evenType p-2">{item.type}</h3>
                                                        </div>
                                                        <p className="eventDescription">{item.typeDesc}</p>
                                                    </div>
                                                )
                                            })   
                                        }

                                    </div>
                                </div>
                            </div>
                           
                        </div>

                        {/* slide 3 Custom Party*/}

                        <div className="carousel-item py-5" data-bs-interval="2000">
                            <div className="container d-flex flex-wrap justify-content-between align-items-center">
                                <div className="col-lg-6 col-12 p-2"> 
                                    <img src="../event-custom.jpg" className="slidesPic" alt="..."/>
                                </div>
                                <div className="col-lg-6 col-12 p-lg-2">
                                    <div className="d-flex"> 
                                        <h2 className="eventName p-1">Custom Parties</h2>
                                        <h3 className="eventPrice p-2">₹ 10000</h3>
                                    </div>
                                    <div>
                                        {
                                            customParty.map(item=>{
                                                return(
                                                    <div key={item.id}>
                                                        <div className="d-flex">
                                                            <i className={item.icon}></i>
                                                            <h3 className="evenType p-2">{item.type}</h3>
                                                        </div>
                                                        <p className="eventDescription">{item.typeDesc}</p>
                                                    </div>
                                                )
                                            })   
                                        }

                                    </div>
                                </div>
                            </div>
                           
                        </div>

                    </div>
                        
                </div>   

       
            </React.Fragment>
        )
    }
}

export default Carousel
