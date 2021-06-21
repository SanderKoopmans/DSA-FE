import { Component } from 'react';
import { Input } from 'antd';

import Card from '../card';
import './style.css';

class CardSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }

    searchChange = (event) => {
        this.setState({ search: event.target.value });
    }

    render() {
        // console.info(this.props.cards.length);
        // console.log('CardSearch', this.props, !this.state.search);
        const displayedCards = this.props.cards.filter(card => !this.state.search || card.title.startsWith(this.state.search));

        return (
            <div className="card-container">
                <div className="card-container-searchbar">
                    <Input placeholder="Filter Cards" onChange={this.searchChange} />
                </div>
                <div className="card-container-displayarea" >
                    {displayedCards.map(card => (<Card key={card.title + card.description} title={card.title}><span>{card.description}</span></Card>))}
                </div>
            </div>
        );
    }
}

export default CardSearch;