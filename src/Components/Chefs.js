import React, { Component } from 'react'
import "./CSS/chefs.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Chefs extends Component {

    render() {
        

        return (
            <React.Fragment> 
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2} className="col-lg-4 col-md-6 col-12 p-2 chefsSection">
                    <div className={this.props.classNameChef}>
                        <div>
                            <h2 className="chefName">{this.props.name}</h2>
                            <p className="chefPosition">{this.props.position}</p>
                        </div>
                        <div className="d-flex justify-content-between col-lg-4 col-6 ">
                            <i className="fab fa-instagram fa-lg customChefIcons"></i>
                            <i className="fab fa-twitter fa-lg customChefIcons"></i>
                            <i className="fab fa-facebook fa-lg customChefIcons"></i>
                            <i className="fab fa-whatsapp fa-lg customChefIcons"></i>
                        </div>

                    </div>

                </AnimationOnScroll>
            </React.Fragment>
        )
    }
}

export default Chefs
