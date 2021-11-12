import React, { Component } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

class LunchComboMeal extends Component {
    render() {
        let dishDetails=[
            {
                id:1,
                icon:"fas fa-bread-slice  p-2 comboIcon",
                about:"Lemon Rice is the part of the menu is more like a starter."
            },
            {
                id:2,
                icon:"fas fa-bread-slice  p-2 comboIcon",
                about:"Sambar Rice is right opposite to the above. It’s hearty and fills you tummy too."
            },
            {
                id:3,
                icon:"fas fa-bread-slice  p-2 comboIcon",
                about:"Snake gourd stir fry."
            },
            {
                id:4,
                icon:"fas fa-bread-slice  p-2 comboIcon",
                about:"Can any south Indian menu end without curd rice? Hell no. Curd Rice is a must to end the meal."
            },
            {
                id:5,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"A small serving of dessert makes this meal complete. We make this quick vermicelli pudding often and it’s family favorite too."
            },
            {
                id:6,
                icon:"fas fa-bread-slice  p-2 comboIcon",
                about:"Usually, variety rice is accompanied with some crisp factor like fryums. We used store bought color fryums."
            },
        ]
        return (
            <React.Fragment>
                <AnimationOnScroll animateIn="animate__fadeInRight" className="d-flex flex-wrap-reverse justify-content-center my-lg-0 my-3">
                    <div className="MealDetails col-lg-8 col-12">
                        <h2 className="comboName">Variety Rice | South Indian</h2>
                        <p className="comboDesc">South Indian variety rice lunch is the menu number 11 for the series. It has sambar rice, lemon rice, curd rice, a vegetable and vermicelli pudding along with some fryums.</p>

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
                        <img className="comboPic" src="../variety-rice.png" alt="" />
                    </div>
                </AnimationOnScroll>
            </React.Fragment>
        )
    }
}

export default LunchComboMeal
