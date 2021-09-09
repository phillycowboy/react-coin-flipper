import React, {Component} from 'react'
import { choice } from './helpers'

class CoinContainer extends Component{
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', imgSrc: "https://tinyurl.com/react-coin-tails-jpg"}
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
            // let newState = {
            //     ...prevState,

            // }
            // if(newCoin.side === "heads"){
            //     newState.nHeads += 1;
            // }else{
            //     newState.nTails += 1;
            // }
            // return newState;
        }))
    }

    handleClick = (e) => {
        this.flipCoin();
    }

    render(){
        return(
            <div className="CoinContainer">
                <h2>Lets Flip a Coin!</h2>
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads, there have been {this.state.nTails} tails.</p>
            </div>
        )
    }
}
export default CoinContainer