import React from 'react'
import "./CSS/navbar.css" 


class Navbar extends React.Component {

    state={
        togglerIcon:"navbar-toggler fas fa-chevron-down text-white",
    }

    onClickTogglerIcon=()=>{
        if(this.state.togglerIcon==="navbar-toggler fas fa-chevron-down text-white"){
            this.setState({togglerIcon:"navbar-toggler fas fa-chevron-up text-white"})
        }
        else{
            this.setState({togglerIcon:"navbar-toggler fas fa-chevron-down text-white"})
        }
    }

        render() {
        return (
          <React.Fragment>
            <nav className="navbar navbar-expand-lg custom-nav fixed-top">
                <div className="container">
                    <div className="d-flex flex-column mx-auto">
                        <div className="d-flex justify-content-center">
                            <i className="fas fa-hotel fa-lg hotelLogo my-auto pe-1 "></i>
                            <a className="navbar-brand custom-brand-name" href="#introduction">RESTAURANTLY</a>
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="d-flex mobileContact pe-2">
                                <i className="fas fa-mobile-alt fa-1x my-auto pe-1"/>
                                <p className="my-auto customNumber">+91 6381609755</p>
                            </div>
                            <div className="d-flex mobileContact">
                                <i class="far fa-clock fa-1x my-auto pe-1"/>
                                <p className="my-auto customNumber">Mon-Sat: 10AM-23PM</p>
                            </div>
                        </div>
                    </div>
                    
                    <i onClick={this.onClickTogglerIcon} className={this.state.togglerIcon} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"/>
                   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-links mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#introduction">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutSection">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#menuSection">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#SpecialMenuSection">Specials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#eventSection">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#chefSection">Chefs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#SpecialMenuSection">Recipe</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gallerySection">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contactSection">Contact</a>
                            </li>
                        </ul>
                        <a className="btn btn-outline-secondary px-3 navBar-button" href="#ReservationSection">Book A Table</a>
                    </div>
                </div>
            </nav>
          </React.Fragment>
        )
    }
}

export default Navbar
