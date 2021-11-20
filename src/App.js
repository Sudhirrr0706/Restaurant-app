import React, { Component } from 'react'
import './App.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// Import Components
import About from './Components/About';
import AboutCards from './Components/AboutCards';
import Introduction from './Components/Introduction';
import Navbar from './Components/Navbar';
import All from './Components/All';
import Vegetarian from './Components/Vegetarian';
import NonVeg from './Components/NonVeg';
import Special from './Components/Special';
import SpecialComboMeal from './Components/SpecialComboMeal';
import BrunchMeal from './Components/BrunchMeal';
import LunchComboMeal from './Components/LunchComboMeal';
import Snack from './Components/Snack';
import Dinner from './Components/Dinner';
import Carousel from './Components/Carousel';
import BookTable from './Components/BookTable';
import Chefs from './Components/Chefs';
import { Scrolltop } from './Components/Scrolltop';
class App extends Component {

  state={
    allComp:true,
    vegComp:false,
    nonVegComp:false,
    specialComp:false,
    breakFast:true,
    brunch:false,
    lunch:false,
    snack:false,
    dinner:false,
    menuNav:"menuTitle",
    menuNavColor:"activeTitle",
    specialMenuNav:"p-2 specialItemsNav",
    customSpecialMenu:"p-2 customSpecialMenu"
  }

  onClickAllComp=()=>{
    this.setState({
      allComp:true,
    vegComp:false,
    nonVegComp:false,
    specialComp:false,
    })
  }

  onClickVeg=()=>{
    this.setState({
      allComp:false,
      vegComp:true,
      nonVegComp:false,
      specialComp:false,
    })
  }

  onClickNonVeg=()=>{
    this.setState({
      allComp:false,
      vegComp:false,
      nonVegComp:true,
      specialComp:false,
    })
  }

  onClickSpecial=()=>{
    this.setState({
      allComp:false,
      vegComp:false,
      nonVegComp:false,
      specialComp:true,
    })
  }

  breakFastHandler=()=>{
    this.setState({
      breakFast:true,
      brunch:false,
      lunch:false,
      snack:false,
      dinner:false,
    })
  }

  brunchHandler=()=>{
    this.setState({
      breakFast:false,
      brunch:true,
      lunch:false,
      snack:false,
      dinner:false,
    })
  }

  lunchHandler=()=>{
    this.setState({
      breakFast:false,
      brunch:false,
      lunch:true,
      snack:false,
      dinner:false,
    })
  }

  snackHandler=()=>{
    this.setState({
      breakFast:false,
      brunch:false,
      lunch:false,
      snack:true,
      dinner:false,
    })
  }

  dinnerHandler=()=>{
    this.setState({
      breakFast:false,
      brunch:false,
      lunch:false,
      snack:false,
      dinner:true,
    })
  }

