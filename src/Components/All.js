import React, { Component } from 'react'
import './CSS/all.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
class All extends Component {

 
    render() {
        let allMenu=[{
            id:1,
            dish:"Caprese Pasta",
            price:"Rs.200",
            Description:" It’s a super simple burst cherry tomato pasta dish with little mozzarella balls, fresh basil and a splash of white balsamic vinegar.",
            image:"../caprase-Pasta.png",
            type:"Veg"
        },
        {
            id:2,
            dish:"Tandoori Lamb Chops",
            price:"Rs.700",
            Description:"Lamb chops marinated in strained yogurt and flavoursome masalas. Cooked till tender, this dish is guaranteed to impress.",
            image:"../lamb-chops.png",
            type:"Non-Veg"
        },
      
        {
            id:3,
            dish:" Spaghetti Squash",
            price:"Rs.180",
            Description:"Hearty burrito bowls made with a base of perfectly roasted spaghetti squash. These are such a fun dinner option.",
            image:"../spaghetti-squash-burrito-bowls.png",
            type:"Veg"
        },
        {
            id:4,
            dish:"Grilled Chicken",
            price:"Rs.350",
            Description:"Chicken marinated in home-made spice powder and green paste.",
            image:"../grilled-chicken.png",
            type:"Non-Veg"
        },
        {
            id:5,
            dish:"Mutton Korma",
            price:"Rs.200",
            Description:"A flavourful mutton curry, where the meat is stirred with curd, garlic-ginger paste, cloves, cardamom and cinnamon sticks.",
            image:"../badam-korma.png",
            type:"Non-Veg"
        },
        {
            id:6,
            dish:"Vegetarian Soup",
            price:"Rs.150",
            Description:"Finally! Homemade tortilla soup that’s even better than the restaurant versions I enjoyed before giving up chicken.",
            image:"../greek-salad.jpg",
            type:"Veg"
        },
        {
            id:7,
            dish:"Malabar Fish Biryani",
            price:"Rs.300",
            Description:"This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish.",
            image:"../biryani.png",
            type:"Non-Veg"
        },
        {
            id:8,
            dish:"Vegetable Fried Rice",
            price:"Rs.200",
            Description:"With more mouths to feed than usual over the weekends, We made this twice in the last 10 days!",
            image:"../vegetable-fried-rice.png",
            type:"Veg"
        },
        {
            id:9,
            dish:"Pineapple Fried Rice",
            price:"Rs.250",
            Description:"This Thai-style sweet and spicy pineapple fried rice includes red bell pepper, cashews and cilantro.",
            image:"../thai-pineapple-fried-rice.png",
            type:"Veg"
        },
        {
            id:10,
            dish:"Chicken 65",
            price:"Rs.180",
            Description:"Chicken 65 is said to have originated in Chennai. This delicious, deep-fried recipe of Chicken 65 is from the house of TamilNadu.",
            image:"../chicken-65.png",
            type:"non-veg"
        },
        {
            id:11,
            dish:"Minestrone Soup",
            price:"Rs.150",
            Description:"Very tasty and satisfying soup. Turned out great with no changes. Perfect on a cold winter day.",
            image:"../vegetarian-minestrone-soup-recipe.png",
            type:"Veg"
        },
        {
            id:12,
            dish:"Goan Prawn Curry",
            price:"Rs.300",
            Description:"Luscious prawns bathed in a burst of flavours to cook up a brilliant Goan delicacy, enjoy! A perfect seafood.",
            image:"../prawn-curry.png",
            type:"non-veg"
        },
        {
            id:13,
            dish:"Wheat Pizza Dough",
            price:"Rs.200",
            Description:"This pizza dough really couldn’t be easier. Throw the ingredients into your food processor, give it a few kneads.",
            image:"../whole-wheat-pizza-dough.png",
            type:"Veg"
        },
        {
            id:14,
            dish:"Butter Chicken",
            price:"Rs.280",
            Description:"Keeping the classic at the last! Butter chicken is one-of-a-kind recipe that's been passed down from one generation to another and holds a permanent spot on India's menu.",
            image:"../butter-chicken.png",
            type:"non-veg"
        },
        {
            id:15,
            dish:"Caponata pasta",
            price:"Rs.250",
            Description:"Whip up our easy vegetarian caponata pasta in just 20 minutes. It's simple to make and packs three of your five-a-day into one delicious meal",
            image:"../caponata-pasta.png",
            type:"Veg"
        },
        {
            id:16,
            dish:"Nihari Gosht",
            price:"Rs.250",
            Description:"A traditional Muslim dish, where the meat almost blends with the gravy. Nihari traditionally means a slow cooked mutton stew",
            image:"../nihari.png",
            type:"non-veg"
        },
    ]
        return (
           <React.Fragment>
               <div className="d-flex flex-wrap justify-content-center align-items-center">
                       {
                           allMenu.map(item=>{
                               return(
                                <AnimationOnScroll animateIn="animate__fadeIn"  isVisible={this.props.animeVisible} className="col-lg-6 col-12 d-flex flex-wrap justify-content-between p-3" key={item.id}>
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

export default All
