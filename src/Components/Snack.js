import React, { Component } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

class Snack extends Component {
    render() {
        let dishDetails=[
            {
                id:1,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"loaf ciabatta to give 8 thick slices"
            },
            {
                id:2,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Made a horseradish cream by adding the horseradish to the double cream."
            },
            {
                id:3,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Maggie Beer's Bruschetta of smoked eel, beetroot jelly and avocado"
            },
            {
                id:4,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Dividing avocado into equal portions and place on bread."
            },
            {
                id:5,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:" Finish with a dob of the horseradish cream and chervil sprigs and serve with water cress on the side."
            },
        ]
        return (
            <React.Fragment>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2} className="d-flex flex-wrap-reverse justify-content-center my-lg-0 my-3">
                    <div className="MealDetails col-lg-8 col-12">
                        <h2 className="comboName">Smoked eel and beetroot jelly bruschetta</h2>
                        <p className="comboDesc">Bruschetta is a family favourite. Make it interesting with this smoked eel and beetroot jelly version.</p>

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
                        <img className="comboPic" src="../smoked-eel-bruschetta-with-beetroot-.jpg" alt="" />
                    </div>

                </AnimationOnScroll>
            </React.Fragment>
        )
    }
}

export default Snack
