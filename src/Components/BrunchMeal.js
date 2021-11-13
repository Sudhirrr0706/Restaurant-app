import React, { Component } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
class BrunchMeal extends Component {

    render() {
        let dishDetails=[
            {
                id:1,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"A solid base for Seafood and Grits."
            },
            {
                id:2,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Folded in the cheese mixture."
            },
            {
                id:3,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"The final texture of the grits should be soft and smooth."
            },
            {
                id:4,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"They should pour onto the plate and firm up just a little bit, but your grits should be creamy and smooth."
            },
        ]
        return (
            <React.Fragment>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2} className="d-flex flex-wrap-reverse justify-content-center my-lg-0 my-3">
                    <div className="MealDetails col-lg-8 col-12">
                        <h2 className="comboName">Three Cheese Creamy Grits</h2>
                        <p className="comboDesc">Three Cheese Creamy Grits, a savory southern recipe that is always a huge hit for a brunch idea!</p>

                        {
                            dishDetails.map(item=>{

                                return(
                                     <div className="d-flex p-lg-1" key={item.id}>
                                        <i className={item.icon}></i>
                                        <p className="my-auto dishDetails p-1">{item.about}</p>
                                    </div>
                                    )

                                })
                            } 
                        </div>
                    
                    <div className="my-auto col-lg-4 col-12 p-lg-2">
                        <img className="comboPic" src="../Bacon-Wrapped-Braised-Short-Ribs-with-Cheesy-Grits-28.png" alt="" />
                    </div>
                </AnimationOnScroll>
            </React.Fragment>
        )
    }
}

export default BrunchMeal
