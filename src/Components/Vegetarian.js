import React, { Component } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Vegetarian extends Component {
    render() {
        let allMenu=[
        {
            id:1,
            dish:"Caprese Pasta",
            price:"Rs.200",
            Description:" It’s a super simple burst cherry tomato pasta dish with little mozzarella balls, fresh basil and a splash of white balsamic vinegar.",
            image:"../caprase-Pasta.png",
            type:"Veg"
        },
        {
            id:2,
            dish:" Spaghetti Squash",
            price:"Rs.180",
            Description:"Hearty burrito bowls made with a base of perfectly roasted spaghetti squash. These are such a fun dinner option.",
            image:"../spaghetti-squash-burrito-bowls.png",
            type:"Veg"
        },
        {
            id:3,
            dish:"Vegetarian Soup",
            price:"Rs.150",
            Description:"Finally! Homemade tortilla soup that’s even better than the restaurant versions I enjoyed before giving up chicken.",
            image:"../greek-salad.jpg",
            type:"Veg"
        },
        {
            id:4,
            dish:"Vegetable Fried Rice",
            price:"Rs.200",
            Description:"With more mouths to feed than usual over the weekends, We made this twice in the last 10 days!",
            image:"../vegetable-fried-rice.png",
            type:"Veg"
        },
        {
            id:5,
            dish:"Pineapple Fried Rice",
            price:"Rs.250",
            Description:"This Thai-style sweet and spicy pineapple fried rice includes red bell pepper, cashews and cilantro.",
            image:"../thai-pineapple-fried-rice.png",
            type:"Veg"
        },
        {
            id:6,
            dish:"Minestrone Soup",
            price:"Rs.150",
            Description:"Very tasty and satisfying soup. Turned out great with no changes. Perfect on a cold winter day.",
            image:"../vegetarian-minestrone-soup-recipe.png",
            type:"Veg"
        },
        {
            id:7,
            dish:"Wheat Pizza Dough",
            price:"Rs.200",
            Description:"This pizza dough really couldn’t be easier. Throw the ingredients into your food processor, give it a few kneads.",
            image:"../whole-wheat-pizza-dough.png",
            type:"Veg"
        },
        {
            id:8,
            dish:"Caponata pasta",
            price:"Rs.250",
            Description:"Whip up our easy vegetarian caponata pasta in just 20 minutes. It's simple to make and packs three of your five-a-day into one delicious meal",
            image:"../caponata-pasta.png",
            type:"Veg"
        },
        ]
        return (
            <React.Fragment>
               <div className="d-flex flex-wrap justify-content-center align-items-center">
                       {
                           allMenu.map(item=>{
                               return(
                                <AnimationOnScroll animateIn="animate__fadeInUp" isVisible={this.props.animeVisible} className="col-lg-6 col-12 d-flex flex-wrap justify-content-between p-3" key={item.id}>
                                    <div className="dishBorder col-lg-2 col-3 p-2">
                                        <img className="dishImage" src={item.image} alt=""/>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between my-auto  col-lg-9 col-8 dishes">
                                            <div className="d-flex col-12 flex-wrap justify-content-between">
                                                <h3 className="dishName ">{item.dish}</h3>
                                                <p className="dots ">......................</p>
                                                <p className="mt-auto  price">{item.price}</p>
                                            </div>
                                            <p className="dishDescription mx-auto">{item.Description}</p>
                                    </div>
                                </AnimationOnScroll>
                               )
                           })
                       }
                   
               </div>
           </React.Fragment>
        )
    }
}

export default Vegetarian
