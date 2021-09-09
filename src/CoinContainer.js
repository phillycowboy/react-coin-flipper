import React, {Component} from 'react'
import Coin from './Coin'
import { choice } from './helpers'

class CoinContainer extends Component{
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "heads.jpeg"},
            {side: 'tails', imgSrc: "tails.jpeg"}
        ]
    }
    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }

    }
    flipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState((prevState) => ({
            currCoin: newCoin,
            nFlips: prevState.nFlips + 1,
            nHeads: prevState.nHeads + (newCoin.side === "heads" ? 1 : 0),
            nTails: prevState.nTails + (newCoin.side === "tails" ? 1 : 0)
        }))
    }

    handleClick = (e) => {
        this.flipCoin();
    }

    render(){
        return(
            <div className="CoinContainer">
                <h2>Lets Flip a Coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads, there have been {this.state.nTails} tails.</p>
            </div>
        )
    }
}
export default CoinContainer