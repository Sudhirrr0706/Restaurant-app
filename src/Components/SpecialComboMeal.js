import React, { Component } from 'react'
import"./CSS/specialComboMeal.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


class SpecialComboMeal extends Component {
    render() {
        let dishDetails=[
            {
                id:1,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Fresh Fruit Starter."
            },
            {
                id:2,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Salad with cucumber, tomatoes, sweet corn and radish with raisins and roasted peanuts."
            },
            {
                id:3,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Tandoori Sabji | Cauliflower and fresh capsicum slow cooked in tandoori spices."
            },
            {
                id:4,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:" Palak Masoor Dal | Pink lentils cooked with fresh spinach in tomato gravy."
            },
            {
                id:5,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Spiced Rice | Wholesome, gently cooked brown rice."
            },
            {
                id:6,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:" Soft Peanut Butter Rotis with Whole Wheat, Gently Toasted Without Oil."
            },
            {
                id:7,
                icon:"fas fa-bread-slice p-2 comboIcon",
                about:"Flaxseed B12 Laddu."
            }
        ]
        return (
            <React.Fragment>
                <AnimationOnScroll animateIn="animate__fadeInRight" className="d-flex flex-wrap-reverse justify-content-center my-lg-0 my-3">
                    <div className="MealDetails col-lg-8 col-12">
                        <h2 className="comboName">Plant-based Combo Meal</h2>
                        <p className="comboDesc">100% Whole Food Plant Based Meals Ready to Heat & Eat.Designed by Doctors for Optimal Health.</p>

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
                        <img className="comboPic" src="../vegComboMeal.jpg" alt="" />
                    </div>
                </AnimationOnScroll>
            </React.Fragment>
        )
    }
}

export default SpecialComboMeal

