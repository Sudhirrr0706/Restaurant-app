import React, { Component } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
class Special extends Component {
    render() {
        let allMenu=[
            {
                id:1,
                dish:"Malabar Fish Biryani",
                price:"Rs.300",
                Description:"This classic Malabar Fish Biryani can be devoured at all times. Enjoy the delicious taste of this ever-charming dish.",
                image:"../biryani.png",
                type:"Non-Veg"
            },
            {
                id:2,
                dish:"Pineapple Fried Rice",
                price:"Rs.250",
                Description:"This Thai-style sweet and spicy pineapple fried rice includes red bell pepper, cashews and cilantro.",
                image:"../thai-pineapple-fried-rice.png",
                type:"Veg"
            },
            {
                id:3,
                dish:"Keema Biryani",
                price:"Rs.350",
                Description:"Cook up a storm by combining minced lamb with aromatic spices and crunchy nuts. Keema biryani is the delicious amalgamation of rice with aromatic spices and minced meat, dry fruits and rose water that is a delight to relish on",
                image:"../Keemabiryani.png",
                type:"Non-Veg"
            },
            {
                id:4,
                dish:"Vegan stuffed peppers",
                price:"Rs.300",
                Description:"Make these easy, Mediterranean-inspired vegan stuffed peppers for a filling family dinner that packs in plenty of flavour. Serve with a fresh green salad.",
                image:"../vegan-stuffed-peppers.png",
                type:"Veg"
            },
            {
                id:5,
                dish:"Naadan Crab Masala",
                price:"Rs.350",
                Description:"For those of you who don't know, crab meat is as soft as it's shell is hard. The crab is cooked in local spices and masala until the shell turns orange.",
                image:"../crab.png",
                type:"Non-Veg"
            },
            {
                id:6,
                dish:"Pasta Fagioli Soup",
                price:"Rs.250",
                Description:"With fresh spinach, pasta and seasoned sausage, this fast-to-fix soup is a meal on its own..",
                image:"../Pasta-Fagioli-Soup.png",
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

export default Special
