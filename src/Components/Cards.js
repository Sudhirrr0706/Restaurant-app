import React, { Component } from 'react'
import "./CSS/Cards.css"
class Cards extends Component {
    render() {
        const{num,heading,content}=this.props
        return (
            <div  className="cardsContent p-4 mx-1 mt-3">
                <h2 className="Count">{num}</h2>
                <h3 className="heading">{heading}</h3>
                <p className="content">{content}</p>
            </div>
        )
    }
}

export default Cards
