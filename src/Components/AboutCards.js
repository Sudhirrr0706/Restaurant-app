import React, { Component } from 'react'
import Cards from './Cards'
import "./CSS/aboutCards.css"
class AboutCards extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container py-5">

                    <div className="cards ">
                        <div className="d-flex">
                            <p className="text-white pe-2 my-auto">WHY US</p>
                            <hr className="text-white col-lg-4 col-8 my-auto"></hr>
                        </div>
                        <h2 className="aboutHead">Why Choose Our Restaurant</h2>
                    </div>

                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                        <div className="col-lg-4 col-12 ">
                            <Cards num="01" heading="INSPIRATION IGNITED" content="When it comes to a great meeting of the minds, Restaurantly has everything you need. Discover Creative Meetings and unlock innovation." />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cards num="02" heading="THE GOOD LIFE" content="We invites you to discover the world in style, savour the moment and enjoy experiences that offer something more than meets the eye." />
                        </div>
                        <div className="col-lg-4 col-12">
                            <Cards num="03" heading="THE WORLD AWAITS" content="Offering world-class benefits across an extraordinary portfolio of brands and so much more.Earn and redeem points for all your travels." />
                        </div>
                    </div>
                        
                </div>
            </React.Fragment>
        )
    }
}

export default AboutCards
