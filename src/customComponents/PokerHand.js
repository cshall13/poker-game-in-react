import React, { Component } from 'react'
import Card from './cards';

class PokerHand extends Component{

    render(){
        var hand = [];
        this.props.cards.map((card, index)=>{
            // card is the key because it has to be unique among the children. there can
            // be no duplicate cards
            hand.push(<Card key={index} card={card} />)
        })
        return(
            <div className="col-sm-12 the-table">
                {hand}
            </div>
        )
    }
}

export default PokerHand
