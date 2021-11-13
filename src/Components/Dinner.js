import React, { Component } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

class Dinner extends Component {
    render() {
        let dishDetails=[
            {
                id:1,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"onions are finely chopped"
            },
            {
                id:2,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Tomatoes are finely chopped"
            },
            {
                id:3,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Finely chopped Chillies"
            },
            {
                id:4,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Good pinch chilli powder"
            },
            {
                id:5,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Handful fresh coriander leaves, finely chopped"
            },
            
            
        ]
        return (
            <React.Fragment>
                <AnimationOnScroll animateIn="animate__fadeIn" duration={2} className="d-flex flex-wrap-reverse justify-content-center my-lg-0 my-3">
                    <div className="MealDetails col-lg-8 col-12">
                        <h2 className="comboName">Quick uttapam</h2>
                        <p className="comboDesc">These fluffy  pancakes from South India are made with rice and topped with tomato, chilli and herbs.</p>

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
                        <img className="comboPic" src="../Quick-uttapam-.png" alt="" />
                    </div>

                </AnimationOnScroll>
            </React.Fragment>
        )
    }
}

export default Dinner