  render() {
    let itemRender

    if(this.state.allComp){
      itemRender = <All />
    }
    else if(this.state.vegComp){
      itemRender = <Vegetarian />
    }
    else if(this.state.nonVegComp){
      itemRender=<NonVeg />
    }
    else if(this.state.specialComp){
      itemRender=<Special />
    }
    else{
      itemRender=<All />
    }

    let specialRender

    if(this.state.breakFast){
     specialRender=<SpecialComboMeal />
    }
    else if(this.state.brunch){
      specialRender=<BrunchMeal />
    }
    else if(this.state.lunch){
      specialRender=<LunchComboMeal />
    }
    else if(this.state.snack){
      specialRender=<Snack />
    }
    else if (this.state.dinner){
      specialRender=<Dinner />
    }

    let images = [
      {
        id:1,
        imgSrc:"../gallery-1.jpg",
        // className:"gallery1 col-lg-3 col-md-4 col-12"
      },
      {
        id:2,
        imgSrc:"../gallery-2.jpg",
        // className:"gallery2 col-lg-3 col-md-4 col-12"
      },
      {
        id:3,
        imgSrc:"../gallery-3.jpg",
        // className:"gallery3 col-lg-3 col-md-4 col-12"
      },
      {
        id:4,
        imgSrc:"../gallery-4.jpg",
        // className:"gallery4 col-lg-3 col-md-4 col-12"
      },
      {
        id:5,
        imgSrc:"../gallery-5.jpg",
        // className:"gallery5 col-lg-3 col-md-4 col-12"
      },
      {
        id:6,
        imgSrc:"../gallery-6.jpg",
        // className:"gallery6 col-lg-3 col-md-4 col-12"
      },
      {
        id:7,
        imgSrc:"../gallery-7.jpg",
        // className:"gallery7 col-lg-3 col-md-4 col-12"
      },
      {
        id:8,
        imgSrc:"../gallery-8.jpg",
        // className:"gallery8 col-lg-3 col-md-4 col-12"
      },
    ]
 
    return (
      <React.Fragment>
        {/* Header Section */}
        <header  id="introduction">
          <Navbar/>
          
        </header>

      {/* Scroll To top */}
      <Scrolltop />

        {/* Main Section */}
        <section>

          {/* Introduction */}
          <div className="container">
            <Introduction />
          </div>

          {/* About Section */}
          <div id="aboutSection" className="about pt-5">
              <About/>
              <div className="about-cards" >
                <AboutCards />
              </div>
          </div >


          {/* Menu */}
          <div id="menuSection"  className="menu py-5">
            <AnimationOnScroll animateIn="animate__fadeIn" className="container mx-auto">
              <div className="d-flex">
                <p className="text-white pe-2 my-auto">MENU</p>
                <hr className="text-white col-lg-4 col-8 my-auto"></hr>
              </div>
              
              <h3 className="menuDescription">Check Our Tasty Menu</h3>
            </AnimationOnScroll>

            <div className="MealSection d-flex container">

              <div className="d-flex col-lg-3 col-12 justify-content-around mx-auto my-3 mainMenu">
                <p onClick={this.onClickAllComp} className={this.state.allComp? this.state.menuNavColor : this.state.menuNav}>All</p>
                <p onClick={this.onClickVeg} className={this.state.vegComp? this.state.menuNavColor : this.state.menuNav}>Vegetarian</p>
                <p onClick={this.onClickNonVeg} className={this.state.nonVegComp? this.state.menuNavColor : this.state.menuNav}>Non-Vegetarian</p>
                <p onClick={this.onClickSpecial} className={this.state.specialComp? this.state.menuNavColor : this.state.menuNav}>Special</p>
              </div>

            </div>

            <div className="container">
              {itemRender}
            </div>
          </div>


        {/*  Special Menu */}
          <div id="SpecialMenuSection" className="specialSection py-5">
            <AnimationOnScroll animateIn="animate__fadeIn"  className="container mx-auto">
                <div className="d-flex">
                  <p className="text-white pe-2 my-auto">SPECIALS</p>
                  <hr className="text-white col-lg-4 col-8 my-auto"></hr>
                </div>
                <h3 className="menuDescription">Check Our Specials</h3>
            </AnimationOnScroll>

            <div className="container py-lg-5 d-flex flex-wrap">

              <div className=" specialMenu col-lg-2 col-12">
                <p onClick={this.breakFastHandler} className={this.state.breakFast ? this.state.customSpecialMenu : this.state.specialMenuNav}>BreakFast</p>
                <p onClick={this.brunchHandler} className={this.state.brunch ? this.state.customSpecialMenu : this.state.specialMenuNav}>Brunch</p>
                <p onClick={this.lunchHandler} className={this.state.lunch ? this.state.customSpecialMenu : this.state.specialMenuNav}>Lunch</p>
                <p onClick={this.snackHandler} className={this.state.snack ? this.state.customSpecialMenu : this.state.specialMenuNav}>Snack</p>
                <p onClick={this.dinnerHandler} className={this.state.dinner ? this.state.customSpecialMenu : this.state.specialMenuNav}>Dinner</p>
              </div>
              
              <div className="col-lg-10 col-12 px-lg-3">
                {specialRender}
              </div>
            </div>
          </div>

          {/* Events */}
          <div id="eventSection" className="eventSection py-5">

            <AnimationOnScroll animateIn="animate__fadeIn"  className="container mx-auto">
                <div className="d-flex">
                  <p className="text-white pe-2 my-auto">EVENTS</p>
                  <hr className="text-white col-lg-4 col-8 my-auto"></hr>
                </div>
                <h3 className="menuDescription">Organize Your Events in our Restaurant</h3>
            </AnimationOnScroll>

            <div>
             <Carousel />
            </div>

          </div>

          {/* Booking Table */}
          <div id="ReservationSection" className="bookingSection py-5">
            <AnimationOnScroll animateIn="animate__fadeIn"  className="container mx-auto">
                <div className="d-flex">
                  <p className="text-white pe-2 my-auto">RESERVATION</p>
                  <hr className="text-white col-lg-4 col-8 my-auto"></hr>
                </div>
                <h3 className="menuDescription">Book a Table</h3>
            </AnimationOnScroll>

            <div className="container" animationInDuration={1.5}>
              <BookTable />
            </div>

          </div>

        {/* Gallery Section */}

          <div id="gallerySection" className="gallerySection py-5">

            <AnimationOnScroll animateIn="animate__fadeIn" className="container mx-auto">
                <div className="d-flex">
                  <p className="text-white pe-2 my-auto">GALLERY</p>
                  <hr className="text-white col-lg-4 col-8 my-auto"></hr>
                </div>
                <h3 className="menuDescription">Some Photos from our Restaurant</h3>
            </AnimationOnScroll>

            <AnimationOnScroll  animateIn="animate__zoomIn" animateOnce={true}  className="imageSection d-flex flex-wrap p-2">
              {
                images.map(item=>{
                  return(
                    
                    <div className="d-flex col-lg-3 col-md-4 col-12 imageContainer p-3" key={item.id}>
                      <img  src={item.imgSrc} alt=""  key={item.id}/>
                   </div> 
                  )
                })
              }

            </AnimationOnScroll>
          </div>

          {/* Chef Details Section */}

          <div id="chefSection" className="chefSection">
            <AnimationOnScroll animateIn="animate__fadeIn" className="container mx-auto">
                <div className="d-flex">
                  <p className="text-white pe-2 my-auto">CHEFS</p>
                  <hr className="text-white col-lg-4 col-8 my-auto"></hr>
                </div>
                <h3 className="menuDescription">Our Proffesional Chefs</h3>
            </AnimationOnScroll>

            <div className="d-flex flex-wrap justify-content-center container py-5">
              <Chefs classNameChef="chef1 d-flex justify-content-end align-items-center flex-column  p-3" name="Walter White" position="Master Chef"  />
              <Chefs classNameChef="chef2 d-flex justify-content-end align-items-center  flex-column  p-3" name="Sarah Jhonson" position="Patissier"  />
              <Chefs classNameChef="chef3 d-flex justify-content-end align-items-center flex-column  p-3" name="William Anderson" position="Cook"  />
            </div>

          </div>
        </section>

        
        {/* Footer Section */}
        <footer id="contactSection" className="footerSection pt-5">
        <hr className="text-white col-12 my-auto"></hr>
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true} className="container py-5 d-flex flex-wrap justify-content-center mx-auto p-2">
          <div className="col-lg-3 col-10 ms-auto">
            <div className="footerDetails">
              <h2>RESTAURANTLY</h2>
              <p>Phone : +91 6381609755</p>
              <p>Email : sudhirrr0706@gmail.com</p>
            </div>
            <div className="d-flex justify-content-between col-lg-6 col-10 p-1">
              <i className="fab fa-instagram fa-lg footerIcons "></i>
              <i className="fab fa-twitter fa-lg footerIcons "></i>
              <i className="fab fa-facebook fa-lg footerIcons"></i>
              <i className="fab fa-whatsapp fa-lg footerIcons"></i>
            </div>
          </div>

          <div className="col-lg-3 col-6 footerLinks ms-auto mt-lg-0 mt-3">
            <h5>Usefull Links</h5>
            <div className="d-flex flex-column">
              <i class="fas fa-chevron-right p-2"> Home</i>
              <i class="fas fa-chevron-right p-2"> About Us</i>
              <i class="fas fa-chevron-right p-2"> Services</i>
              <i class="fas fa-chevron-right p-2"> Terms & Services</i>
              <i class="fas fa-chevron-right p-2"> Private Policy</i>
            </div>
          </div>

          <div className="col-lg-3 col-6 footerLinks ms-auto mt-lg-0 mt-3">
            <h5>Our Services</h5>
            <div className="d-flex flex-column">
              <i class="fas fa-chevron-right p-2"> Web Design</i>
              <i class="fas fa-chevron-right p-2">  Web Development</i>
              <i class="fas fa-chevron-right p-2"> Product </i>
              <i class="fas fa-chevron-right p-2"> Marketing</i>
              <i class="fas fa-chevron-right p-2"> Graphic Design</i>
            </div>
          </div>
        </AnimationOnScroll>
      <hr className="text-white col-12 my-auto"></hr>
      <div className="copyrightsSection pt-5 pb-3">
          <p>© Copyright <strong> Restaurantly</strong>.All Rights Reserved</p>
          <p>Designed by <span>Sudhir</span></p>
      </div>
      </footer>
      </React.Fragment>
    )
  }
}

export default App;


